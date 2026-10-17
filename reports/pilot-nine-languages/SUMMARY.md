# Deviņas valodas: pilots un DE↔X avoti

Datums: 2026-10-05. STAGE: AUDIT-REPORT (READ-ONLY). Dati un kods nav mainīti. Meklēšana: git un gh. Tulkojumu šķirkļi nav kopēti.

Bāze: `origin/main` `9b44e89506a66a39e6ca375d6106566396ef8f10` (MASTER 1.20, §7.158, §7.158.D).

## Apjoms

| Avots | Skaits |
|---|---|
| `git branch -r` | 858 |
| `refs/pull-heads` | 878 |
| `refs/pull-merges` | 284 |
| tagi | 1 (`phase1-corrected-bundle-2026-09-06`; valodas vārda nav) |
| PR virsraksti un apraksti | 879 |
| issue komentāri | 186 (valodu/vārdnīcu trāpījumi 0) |
| review komentāri | 304 (trāpījumi ir DA/LB kartīšu piezīmes, ne jauns DE↔X avotu saraksts) |
| dzēsti `reports/` ceļi ar precīzu valodas kodu | 0 |

`reports/pilot-results` un `reports/g2-a1-production-current` nav uz `origin/main`.

## Kā skaitīts

Atradums = rinda `FINDINGS.csv`: 7 kopīgie artefakti katrai valodai, plus PR, kura virsrakstā vai zara vārdā ir valodas kods. Sešu vārdu FOUND = `TRANSLATION_VALIDATED` 16×32 failā vai Haus verdikts `PASS`. `NEEDS_SOURCE_REVIEW`, `FINDING`, `TARGET_OFFICIAL_NOT_VALIDATED`, `NO_ELIGIBLE_DICTIONARY_CANDIDATE` neskaita kā FOUND. dict.cc, PONS, Langenscheidt, Babla, Glosbe un Wiktionary nav OWNER autoritatīvs avots. Wiktionary 16×32 JSON nav (0).

Divas ekstraktora palaišanas: SHA-256 `420b16066b36e648712e35d810f5346dc6f648bc2ec2a989c98d34d680d8d224` (identisks).

## Tabula

| lang | atradumi | labākais pierādījums | pilota statuss | OWNER dokumentos nosauktie avoti |
|---|---:|---|---|---|
| da | 48 | [16×32](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/050795215098ba7c5924601cf7aa81807a392b91/reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.md) Kleingeld `TRANSLATION_VALIDATED` | PARTIAL 1/6 | Dansk Sprognævn — Retskrivningsordbogen, rinda 4, https://ro.dsn.dk/ . DE↔X fails nav (#864). |
| en | 59 | [16×32](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/050795215098ba7c5924601cf7aa81807a392b91/reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.md) 0 no 6 `TRANSLATION_VALIDATED`/`PASS` | NONE_FOUND | Oxford English Dictionary / Oxford Learner's Dictionaries, rinda 2, https://www.oed.com/ ; https://www.oxfordlearnersdictionaries.com/ . DE↔X fails nav (#864). |
| es | 16 | [16×32](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/050795215098ba7c5924601cf7aa81807a392b91/reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.md) arbeiten un bewirten `TRANSLATION_VALIDATED`; Haus `PASS` | PARTIAL 3/6 | Real Academia Española — DLE / Ortografía, rinda 6, https://dle.rae.es/ ; https://www.rae.es/ortografia . DE↔X fails nav (#864). |
| fi | 25 | [16×32](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/050795215098ba7c5924601cf7aa81807a392b91/reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.md) visi 16 lemmas `NEEDS_SOURCE_REVIEW` | NONE_FOUND | Kotimaisten kielten keskus — Kielitoimiston sanakirja, rinda 25, https://www.kotus.fi/ ; https://www.kielitoimistonsanakirja.fi/ . DE↔X fails nav (#864). |
| gr | 9 | [16×32](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/050795215098ba7c5924601cf7aa81807a392b91/reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.md) neviens no 6 nav FOUND | NONE_FOUND | `el` / app `gr`, Κέντρο Ελληνικής Γλώσσας, rinda 28, https://www.greek-language.gr/ . DE↔X fails nav (#864). |
| lb | 15 | [rescan](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/eb9821e65c5fc0902e564eae576b279a76015483/reports/pilot-results/other-pilots.csv) Haus `TRANSLATION_VALIDATED` | PARTIAL 1/6 | Zenter fir d'Lëtzebuerger Sprooch — LOD, rinda 12, https://zls.lu/ ; https://lod.lu/ . DE↔X fails nav (#864). |
| nb | 8 | [16×32](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/050795215098ba7c5924601cf7aa81807a392b91/reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.md) 0 no 6 FOUND | NONE_FOUND | Språkrådet / Bokmålsordboka, rinda 16, https://sprakradet.no/ ; https://ordbokene.no/bm . DE↔X fails nav (#864). |
| ru | 8 | [16×32](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/050795215098ba7c5924601cf7aa81807a392b91/reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.md) arbeiten `TRANSLATION_VALIDATED` | PARTIAL 1/6 | Институт русского языка им. В. В. Виноградова РАН, rinda 31, https://ruslang.ru/ ; https://orfo.ruslang.ru/ . DE↔X fails nav (#864). |
| tr | 8 | [16×32](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/050795215098ba7c5924601cf7aa81807a392b91/reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.md) 0 no 6 FOUND | NONE_FOUND | Türk Dil Kurumu — Güncel Türkçe Sözlük / Yazım Kılavuzu, rinda 27, https://tdk.gov.tr/ ; https://sozluk.gov.tr/ . DE↔X fails nav (#864). |

Reģistra rindas: `docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md` §3 uz `origin/main`. Tās ir tips B (vienvalodas normas avots). Neviens no deviņiem nav `ALL_SIX_FOUND`.

## Citi piloti (nav #865 sešu vārdu tabula)

16×32 (`05079521`, PR #843 OPEN, 2026-09-25) satur arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier un vēl 11 lemmas. Haus tajā failā nav.

Haus-32 (`948e1428`, PR #842 OPEN, 2026-09-20): da FINDING `CAPITALIZATION_ERROR`; en FINDING `CAPITALIZATION_ERROR`; es PASS; fi FINDING `WRONG_TRANSLATION`; gr FINDING `CAPITALIZATION_ERROR`; lb `NEEDS_SOURCE_REVIEW`; nb FINDING `WRONG_TRANSLATION`; ru FINDING `CAPITALIZATION_ERROR`; tr FINDING `CAPITALIZATION_ERROR`. da Haus avots šajā failā ir Den Danske Ordbog (ordnet.dk), nevis reģistra ro.dsn.dk.

Trīs lemmas (`d0b85cf7`, 2026-09-21), primārais avots dict.cc, lb — LOD. Statuss, nevis tulkojums: da Route DIRECT, abholen un Getriebe SUPPORTING; en Route un Getriebe MULTIPLE, abholen SUPPORTING; es Getriebe DIRECT, Route MULTIPLE, abholen SUPPORTING; fi abholen un Route DIRECT, Getriebe SUPPORTING; gr visi trīs SUPPORTING; lb visi trīs `ENTRY_NOT_FOUND`; nb abholen un Route DIRECT, Getriebe MULTIPLE; ru Route un Getriebe DIRECT, abholen MULTIPLE; tr visi trīs SUPPORTING.

PDF discovery (`960df8fa`): da GAP; en Muret-Sanders, archive.org, abi virzieni; es BNE kandidāts; fi GAP; gr archive.org meklēšanas kandidāts; lb LOD, nav PDF; nb GAP; ru Schmidt 1844, archive.org; tr archive.org meklēšanas kandidāts.

Katalogs tajā pašā komitā: da, en, es, fi, gr (`el`), nb, ru, tr = dict.cc; lb = LOD `OFFICIAL_BILINGUAL_LEXICON`.

## Atšķirība pret reports/pilot-results

#865 (`eb9821e6`, PR galva `e973a2e5`, OPEN) visām deviņām liek `NOT_TESTED`. `languages.csv` blobs abos komitos ir viens (`13f0ca403908fca77302931bdd1fb04eb3b65e35`). Tajā nav 16×32 verdiktu, Haus-32 verdiktu, trīs lemmu statusu, PDF nosaukumu un DA/EN/ES/FI/LB karšu auditu. lb rescan (Haus, abholen, Route, Getriebe) #865 jau ir; haus-32 lb bija `NEEDS_SOURCE_REVIEW`, vēlākais rescan Haus ir `TRANSLATION_VALIDATED`. Šī atskaite to neizšķir.

Valodu pakas un lingvistiskie auditi, kas nav pilots: da 41 PR (piem. #240 MERGED, #542–#585); en 52 PR (piem. #248 MERGED, #342 OPEN); es 9 PR (piem. #246 MERGED, #663 OPEN); fi 18 LRB/valodas PR (piem. #236 MERGED, #730 OPEN); gr #224 MERGED un #745 OPEN (35 GR kartītes); lb 8 PR (piem. #243 MERGED, #804 OPEN); nb #238 MERGED; ru #220 MERGED; tr #225 MERGED.

## STAGE RESULT

PASS
