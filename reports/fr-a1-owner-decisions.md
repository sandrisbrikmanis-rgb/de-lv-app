# FR–DE A1 — OWNER DECISIONS

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**MAIN_BASE_SHA:** `a2a769e8600291411a7a66eab0483dd4659c9151`
**WORK_BRANCH:** `cursor/fr-de-a1-full-audit-f5bc`
**Audit PR:** [#603](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/603)
**Findings:** **353** · sākotnēji visi **PENDING**

Filtrēts pēc [fr-a1-pr603-owner-history-validation.md](fr-a1-pr603-owner-history-validation.md): tikai **NEW_VALIDATED_REAL_FINDINGS** (16/19).

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [fr-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-review-GITHUB.md) |
| OWNER VIEW | [fr-a1-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view.md) |
| Decisions grupa 1–50 | [fr-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group01.md) |
| Decisions grupa 51–100 | [fr-a1-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group02.md) |
| Decisions grupa 101–150 | [fr-a1-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group03.md) |
| Decisions grupa 151–200 | [fr-a1-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group04.md) |
| Decisions grupa 201–250 | [fr-a1-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group05.md) |
| Decisions grupa 251–300 | [fr-a1-owner-decisions-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group06.md) |
| Decisions grupa 301–350 | [fr-a1-owner-decisions-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group07.md) |
| Decisions grupa 351–353 | [fr-a1-owner-decisions-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group08.md) |

## Pilna tabula (visi findingi)
| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| FR-A1-0001 | STRUCT | study.count | 124 | 134 | CRITICAL | STRUCTURE | PENDING | | |
| FR-A1-0002 | a1-Besuch-87 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0003 | a1-besuchen-89 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0004 | a1-bitte | study.tip.text | (tukšs) | (FR tulkojums pēc LV/DE) | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0005 | a1-bitte-study | study.tip.text | (tukšs) | (FR tulkojums pēc LV/DE) | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0006 | a1-Fußball-218 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0007 | a1-ganz-219 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0008 | a1-gefallen-225 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0009 | a1-Geschichte-233 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0010 | a1-Geschwister-234 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0011 | a1-Großeltern-251 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0012 | a1-Hand-267 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0013 | a1-hübsch-288 | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | PENDING | | |
| FR-A1-0014 | a1-sprechen-study | entry[5].study.comparison[0].example | Wir sprechen über die Arbeit. – Nous parlons de travail. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0015 | a1-aber | entry[21].study.comparison[0].example | Ich komme, aber später. – Je viendrai, mais plus tard. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0016 | a1-auch-study | entry[48].study.important[0] | Ich auch wünsche Ihnen n’est pas le bon ordre des mots. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0017 | a1-auf | entry[49].study.comparison[1].example | Ich hänge das Bild an die Wand. – J'accroche le tableau au mur. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0018 | a1-bei | entry[78].study.comparison[1].example | Das Bild hängt an der Wand. – Le tableau est accroché au mur. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0019 | a1-bitte | entry[93].study.explanation[5] | Bitte avec une lettre minuscule est un mot poli - cela signifie s'il vous plaît (Bitte schön !, Eine Tasse Kaffee, bitte… | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0020 | a1-bitte | entry[93].study.tip[0] | Petite bouchée = s'il te plaît (Bitte schön!, Kaffee, bitte). die Bitte avec une majuscule = demande (eine Bitte, meine … | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0021 | a1-bitte | entry[93].study.important[3] | Nepareizi : Die Bitte schön ! → Pareizi : Bitte schön ! | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0022 | a1-bitte | entry[93].study.comparison[0].meaning | lūdzu | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0023 | a1-bitte | entry[93].study.comparison[0].example | Komm bitte herein. – Lūdzu, nāc iekšā. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0024 | a1-bitte | entry[93].study.comparison[1].meaning | lūgums | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0025 | a1-bitte | entry[93].study.comparison[1].example | Ich habe eine Bitte. – Man ir lūgums. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0026 | a1-bitte-study | entry[94].study.explanation[5] | Bitte avec une lettre minuscule est un mot poli - cela signifie s'il vous plaît (Bitte schön !, Eine Tasse Kaffee, bitte… | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0027 | a1-bitte-study | entry[94].study.tip[0] | Petite bouchée = s'il te plaît (Bitte schön!, Kaffee, bitte). die Bitte avec une majuscule = demande (eine Bitte, meine … | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0028 | a1-bitte-study | entry[94].study.important[3] | Nepareizi : Die Bitte schön ! → Pareizi : Bitte schön ! | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0029 | a1-bitte-study | entry[94].study.comparison[0].meaning | lūgums | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0030 | a1-bitte-study | entry[94].study.comparison[0].example | Ich habe eine Bitte. – Man ir lūgums. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0031 | a1-bitte-study | entry[94].study.comparison[1].meaning | lūdzu | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0032 | a1-bitte-study | entry[94].study.comparison[1].example | Komm bitte herein. – Lūdzu, nāc iekšā. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0033 | a1-bringen | entry[111].study.comparison[4].meaning | paņemt | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0034 | a1-bringen | entry[111].study.comparison[4].example | Ich nehme das Buch. – Es paņemu grāmatu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0035 | a1-ein | entry[154].study.examples[3].lv | Bērns spēlējas. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0036 | a1-ein | entry[154].study.comparison[0].meaning | vīriešu dzimte | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0037 | a1-ein | entry[154].study.comparison[1].meaning | sieviešu dzimte | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0038 | a1-ein | entry[154].study.comparison[3].meaning | akuzatīvs | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0039 | a1-eis | entry[157].study.comparison[0].example | Ich esse ein Eis. = Es ēdu saldējumu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0040 | a1-eis | entry[157].study.comparison[2].example | Das Wasser ist kalt. = Ūdens ir auksts. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0041 | a1-eis | entry[157].study.comparison[3].example | Eis ist ein Dessert. = Saldējums ir deserts. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0042 | a1-erst | entry[165].study.comparison[1].example | Zuerst frühstücken wir. = Vispirms mēs brokastojam. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0043 | a1-erst | entry[165].study.comparison[2].example | Ich habe nur 5 Euro. = Man ir tikai 5 eiro. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0044 | a1-erst | entry[165].study.comparison[3].example | Dann gehen wir nach Hause. = Tad mēs ejam mājās. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0045 | a1-es | entry[167].study.comparison[0].example | Es regnet. – Līst. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0046 | a1-es | entry[167].study.comparison[1].example | Ich lerne Deutsch. – Es mācos vācu valodu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0047 | a1-etwas | entry[169].study.explanation[4] | Le plus important est de distinguer : etwas kaufen = acheter quelque chose, etwas müde = un peu fatigué. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0048 | a1-etwas | entry[169].study.comparison[0].example | Ich brauche etwas. = Man kaut kas vajadzīgs. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0049 | a1-etwas | entry[169].study.comparison[2].example | Ich bin ein bisschen müde. = Es esmu mazliet noguris. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0050 | a1-euch | entry[170].study.comparison[0].example | Ihr seid freundlich. = Jūs esat draudzīgi. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0051 | a1-euch | entry[170].study.comparison[1].example | Ich helfe euch. = Es jums palīdzu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0052 | a1-euch | entry[170].study.comparison[2].example | Das ist euer Haus. = Tā ir jūsu māja. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0053 | a1-euch | entry[170].study.info[0] | ihr = you (subject form of the sentence) | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0054 | a1-euch | entry[170].study.info[1] | euch = you (where? form) / you (whom? form) | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0055 | a1-euch | entry[170].study.info[2] | euer = your (possessive form) | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0056 | a1-euch | entry[170].study.tip.example | I help you. = Ich helfe euch. i see you = Ich sehe euch. I'm telling you. = Ich erzähle euch. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0057 | a1-fahren | entry[172].study.comparison[2].example | Er läuft schnell. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0058 | a1-fahren | entry[172].study.important.text | Fahren ≠ tikai « braukt » | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0059 | a1-fahren | entry[172].study.important.example | In German, the same verb often means: to drive • to drive • to take away depending on the context. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0060 | a1-fahren | entry[172].study.accents.purple[0] | braukt | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0061 | a1-fahren | entry[172].study.accents.purple[2] | vest | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0062 | a1-fahren | entry[172].study.accents.purple[4] | aizvest | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0063 | a1-fahren | entry[172].study.sectionAccents.comparison[2].example.yellow[0] | läuft | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0064 | a1-fahren | entry[172].study.sectionAccents.important[0].text.purple[0] | braukt | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0065 | a1-fahren | entry[172].study.sectionAccents.important[0].example.purple[0] | braukt | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0066 | a1-finden | entry[187].study.comparison[0].example | Ich finde das gut. = Man tas šķiet labi. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0067 | a1-finden | entry[187].study.comparison[1].example | Ich suche den Schlüssel. = Je cherche la clé. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0068 | a1-fuer | entry[216].study.explanation[0] | Idée principale : für est une préposition qui régit toujours l'accusatif - généralement pour ou pour en letton. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0069 | a1-fuer | entry[216].study.explanation[1] | Lorsqu'on parle de destinataire ou d'intention, für = pour (für dich = pour vous). | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0070 | a1-fuer | entry[216].study.explanation[2] | Lorsqu'on parle d'échange, de frais ou de motif, für = for (danke für das Geschenk = merci pour le cadeau). | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0071 | a1-fuer | entry[216].study.explanation[3] | Für nécessite toujours l'accusatif, quelle que soit sa signification. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0072 | a1-fuer | entry[216].study.tip[0] | Für toujours + accusatif - quel que soit le sens. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0073 | a1-fuer | entry[216].study.important[0] | Für + Akkusativ toujours, par exemple für mich, für dich, für das Kind. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0074 | a1-fuer | entry[216].study.important[1] | Danke für / bezahlen für = 'pour', pas 'avant'. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0075 | a1-fuer | entry[216].study.sectionAccents.tip[0].purple[0] | Für | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0076 | a1-fuer | entry[216].study.sectionAccents.important[0].purple[0] | für | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0077 | a1-haben | entry[261].study.comparison[0].example | Ich habe Zeit. = Man ir laiks. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0078 | a1-haben | entry[261].study.comparison[1].example | Ich bin hier. = Es esmu šeit. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0079 | a1-haben | entry[261].study.comparison[2].example | Ich bekomme ein Geschenk. = Es saņemu dāvanu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0080 | a1-haben | entry[261].study.tip.text | Atceries : Ich habe → man ir. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0081 | a1-haben | entry[261].study.sectionAccents.tip.left.purple[0] | man ir | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0082 | a1-halten | entry[265].study.explanation[3] | Dans l'expression d'opinion, je halte das für..., cela signifie considérer comme. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0083 | a1-halten | entry[265].study.comparison[0].example | Der Bus hält. = Autobuss pietur. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0084 | a1-halten | entry[265].study.comparison[1].example | Ich nehme die Tasche. = Es ņemu somu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0085 | a1-halten | entry[265].study.comparison[2].example | Bitte halten Sie an. = Lūdzu, apstājieties. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0086 | a1-halten | entry[265].study.comparison[3].example | Ich denke, das ist richtig. = Es domāju, ka tas ir pareizi. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0087 | a1-halten | entry[265].study.important[1] | Ich halte das für... est une expression d'opinion : "Je le considère comme...". | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0088 | a1-halten | entry[265].study.sectionAccents.comparison[0].example.blue[0] | hält | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0089 | a1-halten | entry[265].study.sectionAccents.tip.left.blue[1] | hält | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0090 | a1-heißen | entry[276].study.comparison[1].example | Er nennt mich Tom. = Viņš mani sauc par Tomu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0091 | a1-heißen | entry[276].study.comparison[2].example | Was bedeutet das? = Ko tas nozīmē? | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0092 | a1-heißen | entry[276].study.comparison[4].meaning | zvanīt | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0093 | a1-hoeren-study | entry[287].study.explanation[1] | Hören signifie avant tout : percevoir le son. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0094 | a1-hoeren-study | entry[287].study.explanation[3] | Hören est utilisé pour les sons, la musique et ce qui est entendu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0095 | a1-hoeren-study | entry[287].study.tip[1] | Utilisez hören lorsque le contexte correspond à ce sens. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0096 | a1-hoeren-study | entry[287].study.important[0] | Hören = entendre/écouter un son. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0097 | a1-hoeren-study | entry[287].study.sectionAccents.important[0].blue[0] | hören | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0098 | a1-im | entry[293].study.important[2] | Avec des mois et des saisons : im März, im Herbst. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0099 | a1-können | entry[319].study.id | a1-können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0100 | a1-können | entry[319].study.explanation[0] | Idée principale : können signifie pouvoir ou savoir faire quelque chose. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0101 | a1-können | entry[319].study.explanation[3] | Können est un verbe modal, donc le deuxième verbe vient généralement à la fin. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0102 | a1-können | entry[319].study.comparison[0].word | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0103 | a1-können | entry[319].study.comparison[0].example | Ich kann schwimmen. = Es protu peldēt. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0104 | a1-können | entry[319].study.comparison[1].word | dürfen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0105 | a1-können | entry[319].study.comparison[1].example | Darf ich gehen? = Vai drīkstu iet? | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0106 | a1-können | entry[319].study.comparison[2].word | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0107 | a1-können | entry[319].study.comparison[2].example | Ich muss lernen. = Man jāmācās. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0108 | a1-können | entry[319].study.tip.text | Rappelez-vous : compétence/capacité → können. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0109 | a1-können | entry[319].study.important[0] | Können n'est pas la même chose que dürfen. können = pouvoir/savoir, dürfen = être autorisé. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0110 | a1-können | entry[319].study.important[1] | Dans une phrase avec können, le deuxième verbe vient souvent à la fin : Ich kann schwimmen. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0111 | a1-können | entry[319].study.sectionAccents.comparison[0].word.green[0] | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0112 | a1-können | entry[319].study.sectionAccents.comparison[1].word.green[0] | dürfen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0113 | a1-können | entry[319].study.sectionAccents.comparison[2].word.green[0] | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0114 | a1-können | entry[319].study.sectionAccents.tip.left.blue[0] | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0115 | a1-können | entry[319].study.sectionAccents.important[0].purple[0] | Können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0116 | a1-kosten | entry[320].study.comparison[0].example | Das kostet 5 Euro. = Tas maksā 5 eiro. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0117 | a1-kosten | entry[320].study.comparison[1].example | Ich bezahle die Rechnung. = Es maksāju rēķinu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0118 | a1-kosten | entry[320].study.comparison[2].example | Kann ich bar zahlen? = Vai varu maksāt skaidrā naudā? | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0119 | a1-kosten | entry[320].study.comparison[3].example | Was kostet das Buch? = Cik maksā grāmata? | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0120 | a1-laden-study | entry[349].study.explanation[3] | Pluriel : die Läden. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0121 | a1-laden-study | entry[349].study.important[2] | Pluriel : die Läden. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0122 | a1-laden-study | entry[349].study.sectionAccents.important[2].blue[0] | die Läden | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0123 | a1-laufen | entry[357].study.comparison[0].example | Er läuft schnell. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0124 | a1-laufen | entry[357].study.sectionAccents.comparison[0].example.blue[0] | läuft | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0125 | a1-laut | entry[358].study.explanation[6] | Der Laut avec une majuscule et l'article der est un nom - cela signifie le son en tant que chose ou signal (Der Laut ist… | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0126 | a1-laut-study | entry[359].study.explanation[6] | Der Laut avec une majuscule et l'article der est un nom - cela signifie le son en tant que chose ou signal (Der Laut ist… | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0127 | a1-mann | entry[394].study.explanation[4] | Pluriel : die Männer. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0128 | a1-mann | entry[394].study.important[2] | Pluriel : die Männer. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0129 | a1-mögen | entry[413].study.id | a1-mögen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0130 | a1-mögen | entry[413].study.explanation[0] | Idée principale : mögen signifie le plus souvent aimer quelque chose. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0131 | a1-mögen | entry[413].study.explanation[2] | Möchte est une autre forme utilisée pour le désir poli : je voudrais. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0132 | a1-mögen | entry[413].study.comparison[0].word | mögen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0133 | a1-mögen | entry[413].study.comparison[1].word | möchte | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0134 | a1-mögen | entry[413].study.comparison[1].example | Ich möchte Kaffee. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0135 | a1-mögen | entry[413].study.important[0] | Mögen n'est pas un nom pour poli « je voudrais ». Möchte est généralement utilisé pour cela. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0136 | a1-mögen | entry[413].study.sectionAccents.comparison[0].word.green[0] | mögen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0137 | a1-mögen | entry[413].study.sectionAccents.comparison[1].word.green[0] | möchte | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0138 | a1-mögen | entry[413].study.sectionAccents.comparison[1].example.red[0] | möchte | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0139 | a1-mögen | entry[413].study.sectionAccents.important[0].purple[0] | Mögen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0140 | a1-mögen | entry[413].study.sectionAccents.important[0].purple[1] | Mögen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0141 | a1-müssen | entry[423].study.id | a1-müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0142 | a1-müssen | entry[423].study.explanation[0] | Idée principale : müssen signifie faire quelque chose. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0143 | a1-müssen | entry[423].study.explanation[1] | En letton, müssen est souvent traduit par « moi oui… », « toi oui… », « nous oui… ». | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0144 | a1-müssen | entry[423].study.comparison[0].word | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0145 | a1-müssen | entry[423].study.comparison[1].word | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0146 | a1-müssen | entry[423].study.comparison[3].word | dürfen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0147 | a1-müssen | entry[423].study.important[0] | Müssen est un verbe modal. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0148 | a1-müssen | entry[423].study.sectionAccents.comparison[0].word.green[0] | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0149 | a1-müssen | entry[423].study.sectionAccents.comparison[1].word.green[0] | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0150 | a1-müssen | entry[423].study.sectionAccents.comparison[3].word.green[0] | dürfen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0151 | a1-müssen | entry[423].study.sectionAccents.important[0].purple[0] | Müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0152 | a1-müssen | entry[423].study.sectionAccents.important[0].purple[1] | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0153 | a1-nach | entry[426].study.comparison[3].example | Vor dem Essen wasche ich die Hände. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0154 | a1-natuerlich | entry[433].study.explanation[0] | Idée principale : natürlich comme adverbe signifie bien sûr, comme adjectif cela signifie naturel. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0155 | a1-natuerlich | entry[433].study.explanation[1] | Dans une conversation, confirmant quelque chose, natürlich = bien sûr (Kommst du mit ? – Natürlich ! = Vous venez ? – Bi… | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0156 | a1-natuerlich | entry[433].study.explanation[2] | Lorsqu'on parle de nature, d'origine ou de qualités, natürlich = naturel (natürliche Schönheit = beauté naturelle). | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0157 | a1-natuerlich | entry[433].study.important[0] | Natürlich = bien sûr (adverbe, affirmation) OU naturel (adjectif). | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0158 | a1-natuerlich | entry[433].study.sectionAccents.important[0].purple[0] | natürlich | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0159 | a1-natuerlich | entry[433].study.sectionAccents.important[0].purple[1] | natürlich | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0160 | a1-oder | entry[459].study.comparison[3].example | Ich komme, aber später. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0161 | a1-probieren | entry[482].study.explanation[3] | Ce n’est pas la même chose que prüfen, ce qui signifie vérifier plus attentivement. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0162 | a1-probieren | entry[482].study.comparison[2].word | prüfen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0163 | a1-probieren | entry[482].study.comparison[2].example | Ich prüfe die Rechnung. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0164 | a1-probieren | entry[482].study.important[1] | Vérifier un document ou une facture est généralement prüfen. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0165 | a1-probieren | entry[482].study.sectionAccents.comparison[2].word.green[0] | prüfen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0166 | a1-probieren | entry[482].study.sectionAccents.comparison[2].example.red[0] | prüfe | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0167 | a1-schon-study | entry[521].study.explanation[1] | Schön signifie principalement : quelque chose s'est déjà produit ou est en cours. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0168 | a1-sehen | entry[539].study.comparison[3].word | hören | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0169 | a1-sehen | entry[539].study.comparison[3].example | Ich höre Musik. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0170 | a1-sehen | entry[539].study.important[1] | Ich sehe dich = es tevi redzu • Ich schaue den Film = es skatos filmu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0171 | a1-sehen | entry[539].study.sectionAccents.comparison[3].word.green[0] | hören | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0172 | a1-sehen | entry[539].study.sectionAccents.comparison[3].example.green[0] | höre | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0173 | a1-sein | entry[542].study.comparison[2].example | Ich werde müde. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0174 | a1-sein | entry[542].study.tip.text | Atceries : ich bin = es esmu • Du bist = tu esi. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0175 | a1-sein | entry[542].study.sectionAccents.tip.left.purple[0] | es esmu | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0176 | a1-sich | entry[547].study.explanation[3] | Important à noter au niveau A1 : ich wasche mich, er wäscht sich. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0177 | a1-sich | entry[547].study.comparison[0].example | Er wäscht sich. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0178 | a1-sich | entry[547].study.comparison[2].example | Du wäschst dich. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0179 | a1-sitzen | entry[558].study.comparison[1].example | Er steht an der Tür. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0180 | a1-sollen | entry[564].study.explanation[2] | Ce n'est pas aussi fort que le müssen. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0181 | a1-sollen | entry[564].study.comparison[1].word | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0182 | a1-sollen | entry[564].study.comparison[2].word | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0183 | a1-sollen | entry[564].study.tip.text | Rappelez-vous : quelqu'un dit quoi faire → sollen • Doit être fait → müssen. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0184 | a1-sollen | entry[564].study.important[1] | Sollen et müssen ne sont pas exactement les mêmes. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0185 | a1-sollen | entry[564].study.sectionAccents.comparison[1].word.green[0] | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0186 | a1-sollen | entry[564].study.sectionAccents.comparison[2].word.green[0] | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0187 | a1-sollen | entry[564].study.sectionAccents.tip.left.red[0] | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0188 | a1-sollen | entry[564].study.sectionAccents.important[1].red[0] | müssen | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0189 | a1-über | entry[608].study.id | a1-über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0190 | a1-über | entry[608].study.explanation[0] | Idée principale : über signifie au-dessus ou environ selon le contexte. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0191 | a1-über | entry[608].study.explanation[1] | Lorsqu'il s'agit d'emplacement, über signifie souvent au-dessus. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0192 | a1-über | entry[608].study.explanation[2] | Lorsqu'il s'agit d'une conversation, d'un texte ou d'un sujet, über signifie environ. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0193 | a1-über | entry[608].study.explanation[3] | En mouvement, über peut signifier fini. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0194 | a1-über | entry[608].study.comparison[0].word | über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0195 | a1-über | entry[608].study.comparison[0].example | Wir sprechen über das Wetter. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0196 | a1-über | entry[608].study.comparison[3].example | Ich höre von dir. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0197 | a1-über | entry[608].study.tip.text | Rappelez-vous : sujet de conversation → über • Au-dessus du tableau → über. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0198 | a1-über | entry[608].study.important[0] | Über n'est pas seulement un nom de lieu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0199 | a1-über | entry[608].study.important[1] | Sprechen über signifie « parler de ». | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0200 | a1-über | entry[608].study.sectionAccents.comparison[0].word.green[0] | über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0201 | a1-über | entry[608].study.sectionAccents.comparison[0].example.blue[0] | über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0202 | a1-über | entry[608].study.sectionAccents.tip.left.blue[0] | über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0203 | a1-über | entry[608].study.sectionAccents.important[0].purple[0] | Über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0204 | a1-um | entry[611].study.comparison[3].word | für | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0205 | a1-um | entry[611].study.comparison[3].example | Das ist für dich. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0206 | a1-um | entry[611].study.sectionAccents.comparison[3].word.green[0] | für | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0207 | a1-um | entry[611].study.sectionAccents.comparison[3].example.red[0] | für | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0208 | a1-unter | entry[615].study.explanation[3] | C'est l'opposé d'über lorsqu'il s'agit de la direction haut/bas. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0209 | a1-unter | entry[615].study.comparison[1].word | über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0210 | a1-unter | entry[615].study.comparison[1].example | Die Lampe hängt über dem Tisch. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0211 | a1-unter | entry[615].study.comparison[2].example | Zwischen den Häusern. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0212 | a1-unter | entry[615].study.important[1] | Unter et über sont souvent opposés dans le sens du lieu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0213 | a1-unter | entry[615].study.sectionAccents.comparison[1].word.green[0] | über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0214 | a1-unter | entry[615].study.sectionAccents.comparison[1].example.red[0] | über | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0215 | a1-verstehen | entry[621].study.explanation[2] | Ici, vous n'avez généralement pas besoin de « connaître » ou d'« enseigner » le letton. • Ils sont plus souvent können. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0216 | a1-verstehen | entry[621].study.comparison[1].word | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0217 | a1-verstehen | entry[621].study.tip.text | N'oubliez pas : comprendre le texte/la personne → verstehen • Savoir comment faire quelque chose → können. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0218 | a1-verstehen | entry[621].study.sectionAccents.comparison[1].word.green[0] | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0219 | a1-verstehen | entry[621].study.sectionAccents.tip.left.red[0] | können | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0220 | a1-vor | entry[636].study.explanation[3] | En temps d'horloge, vor signifie « jusqu'à », par exemple fünf vor acht. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0221 | a1-was | entry[644].study.important[2] | Was für (ein/eine) signifie quelqu'un/et demande une qualité ou un type (Was für ein Film ist das ? = De quel genre de f… | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0222 | a1-was | entry[644].study.sectionAccents.important[2].blue[0] | was für | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0223 | a1-werden | entry[657].study.explanation[3] | Au niveau A1, la phrase la plus importante est Ich werde müde. = Je commence à être fatigué. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0224 | a1-werden | entry[657].study.comparison[0].example | Ich werde müde. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0225 | a1-werden | entry[657].study.comparison[1].example | Ich bin müde. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0226 | a1-werden | entry[657].study.important[1] | Ich werde müde = je suis fatigué • Ich bin müde = je suis fatigué. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0227 | a1-wetter | entry[658].study.comparison[0].example | Das Wetter ist schön. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0228 | a1-fernsehen | entry[687].study.comparison[0].example | Ich sehe fern. = Es skatos televīziju. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0229 | a1-fernsehen | entry[687].study.comparison[1].example | Im Fernsehen läuft ein Film. = Televīzijā rāda filmu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0230 | a1-fernsehen | entry[687].study.comparison[2].example | Ich sehe einen Film. = Es redzu filmu. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0231 | a1-gemuese | entry[692].study.explanation[0] | Idée principale : Les légumes en général. L'allemand n'a pas de forme plurielle pour *die Gemüse. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0232 | a1-gemuese | entry[692].study.explanation[1] | Das Gemüse signifie principalement : les légumes en général. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0233 | a1-gemuese | entry[692].study.tip[0] | Das Gemüse = légumes | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0234 | a1-gemuese | entry[692].study.tip[1] | Utilisez das Gemüse lorsque le contexte correspond à ce sens. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0235 | a1-gemuese | entry[692].study.important[0] | Nav pareizi : die Gemüse, die Obsts. | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0236 | a1-gemuese | entry[692].study.important[1] | Nepareizi : die Gemüse → Pareizi : das Gemüse | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0237 | a1-gemuese | entry[692].study.important[2] | Das Gemüse = légumes (en général). | (FR tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| FR-A1-0238 | a1-es | study.sectionAccents (examples) | Ich | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0239 | a1-es | study.sectionAccents (examples) | Er | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0240 | a1-es | study.sectionAccents (examples) | Sie | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0241 | a1-es | study.sectionAccents (examples) | Das | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0242 | a1-fahren | study.sectionAccents (?) | läuft | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0243 | a1-fahren | study.sectionAccents (?) | braukt | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0244 | a1-fuer | study.sectionAccents (?) | Für | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0245 | a1-fuer | study.sectionAccents (?) | für | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0246 | a1-fuer | study.sectionAccents (examples) | pay | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0247 | a1-gross-study | study.sectionAccents (explanation) | Main | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0248 | a1-haben | study.sectionAccents (?) | man ir | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0249 | a1-halten | study.sectionAccents (?) | hält | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0250 | a1-halten | study.sectionAccents (examples) | consider | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0251 | a1-hoeren-study | study.sectionAccents (?) | hören | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0252 | a1-kein | study.sectionAccents (explanation) | Main | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0253 | a1-können | study.sectionAccents (?) | können | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0254 | a1-können | study.sectionAccents (?) | dürfen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0255 | a1-können | study.sectionAccents (?) | müssen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0256 | a1-können | study.sectionAccents (?) | Können | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0257 | a1-laden-study | study.sectionAccents (?) | die Läden | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0258 | a1-lang | study.sectionAccents (examples) | long | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0259 | a1-laufen | study.sectionAccents (?) | läuft | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0260 | a1-liegen | study.sectionAccents (examples) | phone | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0261 | a1-mögen | study.sectionAccents (?) | mögen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0262 | a1-mögen | study.sectionAccents (?) | möchte | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0263 | a1-mögen | study.sectionAccents (?) | Mögen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0264 | a1-müssen | study.sectionAccents (?) | müssen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0265 | a1-müssen | study.sectionAccents (?) | können | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0266 | a1-müssen | study.sectionAccents (?) | dürfen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0267 | a1-müssen | study.sectionAccents (?) | Müssen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0268 | a1-natuerlich | study.sectionAccents (?) | natürlich | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0269 | a1-neu | study.sectionAccents (explanation) | Main | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0270 | a1-neu | study.sectionAccents (examples) | phone | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0271 | a1-nur-study | study.sectionAccents (examples) | just | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0272 | a1-probieren | study.sectionAccents (?) | prüfen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0273 | a1-probieren | study.sectionAccents (?) | prüfe | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0274 | a1-sehen | study.sectionAccents (?) | hören | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0275 | a1-sehen | study.sectionAccents (?) | höre | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0276 | a1-sein | study.sectionAccents (?) | es esmu | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0277 | a1-sollen | study.sectionAccents (?) | müssen | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0278 | a1-sollen | study.sectionAccents (?) | können | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0279 | a1-über | study.sectionAccents (?) | über | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0280 | a1-über | study.sectionAccents (?) | Über | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0281 | a1-über | study.sectionAccents (examples) | lamp | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0282 | a1-um | study.sectionAccents (?) | für | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0283 | a1-unter | study.sectionAccents (?) | über | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0284 | a1-unter | study.sectionAccents (examples) | lamp | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0285 | a1-verstehen | study.sectionAccents (?) | können | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0286 | a1-was | study.sectionAccents (?) | was für | (termins no FR teksta) | HIGH | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0287 | a1-zum | study.sectionAccents (examples) | are | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0288 | a1-obst | study.sectionAccents (examples) | fruit | (termins no FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0289 | a1-bis | study.sectionAccents.comparison.example | bis dass | (termins no attiecīgā FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0290 | a1-bringen | study.sectionAccents.examples.de | Wasser | (termins no attiecīgā FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0291 | a1-bringen | study.sectionAccents.examples.de | dich | (termins no attiecīgā FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0292 | a1-bringen | study.sectionAccents.examples.de | bringt | (termins no attiecīgā FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0293 | a1-bringen | study.sectionAccents.examples.de | Buch | (termins no attiecīgā FR teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| FR-A1-0294 | a1-an | study.translation | À • À • Présent | À | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0295 | a1-aus | study.translation | De • Sortie | De | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0296 | a1-aufs | study.translation | Vers • Sur • Où ? | Vers | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0297 | a1-besuchen-89 | lv | Pour assister • Pour visiter | Pour assister | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0298 | a1-bringen | study.translation | À emporter • À emporter | À emporter | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0299 | a1-ein | study.translation | Article indéfini • Un • Quelqu'un | Article indéfini | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0300 | a1-eis | study.translation | Glace • Glace | Glace | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0301 | a1-erst | study.translation | Premier • Seulement | Premier | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0302 | a1-es | study.translation | Il • Il • Forme impersonnelle | Il | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0303 | a1-etwas | study.translation | Quelque chose • Un peu | Quelque chose | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0304 | a1-euch | study.translation | Vous • Vous | Vous | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0305 | a1-fahren | study.translation | Conduire • Diriger • Emporter | Conduire | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0306 | a1-finden | study.translation | Trouver • Considérer | Trouver | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0307 | a1-frau | study.translation | Femme • Épouse | Femme | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0308 | a1-fuer | study.translation | Pour • Pour | Pour | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0309 | a1-Geschichte-233 | lv | Histoire • Histoire | Histoire | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0310 | a1-gleich | study.translation | Immédiatement • Égal | Immédiatement | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0311 | a1-halten | study.translation | Maintenir • Arrêter | Maintenir | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0312 | a1-heißen | study.translation | Être appelé • Moyen | Être appelé | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0313 | a1-hoeren-study | study.translation | Entendre • Écouter | Entendre | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0314 | a1-hübsch-288 | lv | Propre • Agréable | Propre | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0315 | a1-ihr | study.translation | Vous • Elle | Vous | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0316 | a1-im | study.translation | Dans • Où ? | Dans | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0317 | a1-ins | study.translation | Dans • Dans • Où ? | Dans | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0318 | a1-jetzt-302 | lv | Maintenant • Actuellement | Maintenant | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0319 | a1-kein | study.translation | Personne • Rien | Personne | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0320 | a1-können | study.translation | Être capable de • Savoir | Être capable de | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0321 | a1-land | study.translation | Pays • Terrain | Pays | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0322 | a1-lang | study.translation | Longue • Longue | Longue | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0323 | a1-lassen | study.translation | Partir • Laisser | Partir | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0324 | a1-laufen | study.translation | Exécuter • Utiliser | Exécuter | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0325 | a1-liegen | study.translation | Être • Dormir | Être | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0326 | a1-links-380 | lv | Gauche • Gauche | Gauche | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0327 | a1-machen | study.translation | Faire • Faire | Faire | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0328 | a1-malen-391 | lv | Peindre • Peindre | Peindre | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0329 | a1-mann | study.translation | Homme • Mari | Homme | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0330 | a1-nach | study.translation | À • Après | À | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0331 | a1-natuerlich | study.translation | Bien sûr • Naturel | Bien sûr | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0332 | a1-nehmen | study.translation | Prendre • Prendre | Prendre | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0333 | a1-nur-study | study.translation | Seulement • Seulement | Seulement | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0334 | a1-oder | study.translation | Ou • Ou | Ou | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0335 | a1-passen | study.translation | Ajustement • Ajustement | Ajustement | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0336 | a1-probieren | study.translation | A essayer • A déguster | A essayer | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0337 | a1-rechts-491 | lv | À droite • La droite | À droite | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0338 | a1-seite | study.translation | Page • Côté | Page | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0339 | a1-sich | study.translation | Vous-même • Pour vous-même | Vous-même | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0340 | a1-sicher | study.translation | Sûr • Certainement | Sûr | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0341 | a1-sie-study | study.translation | Ils/elle | Ils | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0342 | a1-über | study.translation | Fini • Pour | Fini | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0343 | a1-um | study.translation | Vers • Heures | Vers | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0344 | a1-vor | study.translation | Avant • Devant | Avant | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0345 | a1-was | study.translation | Qui • Quoi | Qui | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0346 | a1-wenn | study.translation | Si • Quand | Si | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0347 | a1-wer | study.translation | Qui • Qui | Qui | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0348 | a1-wie | study.translation | Comment • Combien | Comment | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0349 | a1-zu | study.translation | À • À | À | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0350 | a1-zum | study.translation | À • À | À | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0351 | a1-essen-study | study.translation | Alimentation • Repas | Alimentation | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0352 | a1-zeit | study.translation | Temps (instant / période de temps) | Temps (instant | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
| FR-A1-0353 | a1-einmal | study.translation | Une fois • Une fois | Une fois | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | PENDING | | |
