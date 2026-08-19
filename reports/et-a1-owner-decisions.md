# ET–DE A1 — OWNER DECISIONS

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**MAIN_BASE_SHA:** `8c82df0454dad44636830145e26e5b8e52aa4184`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-ba9e`
**Findings:** **216** · sākotnēji visi **PENDING**

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
| ET-A1-0060 | a1-Arm-44 | etText | käsi | käsivars | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0061 | a1-ganz-219 | etText | kõik | terve | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0062 | a1-kochen-317 | etText | valmistama | toitu valmistama | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0063 | a1-nicht-447 | etText | ei | mitte | MEDIUM | TRANSLATION | PENDING | | |
| ET-A1-0064 | a1-sprechen-study | study.examples[1].lv | me räägime tööst. | Me räägime tööst. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0065 | a1-sprechen-study | study.examples[2].lv | ma räägin saksa keelt. | Ta räägib oma õpetajaga. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0066 | a1-klein-study | study.examples[1].lv | tuba on väike. | Laps on veel väike. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0067 | a1-klein-study | study.examples[2].lv | laps on veel väike. | Mul on väike kott. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0068 | a1-an | study.examples[0].lv | seina küljes / seinal | Seina küljes / seinal | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0069 | a1-an | study.examples[1].lv | akna juures | Akna juures | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0070 | a1-an | study.examples[2].lv | mere ääres | Mere ääres | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0071 | a1-ab | study.examples[0].lv | alates tänasest | Alates tänasest | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0072 | a1-ab | study.examples[1].lv | alates esmaspäevast | Alates esmaspäevast | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0073 | a1-ab | study.examples[2].lv | alates kella 8-st | Alates kella 8-st | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0074 | a1-ab | study.examples[3].lv | jaamast | Jaamast | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0075 | a1-aber | study.examples[0].lv | ma tahan kaasa tulla, aga mul ei ole aega. | Ma tahan kaasa tulla, aga mul ei ole aega. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0076 | a1-aber | study.examples[1].lv | toit oli maitsev, aga liiga kallis. | Toit oli maitsev, aga liiga kallis. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0077 | a1-aber | study.examples[2].lv | tal on õigus, aga ma arvan teisiti. | Tal on õigus, aga ma arvan teisiti. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0078 | a1-also | study.examples[0].lv | sajab vihma, seepärast jään ma koju. | Sajab vihma, seepärast jään ma koju. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0079 | a1-also | study.examples[1].lv | sa oled haige, seepärast sa ei lähe tööle. | Sa oled haige, seepärast sa ei lähe tööle. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0080 | a1-also | study.examples[2].lv | ma olen palju õppinud, seega saan nüüd aru. | Ma olen palju õppinud, seega saan nüüd aru. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0081 | a1-auch-study | study.examples[1].lv | ma tulen ka. | Ta töötab ka siin. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0082 | a1-auch-study | study.examples[2].lv | ta töötab ka siin. | Ma soovin teile ka head päeva. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0083 | a1-auf | study.examples[0].lv | ma panen raamatu lauale. | Ma panen raamatu lauale. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0084 | a1-auf | study.examples[1].lv | me sõidame mäele. | Me sõidame mäele. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0085 | a1-auf | study.examples[2].lv | kass hüppab diivanile. | Kass hüppab diivanile. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0086 | a1-auf | study.comparison[1].meaning | juures (vertikaalne pind) | juures (vertikaalse pinna juures) | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0087 | a1-aus | study.examples[0].lv | ma olen Saksamaalt. | Ma olen Saksamaalt. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0088 | a1-aus | study.examples[1].lv | ta läheb majast välja. | Ta läheb majast välja. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0089 | a1-aus | study.examples[2].lv | ma võtan raamatu kotist välja. | Ma võtan raamatu kotist välja. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0090 | a1-aufs | study.examples[0].lv | ma lähen katusele. | Ma lähen katusele. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0091 | a1-aufs | study.examples[1].lv | ta istub diivanile. | Ta istub diivanile. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0092 | a1-aufs | study.examples[2].lv | me sõidame maale. | Me sõidame maale. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0093 | a1-aufs | study.examples[3].lv | pane kott voodile. | Pane kott voodile. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0094 | a1-aufs | study.examples[4].lv | ta ronib hobuse selga. | Ta ronib hobuse selga. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0095 | a1-aufs | study.examples[5].lv | pane raamat riiulile. | Pane raamat riiulile. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0096 | a1-aufs | study.examples[6].lv | tule kiiresti paati! | Tule kiiresti paati! | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0097 | a1-aufs | study.examples[7].lv | me läheme peole. | Me läheme peole. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0098 | a1-baden | study.examples[0].lv | ma lähen ujuma. | Ma lähen ujuma. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0099 | a1-baden | study.examples[1].lv | me läheme järve ujuma. | Me läheme järve ujuma. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0100 | a1-baden | study.examples[2].lv | ta ujub väga hästi. | Ta supleb väga hästi. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0101 | a1-baden | study.examples[3].lv | ma käin igal esmaspäeval ujumas. | Ma käin igal esmaspäeval ujumas. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0102 | a1-bei | study.examples[0].lv | ma olen oma sõbra juures. | Ma olen oma sõbra juures. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0103 | a1-bei | study.examples[1].lv | ta töötab Siemensis. | Ta töötab Siemensis. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0104 | a1-bei | study.examples[2].lv | vihma korral jääme koju. | Vihma korral jääme koju. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0105 | a1-bitte | study.examples[0].lv | Palun! | Üks tass kohvi, palun. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0106 | a1-bitte | study.examples[1].lv | palun! | Palun tule sisse! | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0107 | a1-bitte | study.examples[2].lv | üks tass kohvi, palun. | Palun! | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0108 | a1-bitte | study.comparison[0].meaning | lūdzu | palun | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0109 | a1-bitte | study.comparison[1].meaning | lūgums | palve | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0110 | a1-bitte-study | study.examples[1].lv | palun! | Ta täidab minu palve. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0111 | a1-bitte-study | study.examples[2].lv | üks tass kohvi, palun. | Tal on kaks palvet. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0112 | a1-bitte-study | study.comparison[0].meaning | lūgums | palve | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0113 | a1-bitte-study | study.comparison[1].meaning | lūdzu | palun | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0114 | a1-bleiben | study.examples[3].lv | ma lähen koju. | ma jään koju. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0115 | a1-bringen | study.examples[0].lv | too mulle palun vett. | Ma toon sulle raamatu. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0116 | a1-bringen | study.examples[1].lv | ma viin sind koju. | Ma viin paki postkontorisse. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0117 | a1-bringen | study.examples[2].lv | ta viib raamatu kooli. | Ma viin lapsed kooli. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0118 | a1-bringen | study.comparison[1].meaning | võtma / kätte võtma | viima / ära viima | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0119 | a1-bringen | study.comparison[2].meaning | järele minema / tooma | viima / sõidutama | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0120 | a1-bringen | study.comparison[3].meaning | kaasa võtma ja kohale tooma | kohale toimetama | LOW | NATURALNESS | PENDING | | |
| ET-A1-0121 | a1-bringen | study.comparison[4].meaning | paņemt | võtma | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0122 | a1-dass | study.comparison[2].meaning | et | selleks et | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0123 | a1-dieser | study.examples[1].lv | mulle meeldib see koer. | Ma näen seda koera. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0124 | a1-ein | study.examples[3].lv | Bērns spēlējas. | Laps mängib. | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0125 | a1-ein | study.comparison[0].meaning | vīriešu dzimte | meessugu | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0126 | a1-ein | study.comparison[1].meaning | sieviešu dzimte | naissugu | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0127 | a1-ein | study.comparison[2].meaning | vidus dzimte | kesksugu | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0128 | a1-ein | study.comparison[3].meaning | akuzatīvs | akusatiiv | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0129 | a1-es | study.examples[0].lv | ma õpin saksa keelt. | Sajab. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0130 | a1-es | study.examples[1].lv | ta on väsinud. | On külm. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0131 | a1-es | study.examples[2].lv | ta töötab siin. | Laps magab. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0132 | a1-es | study.examples[3].lv | see on minu raamat. | See on väsinud. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0133 | a1-es | study.comparison[0].meaning | tas • bezpersoniska forma | see • umbisikuline vorm | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0134 | a1-es | study.comparison[1].meaning | es (persona) | mina (isik) | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0135 | a1-euch | study.tip.text | “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teie”. | “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teid”. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0136 | a1-finden | study.examples[0].lv | ma ei leia oma võtit. | Ma leian oma võtme. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0137 | a1-finden | study.examples[1].lv | kas sa leidsid oma telefoni? | Minu meelest on see hea. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0138 | a1-finden | study.examples[2].lv | minu meelest on see hea. | Mida sa filmist arvad? | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0139 | a1-finden | study.examples[3].lv | minu meelest on see hea. | Minu meelest on see hea. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0140 | a1-gross-study | study.examples[1].lv | maja on suur. | Berliin on suur linn. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0141 | a1-heißen | study.comparison[4].meaning | zvanīt | helistama | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A1-0142 | a1-hoch-study | study.examples[1].lv | mägi on kõrge. | riiul on kaks meetrit kõrge. | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0143 | a1-jung | etMain | noor (inimeste kohta) | noor | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0144 | a1-jung | study.translation | noor (inimeste kohta) | noor | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0145 | a1-können | study.comparison[2].meaning | vajama / pidama | pidama / olema vaja | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0146 | a1-kosten | study.examples[4].lv | ma maksan arve. | arve maksab palju. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0147 | a1-kosten | study.examples[5].lv | kas ma saan sularahas maksta? | Kui palju see maksab? | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0148 | a1-kosten | study.examples[7].lv | ma maksan kohe. | See maksab viis eurot. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0149 | a1-kosten | study.comparison[1].meaning | maksma • ära maksma (raha) | maksma (hinda) | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0150 | a1-kosten | study.comparison[2].meaning | maksma • ära maksma | maksma (hinda) | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0151 | a1-laden-study | study.examples[3].lv | ma pean telefoni laadima. | Ma lähen poodi. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0152 | a1-laut | study.examples[4].lv | heli on ilus. | Heli on väga vali. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0153 | a1-laut | study.examples[5].lv | ma kuulen mingit heli. | Ma kuulen mingit valju heli. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0154 | a1-laut-study | study.examples[1].lv | muusika on vali. | Muusika heli on vali. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0155 | a1-laut-study | study.examples[2].lv | ära räägi nii valjult! | See heli on liiga vali. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0156 | a1-laut-study | study.examples[3].lv | see on väga vali. | See heli on väga vali. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0157 | a1-leise-study | study.examples[1].lv | palun, ole vaikne. | Palun, ole vaikne. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0158 | a1-leise-study | study.examples[2].lv | muusika on vaikne. | Muusika on vaikne. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0159 | a1-leise-study | study.examples[3].lv | palun, räägi vaikselt. | Palun, räägi vaikselt. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0160 | a1-liegen | study.examples[3].lv | ma panen raamatu lauale. | Raamat on laual. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0161 | a1-mal | study.examples[0].lv | esimest korda oli raske. | Esimest korda oli raske. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0162 | a1-mal | study.examples[1].lv | ma olen juba kaks korda Berliinis käinud. | Ma olen juba kaks korda Berliinis käinud. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0163 | a1-mal | study.examples[2].lv | üks kord piisab. | Üks kord piisab. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0164 | a1-mal | study.examples[3].lv | veel üks kord, palun! | Veel üks kord, palun! | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0165 | a1-mann | study.examples[0].lv | ta on tore mees. | Ta on tore mees. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0166 | a1-mann | study.examples[1].lv | see on minu mees. | See on minu mees. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0167 | a1-mann | study.examples[2].lv | kui palju mehi on siin? | Kui palju mehi on siin? | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0168 | a1-mann | study.examples[3].lv | minu mees töötab Berliinis. | Minu mees töötab Berliinis. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0169 | a1-mann | study.examples[4].lv | mees kannab ülikonda. | Mees kannab ülikonda. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0170 | a1-mann | study.examples[5].lv | tema mees on arst. | Tema mees on arst. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0171 | a1-mit | study.examples[0].lv | ma tulen sinuga. | Ma tulen sinuga. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0172 | a1-mit | study.examples[1].lv | ma sõidan bussiga. | Ma sõidan bussiga. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0173 | a1-mit | study.examples[2].lv | ta kirjutab pastakaga. | Ta kirjutab pastakaga. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0174 | a1-mit | study.examples[3].lv | kas sa tuled kaasa? | Kas sa tuled kaasa? | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0175 | a1-mögen | study.examples[0].lv | mulle meeldib muusika. | Mulle meeldib muusika. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0176 | a1-mögen | study.examples[1].lv | kas sulle maitseb kohv? | Kas sulle maitseb kohv? | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0177 | a1-mögen | study.examples[2].lv | talle meeldivad lapsed. | Talle meeldivad lapsed. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0178 | a1-mögen | study.examples[3].lv | ma sooviksin kohvi. | Ma sooviksin kohvi. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0179 | a1-morgen | study.examples[1].lv | homseni! | Homseni! | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0180 | a1-morgen | study.examples[2].lv | ma tulen homme. | Ma tulen homme. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0181 | a1-morgen | study.examples[3].lv | homme on esmaspäev. | Homme on esmaspäev. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0182 | a1-morgen-study | study.examples[1].lv | homseni! | Homseni! | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0183 | a1-morgen-study | study.examples[2].lv | ma tulen homme. | Ma tulen homme. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0184 | a1-morgen-study | study.examples[3].lv | homme on esmaspäev. | Homme on esmaspäev. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0185 | a1-müssen | study.examples[0].lv | ma pean minema. | Ma pean minema. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0186 | a1-müssen | study.examples[1].lv | sa pead ootama. | Sa pead ootama. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0187 | a1-müssen | study.examples[2].lv | me peame õppima. | Me peame õppima. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0188 | a1-müssen | study.examples[3].lv | ma pean täna töötama. | Ma pean täna töötama. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0189 | a1-nach | study.examples[0].lv | ma sõidan Berliini. | Ma sõidan Berliini. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0190 | a1-nach | study.examples[1].lv | me läheme koju. | Me läheme koju. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0191 | a1-nach | study.examples[2].lv | pärast söömist läheme jalutama. | Pärast söömist läheme jalutama. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A1-0192 | a1-nach | study.examples[3].lv | on kümme minutit kaheksa läbi. | Kell on kümme minutit üle kaheksa. | MEDIUM | NATURALNESS | PENDING | | |
| ET-A1-0193 | a1-nehmen | study.tip.text | Pea meeles: võtab endale → nehmen; toob kellelegi → bringen. | Pea meeles: võta endale → nehmen; too kellelegi → bringen. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0194 | a1-ob | study.examples[3].lv | kas sa tuled täna või homme? | ma ei tea, kas sa tuled täna või homme. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0195 | a1-passen | study.comparison[1].meaning | sobima / seisma | sobima / hästi sobima | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0196 | a1-probieren | study.comparison[1].meaning | testima / kontrollima | proovima | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0197 | a1-probieren | study.comparison[2].meaning | üritama | kontrollima | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0198 | a1-probieren | study.comparison[3].meaning | kontrollima | selga proovima | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0199 | a1-schwimmen | study.comparison[0].meaning | ujuma liikumisena või spordina | ujumine kui liikumine või sport | LOW | NATURALNESS | PENDING | | |
| ET-A1-0200 | a1-sich | study.comparison[1].meaning | mind / ennast ich puhul | mind / ennast koos „ich“-iga | LOW | GRAMMAR | PENDING | | |
| ET-A1-0201 | a1-sich | study.comparison[2].meaning | sind / ennast du puhul | sind / ennast koos „du“-ga | LOW | GRAMMAR | PENDING | | |
| ET-A1-0202 | a1-sicher | study.examples[3].lv | see on kindel lahendus. | see on ohutu lahendus. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A1-0203 | a1-sie-study-2 | study.examples[1].lv | ta teeb süüa. | Teete süüa. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0204 | a1-sie-study-2 | study.examples[2].lv | ta sööb. | Te sööte. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0205 | a1-sie-study-2 | study.examples[3].lv | nad teevad süüa. | Teete süüa. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0206 | a1-sie-study-2 | study.examples[4].lv | nad mängivad jalgpalli. | Te mängite jalgpalli. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0207 | a1-unter | study.examples[3].lv | lamp ripub laua kohal. | lamp ripub laua all. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0208 | a1-verstehen | study.examples[3].lv | ma oskan saksa keelt rääkida. | ma saan saksa keelest aru. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0209 | a1-vor | study.examples[3].lv | pärast söömist läheme jalutama. | enne söömist läheme jalutama. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0210 | a1-wenn | study.examples[3].lv | ma ei tea, kas ta tuleb. | Kui ta tuleb, siis ma ei tea. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0211 | a1-wer | study.translation | kes • kumb | kes | HIGH | TRANSLATION | PENDING | | |
| ET-A1-0212 | a1-wer | study.examples[0].lv | Mis see on? | Kes see on? | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0213 | a1-werden | study.examples[3].lv | ma olen väsinud. | ma muutun väsinuks. | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0214 | a1-zu | study.comparison[1].meaning | -sse linnade/riikidega | -sse linnadesse/riikidesse | MEDIUM | GRAMMAR | PENDING | | |
| ET-A1-0215 | a1-zum | study.comparison[1].meaning | -sse / juurde (naissugu) | -sse / juurde (mees- või kesksugu) | HIGH | SEMANTICS | PENDING | | |
| ET-A1-0216 | a1-zum | study.comparison[3].meaning | -sse (linnad/riigid) | linnade/riikide puhul: nach | MEDIUM | STUDY | PENDING | | |
