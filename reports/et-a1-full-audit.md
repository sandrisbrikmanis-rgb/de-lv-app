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
| Kopējie atradumi | **67** |
| CRITICAL | **0** |
| HIGH | **5** |
| MEDIUM | **13** |
| LOW | **49** |
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


## 5.2 HIGH atradumi (5)

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
#### ET-A1-0007
**Card ID:** a1-baden
**Field:** study.examples[2].lv
**CURRENT:** ta ujub väga hästi.
**NEW:** ta supleb järves.
**Problēma:** Praegune lause tähendab „ta ujub väga hästi” ehk schwimmen, mitte baden ehk suplema.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0017
**Card ID:** a1-hand-study
**Field:** study.examples[2].lv
**CURRENT:** Mu käsivars valutab.
**NEW:** Mu käsi valutab.
**Problēma:** Hand tähendab siin kätt, mitte käsivart; „käsivars” vastab saksa sõnale Unterarm.
**LV etalons (konteksts):** man sāp roka.
**DE konteksts:** Meine Hand tut weh.
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0018
**Card ID:** a1-morgen-study
**Field:** study.examples[1].lv
**CURRENT:** Tere hommikust!
**NEW:** Homseni!
**Problēma:** Līdz rīt! tähendab „bis morgen” ehk „homseni”, mitte „tere hommikust”.
**LV etalons (konteksts):** līdz rīt!
**DE konteksts:** Morgen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.3 MEDIUM atradumi (13)

#### ET-A1-0003
**Card ID:** a1-Arm-44
**Field:** etText
**CURRENT:** käsi
**NEW:** käsivars
**Problēma:** „Käsi” tähendab tavaliselt kätt; saksa „Arm” täpsem vaste on „käsivars”.
**LV etalons (konteksts):** roka
**DE konteksts:** Arm
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0005
**Card ID:** a1-also
**Field:** study.comparison[1].meaning
**CURRENT:** ka
**NEW:** auch: ka
**Problēma:** Saksa also ei tähenda „ka”; see on saksa auch tähendus. Võrdlus vajab õige saksa märksõna.
**LV etalons (konteksts):** arī
**DE konteksts:** also
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0006
**Card ID:** a1-aufs
**Field:** study.examples[6].lv
**CURRENT:** tule kiiresti paati!
**NEW:** roni kiiresti paadile!
**Problēma:** aufs tähendab liikumist millegi peale; „paati” tähendab sisse, mille saksa vaste oleks ins.
**LV etalons (konteksts):** Kāp ātri laivā!
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0008
**Card ID:** a1-besuch
**Field:** study.examples[2].lv
**CURRENT:** Arst teeb visiidi.
**NEW:** Arst läheb visiidile.
**Problēma:** „Arst läheb visiidile” on loomulikum vaste arstivisiidile mineku kohta.
**LV etalons (konteksts):** Ārsts dodas vizītē.
**DE konteksts:** Besuch
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0013
**Card ID:** a1-bis
**Field:** study.comparison[2].meaning
**CURRENT:** seni, kuni
**NEW:** seni
**Problēma:** „Līdz šim” tähendab „seni”; „seni, kuni” tähendab tingimuslikku „kuni”.
**LV etalons (konteksts):** līdz šim
**DE konteksts:** bis
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0014
**Card ID:** a1-der
**Field:** study.examples[1].lv
**CURRENT:** buss tuleb.
**NEW:** Buss sõidab.
**Problēma:** „Brauc” tähendab sõitmist; „tuleb” muudab tegevuse tähenduseks kohale tulemise.
**LV etalons (konteksts):** autobuss brauc.
**DE konteksts:** der
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0016
**Card ID:** a1-halten
**Field:** study.comparison[2].meaning
**CURRENT:** peatama
**NEW:** peatuma • peatama
**Problēma:** Praegune vaste katab ainult transitiivse tähenduse „apturēt”, mitte „apstāties” ehk peatuma.
**LV etalons (konteksts):** apstāties • apturēt
**DE konteksts:** anhalten • stoppen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0059
**Card ID:** a1-wer
**Field:** etMain
**CURRENT:** kes • kumb
**NEW:** kes
**Problēma:** Wer means who; kumb means which of two and adds an incorrect meaning.
**LV etalons (konteksts):** kas • kurš
**DE konteksts:** wer
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0060
**Card ID:** a1-werden
**Field:** study.examples[3].lv
**CURRENT:** ma olen väsinud.
**NEW:** ma väsin.
**Problēma:** Current text means 'I am tired' (sein), not becoming or getting tired (werden).
**LV etalons (konteksts):** es esmu noguris.
**DE konteksts:** werden
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0061
**Card ID:** a1-uhr
**Field:** study.examples[0].lv
**CURRENT:** On kaheksa (kell kaheksa).
**NEW:** Kell on kaheksa (kell kaheksa).
**Problēma:** Standardne eesti ajaväljend vajab sõna „kell”; „On kaheksa” ei ole A1-tasemel korrektne.
**LV etalons (konteksts):** Ir astoņi (pulksten astoņi).
**DE konteksts:** Uhr
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0062
**Card ID:** a1-uhr
**Field:** study.examples[1].lv
**CURRENT:** on kaheksa (kell kaheksa).
**NEW:** kell on kaheksa (kell kaheksa).
**Problēma:** Standardne eesti ajaväljend vajab sõna „kell”; „on kaheksa” ei ole A1-tasemel korrektne.
**LV etalons (konteksts):** ir astoņi (pulksten astoņi).
**DE konteksts:** Uhr
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0063
**Card ID:** a1-uhr
**Field:** study.examples[3].lv
**CURRENT:** on kaheksa.
**NEW:** kell on kaheksa.
**Problēma:** Standardne eesti ajaväljend on „kell on kaheksa”, mitte paljas „on kaheksa”.
**LV etalons (konteksts):** ir astoņi.
**DE konteksts:** Uhr
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0064
**Card ID:** a1-uhr
**Field:** study.examples[4].lv
**CURRENT:** On kaheksa (kell).
**NEW:** Kell on kaheksa (kell).
**Problēma:** Standardne eesti ajaväljend vajab sõna „kell”; „On kaheksa” ei ole A1-tasemel korrektne.
**LV etalons (konteksts):** Ir astoņi (pulksten).
**DE konteksts:** Uhr
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.4 LOW atradumi (49)

#### ET-A1-0004
**Card ID:** a1-Weihnachten-648
**Field:** etText
**CURRENT:** Jõulud
**NEW:** jõulud
**Problēma:** Estonian holiday names are normally written in lowercase; capitalization follows German noun orthography here.
**LV etalons (konteksts):** Ziemassvētki
**DE konteksts:** Weihnachten
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0009
**Card ID:** a1-bis
**Field:** study.examples[0].lv
**CURRENT:** ma ootan sinu saabumiseni.
**NEW:** Ma ootan sinu saabumiseni.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** Es gaidu tavu ierašanos.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0010
**Card ID:** a1-bis
**Field:** study.examples[1].lv
**CURRENT:** jää siia, kuni ma tagasi tulen.
**NEW:** Jää siia, kuni ma tagasi tulen.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** paliec šeit, līdz es atgriezīšos.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0011
**Card ID:** a1-bis
**Field:** study.examples[2].lv
**CURRENT:** ma õpin saksa keelt õhtuni.
**NEW:** Ma õpin saksa keelt õhtuni.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** es mācos vācu valodu līdz vakaram.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0012
**Card ID:** a1-bis
**Field:** study.examples[3].lv
**CURRENT:** siiani pole ma midagi aru saanud.
**NEW:** Siiani pole ma midagi aru saanud.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** līdz šim es neko neesmu sapratis.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0015
**Card ID:** a1-geben
**Field:** study.examples[0].lv
**CURRENT:** anna mulle palun raamat.
**NEW:** Anna mulle palun raamat.
**Problēma:** Lause algus peab algama suure tähega.
**LV etalons (konteksts):** iedod man, lūdzu, grāmatu.
**DE konteksts:** Geben Sie mir bitte ein Buch.
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0019
**Card ID:** a1-neu
**Field:** study.examples[0].lv
**CURRENT:** minu telefon on uus.
**NEW:** Minu telefon on uus.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** mans telefons ir jauns.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0020
**Card ID:** a1-neu
**Field:** study.examples[1].lv
**CURRENT:** meil on uus auto.
**NEW:** Meil on uus auto.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** mums ir jauna automašīna.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0021
**Card ID:** a1-neu
**Field:** study.examples[2].lv
**CURRENT:** see on minu uus korter.
**NEW:** See on minu uus korter.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** tas ir mans jaunais dzīvoklis.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0022
**Card ID:** a1-neu
**Field:** study.examples[3].lv
**CURRENT:** ma ostsin uued kingad.
**NEW:** Ma ostsin uued kingad.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es nopirku jaunas kurpes.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0023
**Card ID:** a1-neu
**Field:** study.examples[4].lv
**CURRENT:** see on uus idee.
**NEW:** See on uus idee.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** tā ir jauna ideja.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0024
**Card ID:** a1-neu
**Field:** study.examples[5].lv
**CURRENT:** tal on uus töö.
**NEW:** Tal on uus töö.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** viņam ir jauns darbs.
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0025
**Card ID:** a1-neu
**Field:** study.examples[6].lv
**CURRENT:** mis uut?
**NEW:** Mis uut?
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** kas jauns?
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0026
**Card ID:** a1-noch-study
**Field:** study.examples[1].lv
**CURRENT:** ma olen veel kodus.
**NEW:** Ma olen veel kodus.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es vēl esmu mājās.
**DE konteksts:** noch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0027
**Card ID:** a1-nur-study
**Field:** study.examples[1].lv
**CURRENT:** mul on ainult kümme eurot.
**NEW:** Mul on ainult kümme eurot.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** man ir tikai desmit eiro.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0028
**Card ID:** a1-nur-study
**Field:** study.examples[3].lv
**CURRENT:** ma tahan ainult kohvi.
**NEW:** Ma tahan ainult kohvi.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es gribu tikai kafiju.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0029
**Card ID:** a1-nur-study
**Field:** study.examples[4].lv
**CURRENT:** mul on ainult kaheksa eurot.
**NEW:** Mul on ainult kaheksa eurot.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** man ir tikai astoņi eiro.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0030
**Card ID:** a1-ob
**Field:** study.examples[0].lv
**CURRENT:** ma ei tea, kas ta tuleb.
**NEW:** Ma ei tea, kas ta tuleb.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es nezinu, vai viņš nāks.
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0031
**Card ID:** a1-ob
**Field:** study.examples[1].lv
**CURRENT:** ta küsib, kas sul on aega.
**NEW:** Ta küsib, kas sul on aega.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** viņa jautā, vai tev ir laiks.
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0032
**Card ID:** a1-ob
**Field:** study.examples[2].lv
**CURRENT:** ütle mulle, kas see on tõsi.
**NEW:** Ütle mulle, kas see on tõsi.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** pasaki man, vai tā ir taisnība.
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0033
**Card ID:** a1-ob
**Field:** study.examples[3].lv
**CURRENT:** kas sa tuled täna või homme?
**NEW:** Kas sa tuled täna või homme?
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** vai tu nāksi šodien vai rīt?
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0034
**Card ID:** a1-oder
**Field:** study.examples[0].lv
**CURRENT:** kohvi või teed?
**NEW:** Kohvi või teed?
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** kafiju vai tēju?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0035
**Card ID:** a1-oder
**Field:** study.examples[1].lv
**CURRENT:** täna või homme?
**NEW:** Täna või homme?
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** šodien vai rīt?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0036
**Card ID:** a1-oder
**Field:** study.examples[2].lv
**CURRENT:** kas sa tahad pitsat või salatit?
**NEW:** Kas sa tahad pitsat või salatit?
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** vai tu gribi picu vai salātus?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0037
**Card ID:** a1-oder
**Field:** study.examples[3].lv
**CURRENT:** sa tuled, eks?
**NEW:** Sa tuled, eks?
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** tu nāksi, vai ne?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0038
**Card ID:** a1-passen
**Field:** study.examples[0].lv
**CURRENT:** jakk sobib mulle.
**NEW:** Jakk sobib mulle.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** jaka man der.
**DE konteksts:** passen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0039
**Card ID:** a1-passen
**Field:** study.examples[1].lv
**CURRENT:** kleit sobib hästi.
**NEW:** Kleit sobib hästi.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** kleita labi der.
**DE konteksts:** passen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0040
**Card ID:** a1-passen
**Field:** study.examples[2].lv
**CURRENT:** see värv sobib sulle.
**NEW:** See värv sobib sulle.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** šī krāsa tev piestāv.
**DE konteksts:** passen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0041
**Card ID:** a1-passen
**Field:** study.examples[3].lv
**CURRENT:** see sobib.
**NEW:** See sobib.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** tas der.
**DE konteksts:** passen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0042
**Card ID:** a1-probieren
**Field:** study.examples[0].lv
**CURRENT:** maitse suppi!
**NEW:** Maitse suppi!
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** pagaršo zupu!
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0043
**Card ID:** a1-probieren
**Field:** study.examples[1].lv
**CURRENT:** ma tahan kooki maitsta.
**NEW:** Ma tahan kooki maitsta.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es gribu nogaršot kūku.
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0044
**Card ID:** a1-probieren
**Field:** study.examples[2].lv
**CURRENT:** me proovime uut meetodit.
**NEW:** Me proovime uut meetodit.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** mēs izmēģinām jaunu metodi.
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0045
**Card ID:** a1-reis
**Field:** study.examples[0].lv
**CURRENT:** riis on valmis.
**NEW:** Riis on valmis.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** rīsi ir gatavi.
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0046
**Card ID:** a1-reis
**Field:** study.examples[1].lv
**CURRENT:** ma söön riisi.
**NEW:** Ma söön riisi.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es ēdu rīsus.
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0047
**Card ID:** a1-reis
**Field:** study.examples[2].lv
**CURRENT:** kas sa keedad riisi?
**NEW:** Kas sa keedad riisi?
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** vai tu gatavo rīsus?
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0048
**Card ID:** a1-reis
**Field:** study.examples[3].lv
**CURRENT:** riis maitseb hästi.
**NEW:** Riis maitseb hästi.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** rīsi garšo labi.
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0049
**Card ID:** a1-sagen-study
**Field:** study.examples[0].lv
**CURRENT:** mida sa ütlesid?
**NEW:** Mida sa ütlesid?
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** ko tu pateici?
**DE konteksts:** sagen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0050
**Card ID:** a1-schauen-study
**Field:** study.examples[1].lv
**CURRENT:** me vaatame aknast välja.
**NEW:** Me vaatame aknast välja.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** mēs skatāmies pa logu.
**DE konteksts:** schauen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0051
**Card ID:** a1-schauen-study
**Field:** study.examples[2].lv
**CURRENT:** ma vaatan telerit.
**NEW:** Ma vaatan telerit.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es skatos televizoru.
**DE konteksts:** schauen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0052
**Card ID:** a1-schon-study
**Field:** study.examples[0].lv
**CURRENT:** ma olen juba kodus.
**NEW:** Ma olen juba kodus.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es jau esmu mājās.
**DE konteksts:** schon
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0053
**Card ID:** a1-schwimmen
**Field:** study.examples[0].lv
**CURRENT:** mulle meeldib ujuda.
**NEW:** Mulle meeldib ujuda.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** man patīk peldēt.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0054
**Card ID:** a1-schwimmen
**Field:** study.examples[1].lv
**CURRENT:** ta ujub väga hästi.
**NEW:** Ta ujub väga hästi.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0055
**Card ID:** a1-schwimmen
**Field:** study.examples[2].lv
**CURRENT:** me ujume basseinis.
**NEW:** Me ujume basseinis.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** mēs peldam baseinā.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0056
**Card ID:** a1-schwimmen
**Field:** study.examples[3].lv
**CURRENT:** ma lähen ujuma.
**NEW:** Ma lähen ujuma.
**Problēma:** Lause alguses peab eesti keeles olema suur täht.
**LV etalons (konteksts):** es eju peldēties.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0057
**Card ID:** a1-sie-study-2
**Field:** study.examples[5].lv
**CURRENT:** teie teete süüa, palun.
**NEW:** Teie teete süüa, palun.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** jūs gatavojat, lūdzu.
**DE konteksts:** Sie
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0058
**Card ID:** a1-vom
**Field:** study.comparison[0].meaning
**CURRENT:** -st (konkreetne asi, Dativ)
**NEW:** -st (konkreetne asi, daativ)
**Problēma:** Estonian grammatical case name is daativ; Dativ is the German term.
**LV etalons (konteksts):** no (konkrēta lieta, kam?)
**DE konteksts:** vom
**Smagums:** LOW
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0065
**Card ID:** a1-einmal
**Field:** study.examples[0].lv
**CURRENT:** ma olin kord Berliinis.
**NEW:** Ma olin kord Berliinis.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** es reiz biju Berlīnē.
**DE konteksts:** einmal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0066
**Card ID:** a1-noch-mal
**Field:** study.examples[1].lv
**CURRENT:** veel kord, palun.
**NEW:** Veel kord, palun.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** vēlreiz, lūdzu.
**DE konteksts:** noch mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0067
**Card ID:** a1-noch-mal
**Field:** study.examples[2].lv
**CURRENT:** ütle seda veel kord.
**NEW:** Ütle seda veel kord.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** pasaki to vēlreiz.
**DE konteksts:** noch mal
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
