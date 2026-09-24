# G2/A1 — OWNER priekšapstiprinājums: vācu–TARGET vārdnīcas (32 + DE atsevišķi)

## 1. TARGET valodu koda komplekts (32)

Verifikācija: **PASS**

```
bg, bs, cs, da, en, es, et, fi, fr, gr, hr, hu, is, it, lb, lt, lv, mk, nb, nl, nn, pl, pt, ro, ru, sk, sl, sq, sr, sv, tr, uk
```

- `de` **nav** TARGET sarakstā
- `nb` un `nn` atsevišķi
- `gr` → standarta kods `el`

## 2. Avota valoda DE (atsevišķi)

| Lauks | Vērtība |
|-------|---------|
| appCode | `de` |
| PRIMARY | Duden + DWDS (lexicon / usage) |
| URL | https://www.duden.de/; https://www.dwds.de/ |
| Piezīme | Vācu (de) ir audita avota valoda; nav viens no 32 TARGET locales. |

## 3. Ieteicamās izmaiņas MASTER (25) — OWNER `PENDING`

Katram ieteiktajam avotam norādīts **ieraksta tips** (cilvēku rediģēts vs kopiena/automātika).

| Valoda | std | MASTER URL | Ieteicamais URL | Platforma | Klase | Redakcionālais tips | Haus | abholen | Route | Getriebe | Auto brīdinājums |
|--------|-----|------------|-----------------|-----------|-------|---------------------|------|---------|-------|----------|-------------------|
| bg | bg | https://bgde.dict.cc/ | https://en.pons.com/translate/german-bulgarian | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| bs | bs | https://bsde.dict.cc/ | https://glosbe.com/de/bs | glosbe | E | COMMUNITY_LEXICON_GLOSBE | FOUND | FOUND | FOUND | NOT_FOUND | — |
| cs | cs | https://csde.dict.cc/ | https://en.pons.com/translate/german-czech | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| da | da | https://dade.dict.cc/ | https://en.pons.com/translate/german-danish | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| en | en | https://www.dict.cc/ | https://en.pons.com/translate/german-english | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| es | es | https://dees.dict.cc/ | https://en.pons.com/translate/german-spanish | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| et | et | https://www.keelevara.ee/ | https://glosbe.com/de/et | glosbe | E | COMMUNITY_LEXICON_GLOSBE | FOUND | AUTOMATIC_TRANSLATION_ONLY | FOUND | NOT_FOUND | abholen |
| fi | fi | https://defi.dict.cc/ | https://en.pons.com/translate/german-finnish | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| fr | fr | https://defr.dict.cc/ | https://en.pons.com/translate/german-french | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| gr | el | https://deel.dict.cc/ | https://en.pons.com/translate/german-greek | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| hr | hr | https://dehr.dict.cc/ | https://en.pons.com/translate/german-croatian | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| hu | hu | https://dehu.dict.cc/ | https://en.pons.com/translate/german-hungarian | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| is | is | https://deis.dict.cc/ | https://en.pons.com/translate/german-icelandic | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| it | it | https://deit.dict.cc/ | https://en.pons.com/translate/german-italian | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| lb | lb | https://lod.lu/ | https://glosbe.com/de/lb | glosbe | E | COMMUNITY_LEXICON_GLOSBE | FOUND | AUTOMATIC_TRANSLATION_ONLY | FOUND | NOT_FOUND | abholen |
| lt | lt | https://www.zodynai.org/ | https://glosbe.com/de/lt | glosbe | E | COMMUNITY_LEXICON_GLOSBE | FOUND | FOUND | FOUND | FOUND | — |
| nl | nl | https://denl.dict.cc/ | https://en.pons.com/translate/german-dutch | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| nn | nn | https://glosbe.com/de/nn | https://en.langenscheidt.com/german-norwegian | langenscheidt | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| pl | pl | https://depl.dict.cc/ | https://en.pons.com/translate/german-polish | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| sk | sk | https://desk.dict.cc/ | https://en.langenscheidt.com/german-slovak | langenscheidt | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| sq | sq | https://desq.dict.cc/ | https://glosbe.com/de/sq | glosbe | E | COMMUNITY_LEXICON_GLOSBE | FOUND | AUTOMATIC_TRANSLATION_ONLY | FOUND | NOT_FOUND | abholen |
| sr | sr | https://desr.dict.cc/ | https://en.pons.com/translate/german-serbian | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| sv | sv | https://desv.dict.cc/ | https://en.pons.com/translate/german-swedish | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| tr | tr | https://detr.dict.cc/ | https://en.pons.com/translate/german-turkish | pons | B | HUMAN_EDITED_PROFESSIONAL | FOUND | FOUND | FOUND | FOUND | — |
| uk | uk | https://deuk.dict.cc/ | https://glosbe.com/de/uk | glosbe | E | COMMUNITY_LEXICON_GLOSBE | FOUND | FOUND | FOUND | FOUND | — |

## 4. Redakcionālo tipu skaidrojums

| `entryEditorialType` | Nozīme |
|------------------------|--------|
| HUMAN_EDITED_PROFESSIONAL | Cilvēku rediģēta komerciāla/institucionāla vārdnīca (PONS, Langenscheidt, LEO, bab.la) |
| INSTITUTIONAL_PROFESSIONAL | Valsts/akadēmiska vārdnīca |
| COMMUNITY_DICTIONARY_DICT_CC | dict.cc — kopienas ieraksti (klase E) |
| COMMUNITY_LEXICON_GLOSBE | Glosbe vārdnīcas sadaļa — kopiena; automātiskie tulkojumi atdalīti |
| AUTOMATIC_TRANSLATION_NOT_DICTIONARY | Nedrīkst lietot — pierādījums tikai no automātiskās sadaļas |

**OWNER lēmums:** aizpildīt `ownerDecision` CSV/JSON pēc pārbaudes. Šajā piegājienā nav piešķirts LABOT/NELABOT.

