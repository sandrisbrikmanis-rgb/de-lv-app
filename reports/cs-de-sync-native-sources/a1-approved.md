# A1 — Czech native translation source (DE sync)

> **Workflow:** Translate LV reference → Czech. Fill **APPROVED_CS** only.
> **DE LOCKED:** Do not change DE column / German fragments.
> **Apply:** `node scripts/apply-de-sync-native-sources.js --lang=cs --level=a1` (after approval)

Cards with DE fields synced from LV-DE: **29** units from changed cards; plus suspect natives (placeholder / LV leak).

## Examples — native (DE locked)

| ID | DE (locked) | LV reference | CURRENT_CS | APPROVED_CS | Reason |
|----|-------------|--------------|------------|-------------|--------|
| `a1[5]/sprechen/study.examples[2].lv` | Sie spricht mit ihrer Lehrerin. | Viņa runā ar savu skolotāju. | Mluvím německy. | Mluví se svou učitelkou. | DE field synced from LV-DE |
| `a1[6]/klein/study.examples[1].lv` | Das Kind ist noch klein. | Bērns vēl ir mazs. | Pokoj je malý. | Dítě je ještě malé. | DE field synced from LV-DE |
| `a1[6]/klein/study.examples[2].lv` | Ich habe eine kleine Tasche. | Man ir maza soma. | Dítě je ještě malé. | Mám malou tašku. | DE field synced from LV-DE |
| `a1[48]/auch/study.examples[1].lv` | Sie arbeitet auch hier. | Viņa arī strādā šeit. | Já také přijdu. | Také pracuje tady. | DE field synced from LV-DE |
| `a1[48]/auch/study.examples[2].lv` | Ich wünsche Ihnen auch einen schönen Tag. | Es arī novēlu jums jauku dienu. | Ona zde také pracuje. | Také vám přeji hezký den. | DE field synced from LV-DE |
| `a1[111]/bringen/study.examples[0].lv` | Ich bringe dir ein Buch. | Es tev atnesu grāmatu. | Přines mi prosím vodu | Přinesu ti knihu. | DE field synced from LV-DE |
| `a1[111]/bringen/study.examples[1].lv` | Ich bringe das Paket zur Post. | Es aiznesu paku uz pastu. | Vezmu tě domů | Odnesu balík na poštu. | DE field synced from LV-DE |
| `a1[111]/bringen/study.examples[2].lv` | Ich bringe die Kinder zur Schule. | Es aizvedu bērnus uz skolu. | Přináší knihu do školy. | Odvedu děti do školy. | DE field synced from LV-DE |
| `a1[139]/dieser/study.examples[1].lv` | Ich sehe diesen Hund. | Es redzu šo suni. | Líbí se mi tento pes. | Vidím tohoto psa. | DE field synced from LV-DE |
| `a1[165]/erst/study.examples[0].lv` | Erst lernen, dann spielen. | Vispirms mācies, pēc tam spēlējies. | Nejdřív pij, pak řiď. | Nejdřív se uč, potom si hraj. | DE field synced from LV-DE |
| `a1[187]/finden/study.examples[0].lv` | Ich finde meinen Schlüssel. | Es atrodu savu atslēgu. | Nemohu najít svůj klíč. | Našel jsem svůj klíč. | DE field synced from LV-DE |
| `a1[187]/finden/study.examples[1].lv` | Ich finde das gut. | Man tas šķiet labi. | Našel/našla jsi svůj telefon? | Myslím, že je to dobré. | DE field synced from LV-DE |
| `a1[187]/finden/study.examples[2].lv` | Wie findest du den Film? | ko tu domā par filmu? | Myslím si, že je to dobré. | Co si myslíš o tom filmu? | DE field synced from LV-DE |
| `a1[250]/groß/study.examples[1].lv` | Berlin ist eine große Stadt. | Berlīne ir liela pilsēta. | Dům je velký. | Berlín je velké město. | DE field synced from LV-DE |
| `a1[285]/hoch/study.examples[1].lv` | Das Regal ist zwei Meter hoch. | plaukts ir divus metrus augsts. | Hora je vysoká. | Police je vysoká dva metry. | DE field synced from LV-DE |

## Comparison — meaning

| ID | DE word (locked) | LV reference | CURRENT_CS | APPROVED_CS | Reason |
|----|------------------|--------------|------------|-------------|--------|
| `a1[21]/aber/study.comparison[1].meaning` | sondern | nevis • bet gan | Ne..., ale... | ne • nýbrž / ale | DE field synced from LV-DE |
| `a1[91]/bis/study.comparison[0].meaning` | bis | līdz robežai vai laika punktam | Dokud (nedosáhne časového bodu) | až do určité hranice nebo časového bodu | DE field synced from LV-DE |
| `a1[91]/bis/study.comparison[1].meaning` | bis zu | līdz konkrētai robežai | Do (do určitého času) | až k určité hranici | DE field synced from LV-DE |
| `a1[91]/bis/study.comparison[2].meaning` | bis jetzt | līdz šim | Až doteď | až dosud • zatím | DE field synced from LV-DE |
| `a1[111]/bringen/study.comparison[1].meaning` | bringen | aiznest | Vzít / brát | odnést | DE field synced from LV-DE |
| `a1[111]/bringen/study.comparison[2].meaning` | bringen | aizvest | Jít pro / přinést | odvést | DE field synced from LV-DE |
| `a1[111]/bringen/study.comparison[3].meaning` | bringen | nogādāt | Přinést s sebou | doručit / dopravit | DE field synced from LV-DE |
| `a1[111]/bringen/study.comparison[4].meaning` | nehmen | paņemt | paņemt | vzít | Suspect native (placeholder / LV leak) |

## Comparison examples — native suffix (DE locked)

| ID | DE (locked) | LV reference | CURRENT_CS | APPROVED_CS | Reason |
|----|-------------|--------------|------------|-------------|--------|
| `a1[21]/aber/study.comparison[1].exampleNative` | Ich wollte keinen Tee, sondern Kaffee. | Es gribēju nevis tēju, bet gan kafiju. | Chtěl jsem čaj, ne kávu. | Nechtěl jsem čaj, nýbrž kávu. | DE field synced from LV-DE |
| `a1[91]/bis/study.comparison[0].exampleNative` | Ich bleibe bis morgen. | Es palieku līdz rītdienai. | Zůstanu do 18:00. | Zůstanu do zítřka. | DE field synced from LV-DE |
| `a1[91]/bis/study.comparison[1].exampleNative` | bis zum Bahnhof | līdz stacijai | Pracuji od 9 do 17. | až k nádraží | DE field synced from LV-DE |
| `a1[91]/bis/study.comparison[2].exampleNative` | Bis jetzt habe ich nichts verstanden. | Līdz šim es neko neesmu sapratis. | Čekám, až přijdeš. | Až dosud jsem ničemu nerozuměl. | DE field synced from LV-DE |
| `a1[111]/bringen/study.comparison[1].exampleNative` | Ich bringe das Paket zur Post. | Es aiznesu paku uz pastu. | Ich nehme das Buch. | Odnesu balík na poštu. | DE field synced from LV-DE |
| `a1[111]/bringen/study.comparison[2].exampleNative` | Ich bringe die Kinder zur Schule. | Es aizvedu bērnus uz skolu. | Ich hole Wasser. | Odvedu děti do školy. | DE field synced from LV-DE |
| `a1[111]/bringen/study.comparison[3].exampleNative` | Ich bringe dir ein Buch. | Es tev atnesu grāmatu. | Bringst du Brot mit? | Přinesu ti knihu. | DE field synced from LV-DE |
| `a1[111]/bringen/study.comparison[4].exampleNative` | Ich nehme das Buch. | Es paņemu grāmatu. | Es paņemu grāmatu. | Vezmu si knihu. | Suspect native (placeholder / LV leak) |

---
Total units: **31**
