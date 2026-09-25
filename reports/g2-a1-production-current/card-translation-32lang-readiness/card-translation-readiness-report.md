# G2/A1 card translation readiness (32 languages)

- **Classification:** CARD_TRANSLATION_READINESS_IN_PROGRESS
- **Ready:** 12/32
- **Next action:** CONTINUE_DE_TO_TARGET_COLLECTORS_AND_TARGET_VALIDATORS_PER_LANGUAGE
- **Full A1 audit executed:** false
- **Production modified (this PR / working tree):** false
- **Inherited PR #842 production paths (main→#842 base, 20):** `data/cs/a1.js`, `data/da/a1.js`, `data/en/a1.js`, `data/fi/a1.js`, `data/gr/a1.js`, `data/nb/a1.js`, `data/nn/a1.js`, `data/ru/a1.js`, `data/sk/a1.js`, `data/tr/a1.js`, `www/data/cs/a1.js`, `www/data/da/a1.js`, `www/data/en/a1.js`, `www/data/fi/a1.js`, `www/data/gr/a1.js`, `www/data/nb/a1.js`, `www/data/nn/a1.js`, `www/data/ru/a1.js`, `www/data/sk/a1.js`, `www/data/tr/a1.js`
- **PR #843-only production diff (#842…HEAD):** (none)
- **Batch blocker active:** true

## Ready languages
- cs
- da
- en
- es
- et
- fi
- gr
- lb
- nb
- ru
- sk
- tr

## Remaining languages
- bg
- bs
- fr
- hr
- hu
- is
- it
- lt
- lv
- mk
- nl
- nn
- pl
- pt
- ro
- sl
- sq
- sr
- sv
- uk

## Per language
### bg — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-bg` — https://bgde.dict.cc/
- TARGET validator: `bg-beron-browser-entry` — https://ibl.bas.bg/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://bgde.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### bs — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-bs` — https://bsde.dict.cc/
- TARGET validator: `bs-izj-no-entry` — https://izj.unsa.ba/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://bsde.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### cs — READY (targetOfficialValidation: true)
- Collector: `manifest-cs` — https://csde.dict.cc/
- TARGET validator: `cs-prirucka-ujc-entry` — https://prirucka.ujc.cas.cz/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://csde.dict.cc/

### da — READY (targetOfficialValidation: true)
- Collector: `manifest-da` — https://dade.dict.cc/
- TARGET validator: `da-ddo-browser-entry` — https://ro.dsn.dk/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://dade.dict.cc/

### en — READY (targetOfficialValidation: true)
- Collector: `manifest-en` — https://www.dict.cc/
- TARGET validator: `en-oald-entry` — https://www.oed.com/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://www.dict.cc/

### es — READY (targetOfficialValidation: true)
- Collector: `manifest-es` — https://dees.dict.cc/
- TARGET validator: `es-rae-dle-entry` — https://dle.rae.es/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://dees.dict.cc/

### et — READY (targetOfficialValidation: true)
- Collector: `glosbe-de-et-public` — https://glosbe.com/de/et
- TARGET validator: `et-sonaveeb-eki-entry` — https://sonaveeb.ee/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://glosbe.com/de/et

### fi — READY (targetOfficialValidation: true)
- Collector: `manifest-fi` — https://defi.dict.cc/
- TARGET validator: `fi-kielitoimisto-browser-entry` — https://www.kotus.fi/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://defi.dict.cc/

### fr — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-fr` — https://defr.dict.cc/
- TARGET validator: `fr-academie-browser-entry` — https://www.dictionnaire-academie.fr/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://defr.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### gr — READY (targetOfficialValidation: true)
- Collector: `manifest-gr` — https://deel.dict.cc/
- TARGET validator: `el-greek-language-triantafyllides` — https://www.greek-language.gr/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://deel.dict.cc/

### hr — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-hr` — https://dehr.dict.cc/
- TARGET validator: `hr-rjecnik-browser-entry` — https://pravopis.hr/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://dehr.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### hu — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-hu` — https://dehu.dict.cc/
- TARGET validator: `hu-nagyszotar-browser-entry` — https://nytud.hu/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://dehu.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### is — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-is` — https://deis.dict.cc/
- TARGET validator: `is-bin-browser-entry` — https://bin.arnastofnun.is/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://deis.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### it — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-it` — https://deit.dict.cc/
- TARGET validator: `it-lessicografia-browser-entry` — https://accademiadellacrusca.it/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://deit.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### lb — READY (targetOfficialValidation: true)
- Collector: `lb-lod-de-reverse-api` — https://lod.lu/api/de/search
- TARGET validator: `lb-lod-de-reverse-api` — https://zls.lu/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus

### lt — NOT READY (targetOfficialValidation: false)
- Collector: `vokieciu-lietuviu-public` — http://www.vokieciu-lietuviu.com/
- TARGET validator: `lt-ekalba-browser-entry` — https://lki.lt/
- Haus positive regression: FAIL — verdict **NO_ELIGIBLE_DICTIONARY_CANDIDATE**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: http://www.vokieciu-lietuviu.com/
- Blockers: BILINGUAL_COLLECTOR_NOT_PROVEN, TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### lv — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-lv` — https://www.letonika.lv/dictionary
- TARGET validator: `lv-tezaurs-simplified-entry` — https://valoda.lv/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://www.letonika.lv/dictionary
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### mk — NOT READY (targetOfficialValidation: false)
- Collector: `verbformen-de-mk` — https://www.verbformen.de/de-mk/
- TARGET validator: `mk-drmj-browser-entry` — https://imj.ukim.edu.mk/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://www.verbformen.de/de-mk/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### nb — READY (targetOfficialValidation: true)
- Collector: `manifest-nb` — https://deno.dict.cc/
- TARGET validator: `nb-ordbokene-browser-entry` — https://sprakradet.no/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://deno.dict.cc/

### nl — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-nl` — https://denl.dict.cc/
- TARGET validator: `nl-woordenlijst-browser-entry` — https://taalunie.org/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://denl.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### nn — NOT READY (targetOfficialValidation: false)
- Collector: `langenscheidt-de-nn` — https://en.langenscheidt.com/german-norwegian/
- TARGET validator: `nn-ordbokene-browser-entry` — https://sprakradet.no/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://en.langenscheidt.com/german-norwegian/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### pl — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-pl` — https://depl.dict.cc/
- TARGET validator: `pl-wsjp-browser-entry` — https://rjp.pan.pl/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://depl.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### pt — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-pt` — https://dept.dict.cc/
- TARGET validator: `pt-acl-browser-entry` — https://www.acad-ciencias.pt/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://dept.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### ro — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-ro` — https://dero.dict.cc/
- TARGET validator: `ro-doom-browser-entry` — https://acad.ro/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://dero.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### ru — READY (targetOfficialValidation: true)
- Collector: `manifest-ru` — https://deru.dict.cc/
- TARGET validator: `ru-orfo-browser-entry` — https://ruslang.ru/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://deru.dict.cc/

### sk — READY (targetOfficialValidation: true)
- Collector: `manifest-sk` — https://desk.dict.cc/
- TARGET validator: `sk-juls-browser-entry` — https://www.juls.savba.sk/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://desk.dict.cc/

### sl — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-sl` — https://en.langenscheidt.com/german-slovenian
- TARGET validator: `sl-fran-entry` — https://www.zrc-sazu.si/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://en.langenscheidt.com/german-slovenian
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### sq — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-sq` — https://desq.dict.cc/
- TARGET validator: `sq-akad-no-entry` — https://akad.gov.al/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://desq.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### sr — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-sr` — https://desr.dict.cc/
- TARGET validator: `sr-isj-no-entry` — https://www.isj.sanu.ac.rs/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://desr.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

### sv — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-sv` — https://desv.dict.cc/
- TARGET validator: `sv-svenska-browser-entry` — https://www.svenskaakademien.se/
- Haus positive regression: FAIL — verdict **NEEDS_SOURCE_REVIEW**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://desv.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

### tr — READY (targetOfficialValidation: true)
- Collector: `manifest-tr` — https://detr.dict.cc/
- TARGET validator: `tr-tdk-gts-entry` — https://tdk.gov.tr/
- Haus positive regression: PASS — verdict **TRANSLATION_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://detr.dict.cc/

### uk — NOT READY (targetOfficialValidation: false)
- Collector: `manifest-uk` — https://deuk.dict.cc/
- TARGET validator: `uk-dictua-browser-entry` — https://iul-nasu.org.ua/
- Haus positive regression: FAIL — verdict **TARGET_OFFICIAL_NOT_VALIDATED**
- DE URL: https://www.dwds.de/wb/Haus
- Dictionary: https://deuk.dict.cc/
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

