# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `8c82df0454dad44636830145e26e5b8e52aa4184`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-ba9e`
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **67**

> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda `et-a1-owner-decisions.md`.
> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.

## Grupas (pa 50 findingiem)

| Grupa | Findings | Fails |
|-------|----------|-------|
| 1–50 | 50 | [et-a1-owner-view-group01.md](./et-a1-owner-view-group01.md) |
| 51–67 | 17 | [et-a1-owner-view-group02.md](./et-a1-owner-view-group02.md) |

## Īsais saraksts (visi findingi)

- **ET-A1-0001** `a1-bitte` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **ET-A1-0002** `a1-bitte-study` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **ET-A1-0003** `a1-Arm-44` · `etText` · MEDIUM · „Käsi” tähendab tavaliselt kätt; saksa „Arm” täpsem vaste on „käsivars”.
- **ET-A1-0004** `a1-Weihnachten-648` · `etText` · LOW · Estonian holiday names are normally written in lowercase; capitalization follows…
- **ET-A1-0005** `a1-also` · `study.comparison[1].meaning` · MEDIUM · Saksa also ei tähenda „ka”; see on saksa auch tähendus. Võrdlus vajab õige saksa…
- **ET-A1-0006** `a1-aufs` · `study.examples[6].lv` · MEDIUM · aufs tähendab liikumist millegi peale; „paati” tähendab sisse, mille saksa vaste…
- **ET-A1-0007** `a1-baden` · `study.examples[2].lv` · HIGH · Praegune lause tähendab „ta ujub väga hästi” ehk schwimmen, mitte baden ehk supl…
- **ET-A1-0008** `a1-besuch` · `study.examples[2].lv` · MEDIUM · „Arst läheb visiidile” on loomulikum vaste arstivisiidile mineku kohta.
- **ET-A1-0009** `a1-bis` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur algustäht.
- **ET-A1-0010** `a1-bis` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur algustäht.
- **ET-A1-0011** `a1-bis` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur algustäht.
- **ET-A1-0012** `a1-bis` · `study.examples[3].lv` · LOW · Lause alguses peab eesti keeles olema suur algustäht.
- **ET-A1-0013** `a1-bis` · `study.comparison[2].meaning` · MEDIUM · „Līdz šim” tähendab „seni”; „seni, kuni” tähendab tingimuslikku „kuni”.
- **ET-A1-0014** `a1-der` · `study.examples[1].lv` · MEDIUM · „Brauc” tähendab sõitmist; „tuleb” muudab tegevuse tähenduseks kohale tulemise.
- **ET-A1-0015** `a1-geben` · `study.examples[0].lv` · LOW · Lause algus peab algama suure tähega.
- **ET-A1-0016** `a1-halten` · `study.comparison[2].meaning` · MEDIUM · Praegune vaste katab ainult transitiivse tähenduse „apturēt”, mitte „apstāties” …
- **ET-A1-0017** `a1-hand-study` · `study.examples[2].lv` · HIGH · Hand tähendab siin kätt, mitte käsivart; „käsivars” vastab saksa sõnale Unterarm…
- **ET-A1-0018** `a1-morgen-study` · `study.examples[1].lv` · HIGH · Līdz rīt! tähendab „bis morgen” ehk „homseni”, mitte „tere hommikust”.
- **ET-A1-0019** `a1-neu` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0020** `a1-neu` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0021** `a1-neu` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0022** `a1-neu` · `study.examples[3].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0023** `a1-neu` · `study.examples[4].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0024** `a1-neu` · `study.examples[5].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0025** `a1-neu` · `study.examples[6].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0026** `a1-noch-study` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0027** `a1-nur-study` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0028** `a1-nur-study` · `study.examples[3].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0029** `a1-nur-study` · `study.examples[4].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0030** `a1-ob` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0031** `a1-ob` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0032** `a1-ob` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0033** `a1-ob` · `study.examples[3].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0034** `a1-oder` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0035** `a1-oder` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0036** `a1-oder` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0037** `a1-oder` · `study.examples[3].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0038** `a1-passen` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0039** `a1-passen` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0040** `a1-passen` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0041** `a1-passen` · `study.examples[3].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0042** `a1-probieren` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0043** `a1-probieren` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0044** `a1-probieren` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0045** `a1-reis` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0046** `a1-reis` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0047** `a1-reis` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0048** `a1-reis` · `study.examples[3].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0049** `a1-sagen-study` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0050** `a1-schauen-study` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0051** `a1-schauen-study` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0052** `a1-schon-study` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0053** `a1-schwimmen` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0054** `a1-schwimmen` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0055** `a1-schwimmen` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0056** `a1-schwimmen` · `study.examples[3].lv` · LOW · Lause alguses peab eesti keeles olema suur täht.
- **ET-A1-0057** `a1-sie-study-2` · `study.examples[5].lv` · LOW · Täislause peab algama suure algustähega.
- **ET-A1-0058** `a1-vom` · `study.comparison[0].meaning` · LOW · Estonian grammatical case name is daativ; Dativ is the German term.
- **ET-A1-0059** `a1-wer` · `etMain` · MEDIUM · Wer means who; kumb means which of two and adds an incorrect meaning.
- **ET-A1-0060** `a1-werden` · `study.examples[3].lv` · MEDIUM · Current text means 'I am tired' (sein), not becoming or getting tired (werden).
- **ET-A1-0061** `a1-uhr` · `study.examples[0].lv` · MEDIUM · Standardne eesti ajaväljend vajab sõna „kell”; „On kaheksa” ei ole A1-tasemel ko…
- **ET-A1-0062** `a1-uhr` · `study.examples[1].lv` · MEDIUM · Standardne eesti ajaväljend vajab sõna „kell”; „on kaheksa” ei ole A1-tasemel ko…
- **ET-A1-0063** `a1-uhr` · `study.examples[3].lv` · MEDIUM · Standardne eesti ajaväljend on „kell on kaheksa”, mitte paljas „on kaheksa”.
- **ET-A1-0064** `a1-uhr` · `study.examples[4].lv` · MEDIUM · Standardne eesti ajaväljend vajab sõna „kell”; „On kaheksa” ei ole A1-tasemel ko…
- **ET-A1-0065** `a1-einmal` · `study.examples[0].lv` · LOW · Lause alguses peab eesti keeles olema suur algustäht.
- **ET-A1-0066** `a1-noch-mal` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur algustäht.
- **ET-A1-0067** `a1-noch-mal` · `study.examples[2].lv` · LOW · Lause alguses peab eesti keeles olema suur algustäht.
