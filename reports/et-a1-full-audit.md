# ET–DE A1 pilns lingvistiskais un kvalitātes audits

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.1**
**Papildu standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`
**Audita datums:** 2026-08-19
**Auditors:** deterministiskā pārbaude + **GPT-5.6 Luna** (READ-ONLY)
**Production fails:** `data/et/a1.js` + `www/data/et/a1.js` (mirror)
**Piezīme:** Igaunijas tulkojumi glabājas laukā `lv` (projekta konvencija). DE etalons: `data/a1.js`.
**DE:** STRICT READ-ONLY · **Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Production kartītes | **702** |
| Auditētas kartītes (Luna) | **100%** |
| Study objekti | **134/134** |
| Kopējie atradumi | **167** |
| CRITICAL | **1** |
| HIGH | **11** |
| MEDIUM | **22** |
| LOW | **133** |
| LV/atlikušās valodas fragmenti (determ.) | **0** |
| sectionAccents (validate-study A1) | **0** |
| Syntax | **PASS** |
| Mirror data ↔ www | **PASS** |
| Parity (audit-language-parity --lang=et) | **FAIL** (A1 struktūra) |
| Mojibake | **PASS** (0) |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **ET–DE A1: NEEDS REPAIR**


## 2. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Kartīšu skaits | 702/702 PASS |
| Study skaits | **134/134 PASS** |
| JS syntax | PASS |
| Mojibake | PASS |
| Mirror | PASS |

## 3. Palaistie skripti

| Skripts | Komanda |
|---------|---------|
| Strukturālais | `node scripts/audit-language-parity.js --lang=et` |
| Mojibake | `node scripts/audit-mojibake.js --lang=et` |
| Study dizains | `node scripts/validate-study-design.js --lang=et` |
| Kolektors | `node scripts/audit-et-a1-collect.js` |
| Luna | `node scripts/audit-et-a1-linguistic.js` |
| Orkestrators | `node scripts/run-et-a1-full-audit.js` |

## 4. Trūkstošie Study objekti (10)


## 5.1 CRITICAL atradumi (1)

#### ET-A1-0005
**Card ID:** a1-Nummer-455
**Field:** etText
**CURRENT:** number
**NEW:** number
**Problēma:** “number” is English; the Estonian translation is “number”.
**LV etalons (konteksts):** numurs
**DE konteksts:** Nummer
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.2 HIGH atradumi (11)

#### ET-A1-0001
**Card ID:** a1-bitte
**Field:** study.tip.text
**CURRENT:** (tukšs)
**NEW:** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0002
**Card ID:** a1-bitte-study
**Field:** study.tip.text
**CURRENT:** (tukšs)
**NEW:** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0018
**Card ID:** a1-bleiben
**Field:** study.examples[3].lv
**CURRENT:** ma jään koju.
**NEW:** Ma lähen koju.
**Problēma:** Läti lause tähendab „Ma lähen koju”, mitte „Ma jään koju”.
**LV etalons (konteksts):** es eju mājās.
**DE konteksts:** bleiben
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0039
**Card ID:** a1-geben
**Field:** study.examples[2].lv
**CURRENT:** ma võtan raamatu.
**NEW:** Ma annan raamatu.
**Problēma:** “Ma võtan raamatu” means “I take the book”, expressing nehmen rather than geben.
**LV etalons (konteksts):** es paņemu grāmatu.
**DE konteksts:** geben
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0040
**Card ID:** a1-geben
**Field:** study.examples[3].lv
**CURRENT:** ma saan kingi.
**NEW:** Ma annan kingituse.
**Problēma:** “Ma saan kingi” means “I receive a gift”, not “I give a gift” (geben).
**LV etalons (konteksts):** es saņemu dāvanu.
**DE konteksts:** geben
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0043
**Card ID:** a1-haben
**Field:** study.examples[3].lv
**CURRENT:** ma tegin seda.
**NEW:** Mul on see.
**Problēma:** “Ma tegin seda” means “I did it”, expressing machen rather than haben.
**LV etalons (konteksts):** es to izdarīju.
**DE konteksts:** haben
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0044
**Card ID:** a1-hand-study
**Field:** study.examples[2].lv
**CURRENT:** Mu käsivars valutab.
**NEW:** Mu käsi valutab.
**Problēma:** “Käsivars” means forearm, while German Hand and the source sentence refer to the hand.
**LV etalons (konteksts):** man sāp roka.
**DE konteksts:** Hand
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0103
**Card ID:** a1-kosten
**Field:** study.examples[4].lv
**CURRENT:** Arve maksab palju.
**NEW:** Ma maksan arvet.
**Problēma:** Estonian sentence says the bill costs a lot, not that I pay the bill.
**LV etalons (konteksts):** es maksāju rēķinu.
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0104
**Card ID:** a1-kosten
**Field:** study.examples[5].lv
**CURRENT:** Kui palju see maksab?
**NEW:** Kas ma võin sularahas maksta?
**Problēma:** The current sentence asks the price instead of asking whether cash payment is possible.
**LV etalons (konteksts):** vai varu maksāt skaidrā naudā?
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0105
**Card ID:** a1-kosten
**Field:** study.examples[6].lv
**CURRENT:** See maksab kaardiga makstes rohkem.
**NEW:** Ta maksab kaardiga.
**Problēma:** The current sentence says it costs more when paying by card, changing the subject and meaning.
**LV etalons (konteksts):** viņš maksā ar karti.
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0106
**Card ID:** a1-kosten
**Field:** study.examples[7].lv
**CURRENT:** See maksab kohe vähem.
**NEW:** Ma maksan kohe.
**Problēma:** The current sentence says it costs less immediately, not that I will pay immediately.
**LV etalons (konteksts):** es samaksāšu tūlīt.
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.3 MEDIUM atradumi (22)

#### ET-A1-0003
**Card ID:** a1-Arm-44
**Field:** etText
**CURRENT:** käsi
**NEW:** käsivars
**Problēma:** Käsi tähendab peamiselt kätt; saksa Arm vaste on täpsemalt käsivars.
**LV etalons (konteksts):** roka
**DE konteksts:** Arm
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0004
**Card ID:** a1-Esslöffel-168
**Field:** etText
**CURRENT:** supilusikas
**NEW:** supilusikas
**Problēma:** German märksõna on ainsuses, kuid Estonian vorm "supilusikas" on siin mitmuse omastav; õige ainsuse nimetav on "supilusikas".
**LV etalons (konteksts):** ēdamkarote
**DE konteksts:** Esslöffel
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0006
**Card ID:** a1-von-635
**Field:** etText
**CURRENT:** -st
**NEW:** -lt
**Problēma:** Estonian -st usually corresponds to German aus; von is generally expressed with -lt, -l/juurest or alates depending on context.
**LV etalons (konteksts):** no
**DE konteksts:** von
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0008
**Card ID:** a1-baden
**Field:** study.examples[2].lv
**CURRENT:** ta ujub väga hästi.
**NEW:** ta supleb väga hästi.
**Problēma:** “Ta ujub väga hästi” tähendab, et ta schwimmt sehr gut, mitte et ta badet/supleb.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0009
**Card ID:** a1-besuch
**Field:** study.examples[2].lv
**CURRENT:** Arst teeb visiidi.
**NEW:** Arst läheb visiidile.
**Problēma:** „Teeb visiidi” on ebaloomulik; eesti keeles minnakse visiidile.
**LV etalons (konteksts):** Ārsts dodas vizītē.
**DE konteksts:** Besuch
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0014
**Card ID:** a1-bis
**Field:** study.comparison[2].meaning
**CURRENT:** seni, kuni
**NEW:** siiani
**Problēma:** „Seni, kuni” tähendab „until”; „līdz šim” vaste on „siiani” või „seni”.
**LV etalons (konteksts):** līdz šim
**DE konteksts:** bis
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0022
**Card ID:** a1-da
**Field:** study.examples[3].lv
**CURRENT:** tule siia!
**NEW:** Tule sinna!
**Problēma:** „Da” tähendab siin „sinna/seal”, kuid „siia” vastab sõnale „hier”.
**LV etalons (konteksts):** nāc šeit!
**DE konteksts:** da
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0023
**Card ID:** a1-da
**Field:** study.comparison[3].meaning
**CURRENT:** siis
**NEW:** seal
**Problēma:** „Siis” tähendab aega; „da” tähendus on siin „seal”.
**LV etalons (konteksts):** tad
**DE konteksts:** da
**Smagums:** MEDIUM
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0036
**Card ID:** a1-ein
**Field:** study.tip.text
**CURRENT:** Pea meeles: ebamäärane üks/mingi → ein.
**NEW:** Pea meeles: „ein“ ei tähenda ainult „üks“, vaid on sageli lihtsalt umbmäärane artikkel.
**Problēma:** Praegune sõnastus on ebaloomulik ja jätab grammatiliselt puudu selgituse, et ein on sageli artikkel.
**LV etalons (konteksts):** Atceries: ein nav tikai "viens". Bieži tas ir tikai nenoteiktais artikuls.
**DE konteksts:** ein
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0037
**Card ID:** a1-euch
**Field:** study.comparison[0].meaning
**CURRENT:** teie
**NEW:** te
**Problēma:** „Teie“ on omastav asesõna („jūsu“), kuid „jūs“ vaste selles tähenduses on isikuline „te“.
**LV etalons (konteksts):** jūs
**DE konteksts:** euch
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0042
**Card ID:** a1-gleich
**Field:** study.examples[4].lv
**CURRENT:** näeme kohe!
**NEW:** Näeme varsti!
**Problēma:** “Näeme kohe!” suggests seeing someone immediately; “Näeme varsti!” matches “see you shortly”.
**LV etalons (konteksts):** tiekamies pēc brīža!
**DE konteksts:** gleich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0082
**Card ID:** a1-ins
**Field:** study.comparison[3].meaning
**CURRENT:** pinnale (Akk.)
**NEW:** sisse (Akk.)
**Problēma:** ins means into, not onto a surface; pinnale corresponds to a different German preposition.
**LV etalons (konteksts):** uz virsmu (Akk.)
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0083
**Card ID:** a1-ins
**Field:** study.comparison[4].meaning
**CURRENT:** -sse / juurde (Dativ)
**NEW:** sisse (Akk.)
**Problēma:** ins means into, not zu or juurde; the case is accusative, not dative.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0107
**Card ID:** a1-laut
**Field:** study.examples[4].lv
**CURRENT:** Heli on vali.
**NEW:** Heli on ilus.
**Problēma:** The current sentence says the sound is loud instead of beautiful.
**LV etalons (konteksts):** skaņa ir skaista.
**DE konteksts:** laut
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0108
**Card ID:** a1-laut
**Field:** study.examples[5].lv
**CURRENT:** Ma kuulen valju heli.
**NEW:** Ma kuulen mingit heli.
**Problēma:** The current sentence adds that the sound is loud, which is absent from the source.
**LV etalons (konteksts):** es dzirdu kādu skaņu.
**DE konteksts:** laut
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0109
**Card ID:** a1-laut-study
**Field:** study.examples[2].lv
**CURRENT:** Ära tee nii valju heli!
**NEW:** Ära räägi nii valjusti!
**Problēma:** The translation is unnatural and changes “don't speak so loudly” to “don't make such a loud sound.”
**LV etalons (konteksts):** nerunā tik skaļi!
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0110
**Card ID:** a1-mal
**Field:** study.examples[2].lv
**CURRENT:** Üks kord piisab.
**NEW:** Ühest korrast piisab.
**Problēma:** Verb „piisama“ nõuab siin elatiivset vormi: ühest korrast piisab.
**LV etalons (konteksts):** vienreiz pietiek.
**DE konteksts:** Mal
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0162
**Card ID:** a1-über
**Field:** study.comparison[3].meaning
**CURRENT:** -st / kohta mingist allikast
**NEW:** -st / mingi allika kohta
**Problēma:** „Kohta mingist allikast“ on ebaloomuliku sõnajärjega; „mingi allika kohta“ väljendab tähendust õigesti.
**LV etalons (konteksts):** no / par no kāda avota
**DE konteksts:** über
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0163
**Card ID:** a1-unter
**Field:** study.examples[1].lv
**CURRENT:** kass lamab tooli all.
**NEW:** kass magab tooli all.
**Problēma:** Estonian lamab means 'lies'; the source says the cat sleeps under the chair.
**LV etalons (konteksts):** kaķis guļ zem krēsla.
**DE konteksts:** unter
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0164
**Card ID:** a1-vor
**Field:** study.examples[2].lv
**CURRENT:** on viie minuti pärast kaheksa.
**NEW:** kell on viis minutit kaheksast puudu.
**Problēma:** Current Estonian means 'it will be eight in five minutes', not 'it is five to eight'.
**LV etalons (konteksts):** ir bez piecām astoņi.
**DE konteksts:** vor
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0165
**Card ID:** a1-wer
**Field:** etMain
**CURRENT:** kes • kumb
**NEW:** kes
**Problēma:** Wer means 'kes' (who); kumb means 'which one of two' and is not a synonym here.
**LV etalons (konteksts):** kas • kurš
**DE konteksts:** wer
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0166
**Card ID:** a1-werden
**Field:** study.examples[3].lv
**CURRENT:** ma olen väsinud.
**NEW:** ma väsin.
**Problēma:** The current sentence expresses olema ('to be'), not becoming or changing state as werden does.
**LV etalons (konteksts):** es esmu noguris.
**DE konteksts:** werden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.4 LOW atradumi (133)

#### ET-A1-0007
**Card ID:** a1-Weihnachten-648
**Field:** etText
**CURRENT:** Jõulud
**NEW:** jõulud
**Problēma:** The Estonian common noun jõulud is normally written lowercase; the uppercase reflects German noun capitalization.
**LV etalons (konteksts):** Ziemassvētki
**DE konteksts:** Weihnachten
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0010
**Card ID:** a1-bis
**Field:** study.examples[0].lv
**CURRENT:** ma ootan sinu saabumiseni.
**NEW:** Ma ootan sinu saabumiseni.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** Es gaidu tavu ierašanos.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0011
**Card ID:** a1-bis
**Field:** study.examples[1].lv
**CURRENT:** jää siia, kuni ma tagasi tulen.
**NEW:** Jää siia, kuni ma tagasi tulen.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** paliec šeit, līdz es atgriezīšos.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0012
**Card ID:** a1-bis
**Field:** study.examples[2].lv
**CURRENT:** ma õpin saksa keelt õhtuni.
**NEW:** Ma õpin saksa keelt õhtuni.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** es mācos vācu valodu līdz vakaram.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0013
**Card ID:** a1-bis
**Field:** study.examples[3].lv
**CURRENT:** siiani pole ma midagi aru saanud.
**NEW:** Siiani pole ma midagi aru saanud.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** līdz šim es neko neesmu sapratis.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0015
**Card ID:** a1-bleiben
**Field:** study.examples[0].lv
**CURRENT:** ma jään koju.
**NEW:** Ma jään koju.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** es palieku mājās.
**DE konteksts:** bleiben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0016
**Card ID:** a1-bleiben
**Field:** study.examples[1].lv
**CURRENT:** jää siia!
**NEW:** Jää siia!
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** paliec šeit!
**DE konteksts:** bleiben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0017
**Card ID:** a1-bleiben
**Field:** study.examples[2].lv
**CURRENT:** me jääme veel üheks tunniks.
**NEW:** Me jääme veel üheks tunniks.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** mēs paliekam vēl vienu stundu.
**DE konteksts:** bleiben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0019
**Card ID:** a1-da
**Field:** study.examples[0].lv
**CURRENT:** seal on minu auto.
**NEW:** Seal on minu auto.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** tur ir mana mašīna.
**DE konteksts:** da
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0020
**Card ID:** a1-da
**Field:** study.examples[1].lv
**CURRENT:** ma olin seal.
**NEW:** Ma olin seal.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** es biju tur.
**DE konteksts:** da
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0021
**Card ID:** a1-da
**Field:** study.examples[2].lv
**CURRENT:** seal ta tuleb.
**NEW:** Seal ta tuleb.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** te viņš nāk.
**DE konteksts:** da
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0024
**Card ID:** a1-das
**Field:** study.examples[0].lv
**CURRENT:** see on minu auto.
**NEW:** See on minu auto.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** tas ir mans auto.
**DE konteksts:** das
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0025
**Card ID:** a1-das
**Field:** study.examples[1].lv
**CURRENT:** see on hea.
**NEW:** See on hea.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** tas ir labi.
**DE konteksts:** das
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0026
**Card ID:** a1-das
**Field:** study.examples[2].lv
**CURRENT:** raamat, mida ma loen, on huvitav.
**NEW:** Raamat, mida ma loen, on huvitav.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** grāmata, kuru es lasu, ir interesanta.
**DE konteksts:** das
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0027
**Card ID:** a1-dass
**Field:** study.examples[0].lv
**CURRENT:** ma tean, et sa oled väsinud.
**NEW:** Ma tean, et sa oled väsinud.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** es zinu, ka tu esi noguris.
**DE konteksts:** dass
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0028
**Card ID:** a1-dass
**Field:** study.examples[1].lv
**CURRENT:** ta ütleb, et ta tuleb.
**NEW:** Ta ütleb, et ta tuleb.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** viņš saka, ka viņš nāks.
**DE konteksts:** dass
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0029
**Card ID:** a1-dass
**Field:** study.examples[2].lv
**CURRENT:** ma arvan, et see on õige.
**NEW:** Ma arvan, et see on õige.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** es domāju, ka tas ir pareizi.
**DE konteksts:** dass
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0030
**Card ID:** a1-der
**Field:** study.examples[0].lv
**CURRENT:** mees on siin.
**NEW:** Mees on siin.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** vīrietis ir šeit.
**DE konteksts:** der
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0031
**Card ID:** a1-der
**Field:** study.examples[1].lv
**CURRENT:** buss tuleb.
**NEW:** Buss tuleb.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** autobuss brauc.
**DE konteksts:** der
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0032
**Card ID:** a1-der
**Field:** study.examples[2].lv
**CURRENT:** õpetaja räägib.
**NEW:** Õpetaja räägib.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** skolotājs runā.
**DE konteksts:** der
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0033
**Card ID:** a1-die
**Field:** study.examples[0].lv
**CURRENT:** naine on siin.
**NEW:** Naine on siin.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** sieviete ir šeit.
**DE konteksts:** die
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0034
**Card ID:** a1-die
**Field:** study.examples[1].lv
**CURRENT:** kass magab.
**NEW:** Kass magab.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** kaķene guļ.
**DE konteksts:** die
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0035
**Card ID:** a1-die
**Field:** study.examples[2].lv
**CURRENT:** naisõpetaja selgitab.
**NEW:** Naisõpetaja selgitab.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** skolotāja skaidro.
**DE konteksts:** die
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0038
**Card ID:** a1-geben
**Field:** study.examples[0].lv
**CURRENT:** anna mulle palun raamat.
**NEW:** Palun anna mulle raamat.
**Problēma:** Estonian sentence starts with a lowercase letter and the word order is less natural without initial “Palun”.
**LV etalons (konteksts):** iedod man, lūdzu, grāmatu.
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0041
**Card ID:** a1-gleich
**Field:** study.examples[0].lv
**CURRENT:** ma tulen kohe.
**NEW:** Ma tulen kohe.
**Problēma:** The Estonian example sentence starts with a lowercase letter.
**LV etalons (konteksts):** es tūlīt nāku.
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0045
**Card ID:** a1-heißen
**Field:** study.examples[0].lv
**CURRENT:** minu nimi on Anna.
**NEW:** Minu nimi on Anna.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mani sauc Anna.
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0046
**Card ID:** a1-heißen
**Field:** study.examples[1].lv
**CURRENT:** kuidas sind kutsutakse?
**NEW:** Kuidas sind kutsutakse?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** kā tevi sauc?
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0047
**Card ID:** a1-heißen
**Field:** study.examples[2].lv
**CURRENT:** kuidas seda saksa keeles nimetatakse?
**NEW:** Kuidas seda saksa keeles nimetatakse?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** kā tas saucas vāciski?
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0048
**Card ID:** a1-heißen
**Field:** study.examples[3].lv
**CURRENT:** mida see tähendab?
**NEW:** Mida see tähendab?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** ko tas nozīmē?
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0049
**Card ID:** a1-hoch-study
**Field:** study.examples[0].lv
**CURRENT:** Mägi on kõrge.
**NEW:** Mägi on kõrge.
**Problēma:** The common noun mägi should not be capitalized mid-sentence; source sentence should begin with Mägi only if retained as a sentence.
**LV etalons (konteksts):** kalns ir augsts.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0050
**Card ID:** a1-hoch-study
**Field:** study.examples[1].lv
**CURRENT:** riiul on kaks meetrit kõrge.
**NEW:** Riiul on kaks meetrit kõrge.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** plaukts ir divus metrus augsts.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0051
**Card ID:** a1-hoch-study
**Field:** study.examples[2].lv
**CURRENT:** üür on kõrge.
**NEW:** Üür on kõrge.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** īre ir augsta.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0052
**Card ID:** a1-hoch-study
**Field:** study.examples[3].lv
**CURRENT:** müür on kõrge.
**NEW:** Müür on kõrge.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** siena ir augsta.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0053
**Card ID:** a1-hoch-study
**Field:** study.examples[4].lv
**CURRENT:** hinnad on kõrged.
**NEW:** Hinnad on kõrged.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** cenas ir augstas.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0054
**Card ID:** a1-hoeren-study
**Field:** study.examples[1].lv
**CURRENT:** lapsed kuulavad lugu.
**NEW:** Lapsed kuulavad lugu.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** bērni klausās stāstu.
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0055
**Card ID:** a1-hoeren-study
**Field:** study.examples[2].lv
**CURRENT:** ma kuulen sind.
**NEW:** Ma kuulen sind.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es tevi dzirdu.
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0056
**Card ID:** a1-ihr
**Field:** study.examples[0].lv
**CURRENT:** kas te tulete täna õhtul?
**NEW:** Kas te tulete täna õhtul?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** vai jūs nākat šovakar?
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0057
**Card ID:** a1-ihr
**Field:** study.examples[1].lv
**CURRENT:** ma annan talle raamatu.
**NEW:** Ma annan talle raamatu.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es dodu viņai grāmatu.
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0058
**Card ID:** a1-ihr
**Field:** study.examples[2].lv
**CURRENT:** kus te elate?
**NEW:** Kus te elate?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** kur jūs dzīvojat?
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0059
**Card ID:** a1-ihr
**Field:** study.examples[3].lv
**CURRENT:** ta kirjutab talle kirja.
**NEW:** Ta kirjutab talle kirja.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņš raksta viņai vēstuli.
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0060
**Card ID:** a1-ihr
**Field:** study.examples[4].lv
**CURRENT:** kas teil on aega?
**NEW:** Kas teil on aega?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** vai jums ir laiks?
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0061
**Card ID:** a1-ihr
**Field:** study.examples[5].lv
**CURRENT:** see on tema auto.
**NEW:** See on tema auto.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** tā ir viņas automašīna.
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0062
**Card ID:** a1-im
**Field:** study.examples[0].lv
**CURRENT:** ma olen pargis.
**NEW:** Ma olen pargis.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es esmu parkā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0063
**Card ID:** a1-im
**Field:** study.examples[1].lv
**CURRENT:** me elame kesklinnas.
**NEW:** Me elame kesklinnas.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mēs dzīvojam centrā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0064
**Card ID:** a1-im
**Field:** study.examples[2].lv
**CURRENT:** suvel on soe.
**NEW:** Suvel on soe.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** vasarā ir silti.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0065
**Card ID:** a1-im
**Field:** study.examples[3].lv
**CURRENT:** ta töötab kontoris.
**NEW:** Ta töötab kontoris.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņš strādā birojā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0066
**Card ID:** a1-im
**Field:** study.examples[4].lv
**CURRENT:** laps mängib aias.
**NEW:** Laps mängib aias.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** bērns spēlē dārzā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0067
**Card ID:** a1-im
**Field:** study.examples[5].lv
**CURRENT:** jaanuaris sõidan ma Viini.
**NEW:** Jaanuaris sõidan ma Viini.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** janvārī es braucu uz Vīni.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0068
**Card ID:** a1-im
**Field:** study.examples[6].lv
**CURRENT:** ta on kinos.
**NEW:** Ta on kinos.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņa ir kino.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0069
**Card ID:** a1-im
**Field:** study.examples[7].lv
**CURRENT:** me kohtume restoranis.
**NEW:** Me kohtume restoranis.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mēs tiekamies restorānā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0070
**Card ID:** a1-in
**Field:** study.examples[0].lv
**CURRENT:** ma olen Berliinis.
**NEW:** Ma olen Berliinis.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es esmu Berlīnē.
**DE konteksts:** in
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0071
**Card ID:** a1-in
**Field:** study.examples[1].lv
**CURRENT:** ma lähen kooli.
**NEW:** Ma lähen kooli.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es eju uz skolu.
**DE konteksts:** in
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0072
**Card ID:** a1-in
**Field:** study.examples[2].lv
**CURRENT:** raamat on kotis.
**NEW:** Raamat on kotis.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** grāmata ir somā.
**DE konteksts:** in
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0073
**Card ID:** a1-in
**Field:** study.examples[3].lv
**CURRENT:** me läheme kinno.
**NEW:** Me läheme kinno.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mēs ejam uz kino.
**DE konteksts:** in
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0074
**Card ID:** a1-ins
**Field:** study.examples[0].lv
**CURRENT:** ma lähen kinno.
**NEW:** Ma lähen kinno.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es eju uz kino.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0075
**Card ID:** a1-ins
**Field:** study.examples[1].lv
**CURRENT:** ta läheb magama.
**NEW:** Ta läheb magama.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņa iet gulēt.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0076
**Card ID:** a1-ins
**Field:** study.examples[2].lv
**CURRENT:** me sõidame välismaale.
**NEW:** Me sõidame välismaale.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mēs braucam uz ārzemēm.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0077
**Card ID:** a1-ins
**Field:** study.examples[3].lv
**CURRENT:** tule majja!
**NEW:** Tule majja!
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** nāc mājā!
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0078
**Card ID:** a1-ins
**Field:** study.examples[4].lv
**CURRENT:** ta paneb raha rahakotti.
**NEW:** Ta paneb raha rahakotti.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņš ieliek naudu makā.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0079
**Card ID:** a1-ins
**Field:** study.examples[5].lv
**CURRENT:** me läheme muuseumi.
**NEW:** Me läheme muuseumi.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mēs ejam uz muzeju.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0080
**Card ID:** a1-ins
**Field:** study.examples[6].lv
**CURRENT:** ta paneb lilled vette.
**NEW:** Ta paneb lilled vette.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņa liek ziedus ūdenī.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0081
**Card ID:** a1-ins
**Field:** study.examples[7].lv
**CURRENT:** palun, sõida kesklinna.
**NEW:** Palun, sõida kesklinna.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** lūdzu, brauc uz centru.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0084
**Card ID:** a1-jung
**Field:** study.examples[0].lv
**CURRENT:** ta on veel noor.
**NEW:** Ta on veel noor.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņa ir vēl jauna.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0085
**Card ID:** a1-jung
**Field:** study.examples[1].lv
**CURRENT:** koer on noor.
**NEW:** Koer on noor.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** suns ir jauns.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0086
**Card ID:** a1-jung
**Field:** study.examples[2].lv
**CURRENT:** me oleme veel noored.
**NEW:** Me oleme veel noored.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mēs esam vēl jauni.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0087
**Card ID:** a1-jung
**Field:** study.examples[3].lv
**CURRENT:** ta näeb väga noor välja.
**NEW:** Ta näeb väga noor välja.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņš izskatās ļoti jauns.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0088
**Card ID:** a1-jung
**Field:** study.examples[4].lv
**CURRENT:** see on noor paar.
**NEW:** See on noor paar.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** tas ir jauns pāris.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0089
**Card ID:** a1-jung
**Field:** study.examples[5].lv
**CURRENT:** noor naine naeratab.
**NEW:** Noor naine naeratab.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** jaunā sieviete smaida.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0090
**Card ID:** a1-jung
**Field:** study.examples[6].lv
**CURRENT:** minu vend on noorem kui mina.
**NEW:** Minu vend on noorem kui mina.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mans brālis ir jaunāks nekā es.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0091
**Card ID:** a1-kein
**Field:** study.examples[0].lv
**CURRENT:** mul ei ole raha.
**NEW:** Mul ei ole raha.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** man nav naudas.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0092
**Card ID:** a1-kein
**Field:** study.examples[1].lv
**CURRENT:** piima ei ole enam üldse.
**NEW:** Piima ei ole enam üldse.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** piena vairs nav nemaz.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0093
**Card ID:** a1-kein
**Field:** study.examples[2].lv
**CURRENT:** ükski inimene ei olnud seal.
**NEW:** Ükski inimene ei olnud seal.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** neviens cilvēks tur nebija.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0094
**Card ID:** a1-kein
**Field:** study.examples[3].lv
**CURRENT:** mul ei ole aega.
**NEW:** Mul ei ole aega.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** man nav laika.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0095
**Card ID:** a1-kein
**Field:** study.examples[4].lv
**CURRENT:** see ei ole mingi probleem.
**NEW:** See ei ole mingi probleem.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** tā nav nekāda problēma.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0096
**Card ID:** a1-kein
**Field:** study.examples[5].lv
**CURRENT:** meil ei ole lapsi.
**NEW:** Meil ei ole lapsi.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mums nav bērnu.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0097
**Card ID:** a1-kennen-study
**Field:** study.examples[1].lv
**CURRENT:** kas te tunnete seda naist?
**NEW:** Kas te tunnete seda naist?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** vai jūs pazīstat šo sievieti?
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0098
**Card ID:** a1-kennen-study
**Field:** study.examples[2].lv
**CURRENT:** kus te tutvusite?
**NEW:** Kus te tutvusite?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** kur jūs iepazināties?
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0099
**Card ID:** a1-kennen-study
**Field:** study.examples[3].lv
**CURRENT:** ma tunnen teda.
**NEW:** Ma tunnen teda.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es viņu pazīstu.
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0100
**Card ID:** a1-kennen-study
**Field:** study.examples[4].lv
**CURRENT:** kas sa tunned seda linna?
**NEW:** Kas sa tunned seda linna?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** pazīt; wissen
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0101
**Card ID:** a1-wissen-study
**Field:** study.examples[1].lv
**CURRENT:** kust te seda teate?
**NEW:** Kust te seda teate?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** no kurienes jūs to zināt?
**DE konteksts:** wissen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0102
**Card ID:** a1-wissen-study
**Field:** study.examples[2].lv
**CURRENT:** ma tean vastust.
**NEW:** Ma tean vastust.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es zinu atbildi.
**DE konteksts:** wissen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0111
**Card ID:** a1-natuerlich
**Field:** study.examples[0].lv
**CURRENT:** kas tuled kaasa? – muidugi!
**NEW:** Kas tuled kaasa? – Muidugi!
**Problēma:** Lause alguses peavad sõnad „Kas“ ja vastus „Muidugi“ algama suure tähega.
**LV etalons (konteksts):** vai nāc līdzi? – protams!
**DE konteksts:** natürlich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0112
**Card ID:** a1-natuerlich
**Field:** study.examples[1].lv
**CURRENT:** see on loomulik reaktsioon.
**NEW:** See on loomulik reaktsioon.
**Problēma:** Lause alguses peab sõna „See“ algama suure tähega.
**LV etalons (konteksts):** tā ir dabiska reakcija.
**DE konteksts:** natürlich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0113
**Card ID:** a1-natuerlich
**Field:** study.examples[2].lv
**CURRENT:** muidugi, ma aitan sind.
**NEW:** Muidugi, ma aitan sind.
**Problēma:** Lause alguses peab sõna „Muidugi“ algama suure tähega.
**LV etalons (konteksts):** protams, es tev palīdzēšu.
**DE konteksts:** natürlich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0114
**Card ID:** a1-natuerlich
**Field:** study.examples[3].lv
**CURRENT:** tal on loomulikult punased juuksed.
**NEW:** Tal on loomulikult punased juuksed.
**Problēma:** Lause alguses peab sõna „Tal“ algama suure tähega.
**LV etalons (konteksts):** viņai ir dabiski rudi mati.
**DE konteksts:** natürlich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0115
**Card ID:** a1-natuerlich
**Field:** study.examples[4].lv
**CURRENT:** muidugi, ma saan seda teha.
**NEW:** Muidugi, ma saan seda teha.
**Problēma:** Lause alguses peab sõna „Muidugi“ algama suure tähega.
**LV etalons (konteksts):** protams, es to varu izdarīt.
**DE konteksts:** natürlich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0116
**Card ID:** a1-natuerlich
**Field:** study.examples[5].lv
**CURRENT:** see on täiesti loomulik/normaalne.
**NEW:** See on täiesti loomulik/normaalne.
**Problēma:** Lause alguses peab sõna „See“ algama suure tähega.
**LV etalons (konteksts):** tas ir pilnīgi dabiski/normāli.
**DE konteksts:** natürlich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0117
**Card ID:** a1-nehmen
**Field:** study.examples[0].lv
**CURRENT:** ma sõidan bussiga.
**NEW:** Ma sõidan bussiga.
**Problēma:** Lause alguses peab sõna „Ma“ algama suure tähega.
**LV etalons (konteksts):** es braucu ar autobusu.
**DE konteksts:** nehmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0118
**Card ID:** a1-nehmen
**Field:** study.examples[1].lv
**CURRENT:** võta raamat!
**NEW:** Võta raamat!
**Problēma:** Lause alguses peab sõna „Võta“ algama suure tähega.
**LV etalons (konteksts):** paņem grāmatu!
**DE konteksts:** nehmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0119
**Card ID:** a1-nehmen
**Field:** study.examples[2].lv
**CURRENT:** ma toon sulle raamatu.
**NEW:** Ma toon sulle raamatu.
**Problēma:** Lause alguses peab sõna „Ma“ algama suure tähega.
**LV etalons (konteksts):** es tev atnesu grāmatu.
**DE konteksts:** nehmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0120
**Card ID:** a1-nehmen
**Field:** study.examples[3].lv
**CURRENT:** ma tulen sulle järele.
**NEW:** Ma tulen sulle järele.
**Problēma:** Lause alguses peab sõna „Ma“ algama suure tähega.
**LV etalons (konteksts):** es tevi paņemšu.
**DE konteksts:** nehmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0121
**Card ID:** a1-neu
**Field:** study.examples[0].lv
**CURRENT:** minu telefon on uus.
**NEW:** Minu telefon on uus.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** mans telefons ir jauns.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0122
**Card ID:** a1-neu
**Field:** study.examples[1].lv
**CURRENT:** meil on uus auto.
**NEW:** Meil on uus auto.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** mums ir jauna automašīna.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0123
**Card ID:** a1-neu
**Field:** study.examples[2].lv
**CURRENT:** see on minu uus korter.
**NEW:** See on minu uus korter.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** tas ir mans jaunais dzīvoklis.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0124
**Card ID:** a1-neu
**Field:** study.examples[3].lv
**CURRENT:** ma ostsin uued kingad.
**NEW:** Ma ostsin uued kingad.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es nopirku jaunas kurpes.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0125
**Card ID:** a1-neu
**Field:** study.examples[4].lv
**CURRENT:** see on uus idee.
**NEW:** See on uus idee.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** tā ir jauna ideja.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0126
**Card ID:** a1-neu
**Field:** study.examples[5].lv
**CURRENT:** tal on uus töö.
**NEW:** Tal on uus töö.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** viņam ir jauns darbs.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0127
**Card ID:** a1-neu
**Field:** study.examples[6].lv
**CURRENT:** mis uut?
**NEW:** Mis uut?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** kas jauns?
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0128
**Card ID:** a1-noch-study
**Field:** study.examples[1].lv
**CURRENT:** ma olen veel kodus.
**NEW:** Ma olen veel kodus.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es vēl esmu mājās.
**DE konteksts:** noch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0129
**Card ID:** a1-noch-study
**Field:** study.examples[2].lv
**CURRENT:** kas sa oled veel siin?
**NEW:** Kas sa oled veel siin?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** vai tu vēl esi šeit?
**DE konteksts:** noch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0130
**Card ID:** a1-nur-study
**Field:** study.examples[1].lv
**CURRENT:** mul on ainult kümme eurot.
**NEW:** Mul on ainult kümme eurot.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** man ir tikai desmit eiro.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0131
**Card ID:** a1-nur-study
**Field:** study.examples[2].lv
**CURRENT:** ainult sina saad mind aidata.
**NEW:** Ainult sina saad mind aidata.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** tikai tu vari man palīdzēt.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0132
**Card ID:** a1-nur-study
**Field:** study.examples[3].lv
**CURRENT:** ma tahan ainult kohvi.
**NEW:** Ma tahan ainult kohvi.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es gribu tikai kafiju.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0133
**Card ID:** a1-nur-study
**Field:** study.examples[4].lv
**CURRENT:** mul on ainult kaheksa eurot.
**NEW:** Mul on ainult kaheksa eurot.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** man ir tikai astoņi eiro.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0134
**Card ID:** a1-ob
**Field:** study.examples[0].lv
**CURRENT:** ma ei tea, kas ta tuleb.
**NEW:** Ma ei tea, kas ta tuleb.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es nezinu, vai viņš nāks.
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0135
**Card ID:** a1-ob
**Field:** study.examples[1].lv
**CURRENT:** ta küsib, kas sul on aega.
**NEW:** Ta küsib, kas sul on aega.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** viņa jautā, vai tev ir laiks.
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0136
**Card ID:** a1-ob
**Field:** study.examples[2].lv
**CURRENT:** ütle mulle, kas see on tõsi.
**NEW:** Ütle mulle, kas see on tõsi.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** pasaki man, vai tā ir taisnība.
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0137
**Card ID:** a1-ob
**Field:** study.examples[3].lv
**CURRENT:** kas sa tuled täna või homme?
**NEW:** Kas sa tuled täna või homme?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** vai tu nāksi šodien vai rīt?
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0138
**Card ID:** a1-oder
**Field:** study.examples[0].lv
**CURRENT:** kohvi või teed?
**NEW:** Kohvi või teed?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** kafiju vai tēju?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0139
**Card ID:** a1-oder
**Field:** study.examples[1].lv
**CURRENT:** täna või homme?
**NEW:** Täna või homme?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** šodien vai rīt?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0140
**Card ID:** a1-oder
**Field:** study.examples[2].lv
**CURRENT:** kas sa tahad pitsat või salatit?
**NEW:** Kas sa tahad pitsat või salatit?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** vai tu gribi picu vai salātus?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0141
**Card ID:** a1-oder
**Field:** study.examples[3].lv
**CURRENT:** sa tuled, eks?
**NEW:** Sa tuled, eks?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** tu nāksi, vai ne?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0142
**Card ID:** a1-passen
**Field:** study.examples[0].lv
**CURRENT:** jakk sobib mulle.
**NEW:** Jakk sobib mulle.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** jaka man der.
**DE konteksts:** passen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0143
**Card ID:** a1-passen
**Field:** study.examples[1].lv
**CURRENT:** kleit sobib hästi.
**NEW:** Kleit sobib hästi.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** kleita labi der.
**DE konteksts:** passen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0144
**Card ID:** a1-passen
**Field:** study.examples[2].lv
**CURRENT:** see värv sobib sulle.
**NEW:** See värv sobib sulle.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** šī krāsa tev piestāv.
**DE konteksts:** passen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0145
**Card ID:** a1-passen
**Field:** study.examples[3].lv
**CURRENT:** see sobib.
**NEW:** See sobib.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** tas der.
**DE konteksts:** passen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0146
**Card ID:** a1-probieren
**Field:** study.examples[0].lv
**CURRENT:** maitse suppi!
**NEW:** Maitse suppi!
**Problēma:** Käsklause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** pagaršo zupu!
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0147
**Card ID:** a1-probieren
**Field:** study.examples[1].lv
**CURRENT:** ma tahan kooki maitsta.
**NEW:** Ma tahan kooki maitsta.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es gribu nogaršot kūku.
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0148
**Card ID:** a1-probieren
**Field:** study.examples[2].lv
**CURRENT:** me proovime uut meetodit.
**NEW:** Me proovime uut meetodit.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** mēs izmēģinām jaunu metodi.
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0149
**Card ID:** a1-reis
**Field:** study.examples[0].lv
**CURRENT:** riis on valmis.
**NEW:** Riis on valmis.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** rīsi ir gatavi.
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0150
**Card ID:** a1-reis
**Field:** study.examples[1].lv
**CURRENT:** ma söön riisi.
**NEW:** Ma söön riisi.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es ēdu rīsus.
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0151
**Card ID:** a1-reis
**Field:** study.examples[2].lv
**CURRENT:** kas sa keedad riisi?
**NEW:** Kas sa keedad riisi?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** vai tu gatavo rīsus?
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0152
**Card ID:** a1-reis
**Field:** study.examples[3].lv
**CURRENT:** riis maitseb hästi.
**NEW:** Riis maitseb hästi.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** rīsi garšo labi.
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0153
**Card ID:** a1-sagen-study
**Field:** study.examples[0].lv
**CURRENT:** mida sa ütlesid?
**NEW:** Mida sa ütlesid?
**Problēma:** Küsimus peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** ko tu pateici?
**DE konteksts:** sagen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0154
**Card ID:** a1-schauen-study
**Field:** study.examples[1].lv
**CURRENT:** me vaatame aknast välja.
**NEW:** Me vaatame aknast välja.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** mēs skatāmies pa logu.
**DE konteksts:** schauen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0155
**Card ID:** a1-schauen-study
**Field:** study.examples[2].lv
**CURRENT:** ma vaatan telerit.
**NEW:** Ma vaatan telerit.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es skatos televizoru.
**DE konteksts:** schauen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0156
**Card ID:** a1-schon-study
**Field:** study.examples[0].lv
**CURRENT:** ma olen juba kodus.
**NEW:** Ma olen juba kodus.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es jau esmu mājās.
**DE konteksts:** schon
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0157
**Card ID:** a1-schwimmen
**Field:** study.examples[0].lv
**CURRENT:** mulle meeldib ujuda.
**NEW:** Mulle meeldib ujuda.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** man patīk peldēt.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0158
**Card ID:** a1-schwimmen
**Field:** study.examples[1].lv
**CURRENT:** ta ujub väga hästi.
**NEW:** Ta ujub väga hästi.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0159
**Card ID:** a1-schwimmen
**Field:** study.examples[2].lv
**CURRENT:** me ujume basseinis.
**NEW:** Me ujume basseinis.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** mēs peldam baseinā.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0160
**Card ID:** a1-schwimmen
**Field:** study.examples[3].lv
**CURRENT:** ma lähen ujuma.
**NEW:** Ma lähen ujuma.
**Problēma:** Täislause peab eesti keeles algama suure algustähega.
**LV etalons (konteksts):** es eju peldēties.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0161
**Card ID:** a1-sie-study-2
**Field:** study.examples[5].lv
**CURRENT:** teie teete süüa, palun.
**NEW:** Te teete süüa, palun.
**Problēma:** Lause alguses peab olema suur algustäht; formaalse pöördumise korral kasutatakse tavaliselt vormi „Te“.
**LV etalons (konteksts):** jūs gatavojat, lūdzu.
**DE konteksts:** Sie
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0167
**Card ID:** a1-einmal
**Field:** study.examples[0].lv
**CURRENT:** ma olin kord Berliinis.
**NEW:** Ma olin kord Berliinis.
**Problēma:** Lause alguses peab asesõna olema suure algustähega.
**LV etalons (konteksts):** es reiz biju Berlīnē.
**DE konteksts:** einmal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 6. Metodoloģija

1. `node scripts/audit-language-parity.js --lang=et`
2. `node scripts/audit-mojibake.js --lang=et`
3. `node scripts/validate-study-design.js --lang=et`
4. `node scripts/audit-et-a1-collect.js`
5. `node scripts/audit-et-a1-linguistic.js` — GPT-5.6 Luna 702/702 coverage
6. Deterministisko un Luna atradumu konsolidācija

**Production changes = 0** · **DE changes = 0**

## 7. Pagaidu artefakti

- `reports/temp/et-a1-audit-data.json`
- `reports/temp/et-a1-linguistic-audit.json`
- `reports/temp/et-a1-full-audit-luna/`
- `reports/temp/et-a1-full-audit.json`
