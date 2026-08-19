# ET–DE A1 — OWNER DECISIONS

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.5
**MAIN_BASE_SHA:** `cc5b5f4e4551fcb9ac99d643755761680e2158da`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-v15-ba9e`
**Findings:** **171** · sākotnēji visi **PENDING**

Atļautie statusi: LABOT | NELABOT | FALSE_POSITIVE | NEEDS_SOURCE_REVIEW

**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.

| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-A1-0001 | STRUCT | study.count | 124 | 134 | CRITICAL | STRUCTURE | PENDING | | |
| ET-A1-0002 | a1-Besuch-87 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0003 | a1-besuchen-89 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0004 | a1-bitte | study.tip.text | (tukšs) | (ET tulkojums pēc LV/DE) | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0005 | a1-bitte-study | study.tip.text | (tukšs) | (ET tulkojums pēc LV/DE) | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0006 | a1-Fußball-218 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0007 | a1-ganz-219 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0008 | a1-gefallen-225 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0009 | a1-Geschichte-233 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0010 | a1-Geschwister-234 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0011 | a1-Großeltern-251 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0012 | a1-Hand-267 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0013 | a1-hübsch-288 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| ET-A1-0014 | a1-bitte | entry[93].study.comparison[0].meaning | lūdzu | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0015 | a1-bitte | entry[93].study.comparison[0].example | Komm bitte herein. – Lūdzu, nāc iekšā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0016 | a1-bitte | entry[93].study.comparison[1].meaning | lūgums | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0017 | a1-bitte | entry[93].study.comparison[1].example | Ich habe eine Bitte. – Man ir lūgums. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0018 | a1-bitte-study | entry[94].study.comparison[0].meaning | lūgums | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0019 | a1-bitte-study | entry[94].study.comparison[0].example | Ich habe eine Bitte. – Man ir lūgums. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0020 | a1-bitte-study | entry[94].study.comparison[1].meaning | lūdzu | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0021 | a1-bitte-study | entry[94].study.comparison[1].example | Komm bitte herein. – Lūdzu, nāc iekšā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0022 | a1-bringen | entry[111].study.comparison[4].meaning | paņemt | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0023 | a1-bringen | entry[111].study.comparison[4].example | Ich nehme das Buch. – Es paņemu grāmatu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0024 | a1-ein | entry[154].study.examples[3].lv | Bērns spēlējas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0025 | a1-ein | entry[154].study.comparison[0].meaning | vīriešu dzimte | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0026 | a1-ein | entry[154].study.comparison[3].meaning | akuzatīvs | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0027 | a1-eis | entry[157].study.comparison[0].example | Ich esse ein Eis. = Es ēdu saldējumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0028 | a1-eis | entry[157].study.comparison[2].example | Das Wasser ist kalt. = Ūdens ir auksts. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0029 | a1-eis | entry[157].study.comparison[3].example | Eis ist ein Dessert. = Saldējums ir deserts. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0030 | a1-erst | entry[165].study.comparison[1].example | Zuerst frühstücken wir. = Vispirms mēs brokastojam. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0031 | a1-erst | entry[165].study.comparison[2].example | Ich habe nur 5 Euro. = Man ir tikai 5 eiro. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0032 | a1-erst | entry[165].study.comparison[3].example | Dann gehen wir nach Hause. = Tad mēs ejam mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0033 | a1-es | entry[167].study.comparison[0].example | Es regnet. – Līst. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0034 | a1-es | entry[167].study.comparison[1].example | Ich lerne Deutsch. – Es mācos vācu valodu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0035 | a1-etwas | entry[169].study.comparison[0].example | Ich brauche etwas. = Man kaut kas vajadzīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0036 | a1-etwas | entry[169].study.comparison[2].example | Ich bin ein bisschen müde. = Es esmu mazliet noguris. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0037 | a1-euch | entry[170].study.comparison[0].example | Ihr seid freundlich. = Jūs esat draudzīgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0038 | a1-euch | entry[170].study.comparison[1].example | Ich helfe euch. = Es jums palīdzu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0039 | a1-euch | entry[170].study.comparison[2].example | Das ist euer Haus. = Tā ir jūsu māja. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0040 | a1-finden | entry[187].study.comparison[0].example | Ich finde das gut. = Man tas šķiet labi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0041 | a1-haben | entry[261].study.comparison[0].example | Ich habe Zeit. = Man ir laiks. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0042 | a1-haben | entry[261].study.comparison[1].example | Ich bin hier. = Es esmu šeit. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0043 | a1-haben | entry[261].study.comparison[2].example | Ich bekomme ein Geschenk. = Es saņemu dāvanu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0044 | a1-halten | entry[265].study.comparison[1].example | Ich nehme die Tasche. = Es ņemu somu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0045 | a1-halten | entry[265].study.comparison[2].example | Bitte halten Sie an. = Lūdzu, apstājieties. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0046 | a1-halten | entry[265].study.comparison[3].example | Ich denke, das ist richtig. = Es domāju, ka tas ir pareizi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0047 | a1-heißen | entry[276].study.comparison[1].example | Er nennt mich Tom. = Viņš mani sauc par Tomu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0048 | a1-heißen | entry[276].study.comparison[2].example | Was bedeutet das? = Ko tas nozīmē? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0049 | a1-heißen | entry[276].study.comparison[4].meaning | zvanīt | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0050 | a1-können | entry[319].study.comparison[0].example | Ich kann schwimmen. = Es protu peldēt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0051 | a1-können | entry[319].study.comparison[1].example | Darf ich gehen? = Vai drīkstu iet? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0052 | a1-können | entry[319].study.comparison[2].example | Ich muss lernen. = Man jāmācās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0053 | a1-kosten | entry[320].study.comparison[0].example | Das kostet 5 Euro. = Tas maksā 5 eiro. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0054 | a1-kosten | entry[320].study.comparison[1].example | Ich bezahle die Rechnung. = Es maksāju rēķinu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0055 | a1-kosten | entry[320].study.comparison[2].example | Kann ich bar zahlen? = Vai varu maksāt skaidrā naudā? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0056 | a1-kosten | entry[320].study.comparison[3].example | Was kostet das Buch? = Cik maksā grāmata? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0057 | a1-fernsehen | entry[687].study.comparison[0].example | Ich sehe fern. = Es skatos televīziju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0058 | a1-fernsehen | entry[687].study.comparison[1].example | Im Fernsehen läuft ein Film. = Televīzijā rāda filmu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0059 | a1-fernsehen | entry[687].study.comparison[2].example | Ich sehe einen Film. = Es redzu filmu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0060 | a1-da | study.sectionAccents (explanation) | koha | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0061 | a1-es | study.sectionAccents (examples) | Ich | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0062 | a1-es | study.sectionAccents (examples) | Er | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0063 | a1-es | study.sectionAccents (examples) | Sie | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0064 | a1-es | study.sectionAccents (examples) | Das | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0065 | a1-reis | study.sectionAccents (explanation) | ainsus | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0066 | a1-bis | study.sectionAccents.comparison.example | bis dass | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0067 | a1-bringen | study.sectionAccents.examples.de | Wasser | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0068 | a1-bringen | study.sectionAccents.examples.de | dich | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0069 | a1-bringen | study.sectionAccents.examples.de | bringt | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0070 | a1-bringen | study.sectionAccents.examples.de | Buch | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A1-0071 | a1-achten-22 | etText | järgima | tähele panema | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0072 | a1-Arm-44 | etText | käsi | käsivars | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0073 | a1-ganz-219 | etText | kõik | terve | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0074 | a1-nicht-447 | etText | ei | mitte | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0075 | a1-Nummer-455 | etText | number | number | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0076 | a1-von-635 | etText | -st | -lt | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0077 | a1-Weihnachten-648 | etText | Jõulud | jõulud | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0078 | a1-sprechen-study | study.examples[2].lv | ma räägin saksa keelt. | Ta räägib oma õpetajaga. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0079 | a1-klein-study | study.examples[1].lv | tuba on väike. | Laps on veel väike. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0080 | a1-klein-study | study.examples[2].lv | laps on veel väike. | Mul on väike kott. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0081 | a1-an | study.comparison[1].meaning | horisontaalsel pinnal | mitte an, vaid auf: horisontaalsel pinnal | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0082 | a1-auch-study | study.examples[1].lv | ma tulen ka. | Ta töötab ka siin. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0083 | a1-auch-study | study.examples[2].lv | ta töötab ka siin. | Ma soovin teile ka ilusat päeva. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0084 | a1-auf | study.comparison[1].meaning | juures (vertikaalne pind) | vertikaalsel pinnal | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0085 | a1-auf | study.comparison[4].meaning | -sse / juurde (Dativ) | peale / -le (Akk.) | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0086 | a1-aufs | study.examples[6].lv | tule kiiresti paati! | Mine kiiresti paati! | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0087 | a1-aufs | study.comparison[2].meaning | vertikaalse pinna juures | vertikaalsel pinnal | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0088 | a1-aufs | study.comparison[4].meaning | -sse / juurde (Dativ) | peale / -le (Akk.) | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0089 | a1-baden | study.examples[2].lv | ta ujub väga hästi. | Ta supleb väga hästi. | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0090 | a1-baden | study.comparison[1].meaning | ujuma liikumisena või spordina | ujumine liikumise või spordina | LOW | NATURALNESS | PENDING | | |
| ET-A1-0091 | a1-bei | study.comparison[1].meaning | seina, serva, kalda, pinna ääres | seina, serva, kalda või pinna ääres → an | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0092 | a1-bei | study.comparison[2].meaning | kellegi juurde minnakse (suund) | kellegi juures ollakse; juurde minnakse: zu | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0093 | a1-bitte | study.examples[0].lv | Palun! | Üks tass kohvi, palun. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0094 | a1-bitte | study.examples[1].lv | palun! | Palun, tule sisse! | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0095 | a1-bitte | study.examples[2].lv | üks tass kohvi, palun. | Palun! | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0096 | a1-bitte | study.comparison[0].meaning | lūdzu | palun | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0097 | a1-bitte | study.comparison[1].meaning | lūgums | palve | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0098 | a1-bitte-study | study.examples[1].lv | palun! | Ta täidab minu palve. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0099 | a1-bitte-study | study.examples[2].lv | üks tass kohvi, palun. | Tal on kaks palvet. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0100 | a1-bitte-study | study.comparison[0].meaning | lūgums | palve | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0101 | a1-bitte-study | study.comparison[1].meaning | lūdzu | palun | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0102 | a1-bringen | study.examples[0].lv | too mulle palun vett. | Ma toon sulle raamatu. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0103 | a1-bringen | study.examples[1].lv | ma viin sind koju. | Ma viin paki postkontorisse. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0104 | a1-bringen | study.examples[2].lv | ta viib raamatu kooli. | Ma viin lapsed kooli. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0105 | a1-bringen | study.comparison[1].meaning | võtma / kätte võtma | viima | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0106 | a1-bringen | study.comparison[2].meaning | järele minema / tooma | viima / sõidutama | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0107 | a1-bringen | study.comparison[3].meaning | kaasa võtma ja kohale tooma | kohale toimetama | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0108 | a1-bringen | study.comparison[4].meaning | paņemt | võtma | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0109 | a1-da | study.examples[2].lv | siin ta tuleb. | seal ta tuleb. | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0110 | a1-der | study.examples[1].lv | buss tuleb. | buss sõidab. | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0111 | a1-dieser | study.examples[1].lv | mulle meeldib see koer. | Ma näen seda koera. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0112 | a1-ein | study.examples[3].lv | Bērns spēlējas. | Laps mängib. | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0113 | a1-ein | study.comparison[0].meaning | vīriešu dzimte | meessugu | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0114 | a1-ein | study.comparison[1].meaning | sieviešu dzimte | naissugu | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0115 | a1-ein | study.comparison[2].meaning | vidus dzimte | kesksugu | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0116 | a1-ein | study.comparison[3].meaning | akuzatīvs | akusatiiv | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0117 | a1-erst | study.examples[0].lv | kõigepealt juua, siis sõita. | kõigepealt õpi, siis mängi. | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0118 | a1-es | study.examples[0].lv | ma õpin saksa keelt. | sajab vihma. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0119 | a1-es | study.examples[1].lv | ta on väsinud. | on külm. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0120 | a1-es | study.examples[2].lv | ta töötab siin. | Laps magab. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0121 | a1-es | study.examples[3].lv | see on minu raamat. | See on väsinud. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0122 | a1-es | study.comparison[0].meaning | tas • bezpersoniska forma | see • umbisikuline vorm | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0123 | a1-es | study.comparison[1].meaning | es (persona) | mina (isik) | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0124 | a1-euch | study.tip.text | “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teie”. | “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teid”. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0125 | a1-finden | study.examples[0].lv | ma ei leia oma võtit. | ma leian oma võtme. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0126 | a1-finden | study.examples[1].lv | kas sa leidsid oma telefoni? | minu meelest on see hea. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0127 | a1-finden | study.examples[2].lv | minu meelest on see hea. | mida sa filmist arvad? | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0128 | a1-gleich | study.examples[1].lv | meil on ühesugune värv. | meil on sama värv. | LOW | NATURALNESS | PENDING | | |
| ET-A1-0129 | a1-gleich | study.examples[4].lv | näeme kohe! | näeme varsti! | LOW | SEMANTICS | PENDING | | |
| ET-A1-0130 | a1-gross-study | study.examples[1].lv | maja on suur. | Berliin on suur linn. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0131 | a1-heißen | study.comparison[4].meaning | zvanīt | helistama | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0132 | a1-hoch-study | study.examples[1].lv | mägi on kõrge. | riiul on kahe meetri kõrgune. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0133 | a1-im | study.comparison[0].meaning | sees, kus? (Dativ) | sees, kus? (daativ) | LOW | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0134 | a1-im | study.comparison[1].meaning | sisse, kuhu? (Akk.) | sisse, kuhu? (akusatiiv) | LOW | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0135 | a1-im | study.comparison[3].meaning | juures, kus? (Dativ) | juures, kus? (daativ) | LOW | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0136 | a1-ins | study.comparison[0].meaning | sisse, kuhu? (Akk.) | sisse, kuhu? (akusatiiv) | LOW | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0137 | a1-ins | study.comparison[1].meaning | sees, kus? (Dativ) | sees, kus? (daativ) | LOW | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0138 | a1-ins | study.comparison[3].meaning | pinnale (Akk.) | pinnale (akusatiiv) | LOW | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0139 | a1-ins | study.comparison[4].meaning | -sse / juurde (Dativ) | -sse / juurde (daativ) | LOW | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0140 | a1-laden-study | study.examples[3].lv |  |  | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0141 | a1-lassen | study.tip.text | Pea meeles: midagi jääb → lassen; kellelegi lubatakse → lassen. | Pea meeles: midagi jääb → lassen; kellelgi lastakse → lassen. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0142 | a1-laut | study.examples[4].lv |  |  | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0143 | a1-laut | study.examples[5].lv |  |  | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0144 | a1-laut-study | study.examples[1].lv |  |  | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0145 | a1-laut-study | study.examples[2].lv |  |  | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0146 | a1-laut-study | study.examples[3].lv |  |  | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0147 | a1-nach | study.examples[3].lv | on kümme minutit kaheksa läbi. | kell on kümme minutit üle kaheksa. | MEDIUM | NATURALNESS | PENDING | | |
| ET-A1-0148 | a1-nehmen | study.tip.text | Pea meeles: võtab endale → nehmen; toob kellelegi → bringen. | Pea meeles: võta endale → nehmen; too kellelegi → bringen. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0149 | a1-probieren | study.comparison[1].meaning | testima / kontrollima | proovima / üritama | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0150 | a1-probieren | study.comparison[2].meaning | üritama | kontrollima | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0151 | a1-probieren | study.comparison[3].meaning | kontrollima | selga proovima | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0152 | a1-sich | study.comparison[1].meaning | mind / ennast ich puhul | mind / ennast ich-vormi puhul | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0153 | a1-sich | study.comparison[2].meaning | sind / ennast du puhul | sind / ennast du-vormi puhul | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0154 | a1-sie-study | study.examples[0].lv | Anna teeb süüa. Ta teeb seda iga päev. | Nad teevad süüa. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0155 | a1-sie-study | study.examples[1].lv | Maria on arst. Ta töötab haiglas. | Ta teeb süüa. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0156 | a1-sie-study | study.examples[2].lv | Anna ja Paul teevad süüa. Nad teevad seda koos. | Ta sööb. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0157 | a1-sie-study | study.examples[3].lv | Lapsed mängivad aias. Nad mängivad jalgpalli. | Nad teevad süüa. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0158 | a1-sie-study | study.examples[4].lv | proua Keller, kas te teete meelsasti süüa? | Nad mängivad jalgpalli. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0159 | a1-sie-study | study.examples[5].lv | härra Müller, kas te olete siin uus? | Teie teete süüa, palun. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0160 | a1-über | study.comparison[3].meaning | -st / kohta mingist allikast | -st / mingi allika kohta | LOW | NATURALNESS | PENDING | | |
| ET-A1-0161 | a1-unter | study.examples[3].lv | lamp ripub laua kohal. | lamp ripub laua all. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0162 | a1-verstehen | study.examples[3].lv | ma oskan saksa keelt rääkida. | ma saan saksa keelest aru. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0163 | a1-wenn | study.examples[3].lv | ma ei tea, kas ta tuleb. | kui ta tuleb, olen ma rõõmus. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0164 | a1-wer | study.translation | kes • kumb | kes | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0165 | a1-wer | study.examples[0].lv | Mis see on? | Kes see on? | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0166 | a1-werden | study.examples[3].lv | ma olen väsinud. | ma jään väsinuks. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0167 | a1-zu | study.comparison[1].meaning | -sse linnade/riikidega | -sse: linnadesse/riikidesse | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0168 | a1-zum | study.comparison[0].meaning | -sse / juurde (Dativ) | -sse / juurde (daativ) | MEDIUM | ORTHOGRAPHY | PENDING | | |
| ET-A1-0169 | a1-zum | study.comparison[1].meaning | -sse / juurde (naissugu) | -sse / juurde (meessugu või kesksugu) | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0170 | a1-zum | study.comparison[3].meaning | -sse (linnad/riigid) | -sse: linnadesse/riikidesse | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0171 | a1-einmal | study.examples[0].lv | ma olin kord Berliinis. | Ma olin kord Berliinis. | LOW | ORTHOGRAPHY | PENDING | | |
