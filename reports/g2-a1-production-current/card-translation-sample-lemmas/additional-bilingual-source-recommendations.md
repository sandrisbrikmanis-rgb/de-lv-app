# G2/A1 — papildu divvalodu avoti (38 `needsAdditionalBilingualSource` rindas)

**Avots:** `sample-lemmas-32lang-audit.json` (pilots 16×32, ģenerēts `2026-09-25`, commit `05079521`)  
**Politika:** aizliegtie avoti — `card-translation-forbidden-sources.js` (Google/DeepL/Reverso/Linguee u.c.)  
**Nav gatavības apgalvojums:** šis ir tikai OWNER pētniecības / reģistra ieteikumu dokuments (nav `audit-post-run` + verify).

## Kopsavilkums

| Valoda | Rindu skaits | Kas jau mēģināts (katalogs) | Galvenais trūkums |
|--------|--------------|-----------------------------|-------------------|
| **sq** | 9 | desq.dict.cc, Langenscheidt, bab.la, Glosbe | **verbformen**, **de-sq.dict.cc** nav ķēdē |
| **bs** | 8 | bsde.dict.cc, Langenscheidt, bab.la, Glosbe | **verbformen**, **de-bs.dict.cc** nav ķēdē |
| **et** | 6 | Glosbe (primārs), Langenscheidt, bab.la, Keelevara (sub.) | **verbformen de-et** nav ķēdē |
| **uk** | 5 | deuk.dict.cc, Langenscheidt, bab.la, Glosbe | **verbformen de-uk**, **de-uk.dict.cc**; UDEW — vājš tīkls |
| **nn** | 4 | Langenscheidt (rescan primārs), Glosbe | Nav īsta **DE→nynorsk** avota |
| **lt** | 3 | vokieciu-lietuviu, zodynai, Langenscheidt, bab.la, Glosbe | B2 salikteņi; **LiVoLi**, **lietuviu-vokieciu.com** nav |
| **sk** | 3 | desk.dict.cc, Langenscheidt, bab.la, Glosbe | **verbformen de-sk**, **de-sk.dict.cc** nav ķēdē |

**Kopā:** 38 rindas, **10 unikālas** DE lemmas: Besucher, stinken, Kleingeld, aufkommen, bewirten, Attacke, glotzen, Goldader, Grenzkonflikt, Machtgier.

### Galvenais secinājums

1. **Rescan-6 avoti jau ir apstiprināti ar live pilotiem** (`german-target-dictionary-rescan-6.md`: bs/et/sq → verbformen `DICTIONARY_READY`), bet **`card-translation-catalog-collector.js` tos neiekļauj** — tikai manifest + `alternative-catalog` (līdz 5–6 avotiem).
2. Daudzām rindām **lapa atbild 200**, bet pilots dod `extractedCount: 0` (piem. bs `Goldader` — visi 5 avoti tukši). Tas ir **parsera / renderējuma** jautājums, ne vien “nav URL”.
3. **nn:** Langenscheidt `german-norwegian` nav nynorsk-specifisks; ieteicams **[DinOrdbok Tysk–Nynorsk](https://www.dinordbok.no/tysk-nynorsk/)**.
4. **lt B2 salikteņi:** maza pārklājuma institucionālie avoti (LiVoLi ~4k ierakstu) + reverse portāls.

---

## Ieteicamie papildu avoti (prioritāte)

### Vispārīgi (vairākām valodām)

| Prioritāte | Avots | Valodas | URL | Tips | Ekstraktors | Rescan / probe |
|------------|-------|---------|-----|------|-------------|----------------|
| **P1** | Netzverb verbformen | bs, sq, et, sk, uk | `https://www.verbformen.de/de-{bs\|sq\|et\|sk\|uk}/?w=` | Agregēts kopienas leksikons | Jā (`extractVerbformen`) | Rescan-6: bs/sq/et **READY**; HTTP 2026-09-26: **10/10** lemmām 200 |
| **P2** | dict.cc spogulis DE→TARGET | bs, sq, sk, uk | `de-bs`, `de-sq`, `de-sk`, `de-uk`.dict.cc | dict.cc | dict.cc parsers | HTTP 200 visām 10 lemmām |
| **P3** | dicts.info DE–SQ | sq | [dicts.info](https://www.dicts.info/dictionary.php?l1=german&l2=albanian) | Statisks indekss | Jā | Rescan: **NOT_FOUND** — tikai rezerve |

### nn (nynorsk)

| Prioritāte | Avots | URL | Piezīmes |
|------------|-------|-----|----------|
| **P1** | **DinOrdbok Tysk–Nynorsk** | https://www.dinordbok.no/tysk-nynorsk/ | ~34k tulkojumi; **nav** https://www.dinordbok.no/tysk-norsk/ (bokmål). HTTP 200: Attacke, Goldader, Grenzkonflikt, Machtgier. **Jauns adapteris.** |
| P2 | verbformen de-no | https://www.verbformen.de/de-no/ | Norvēģu vispār — zemāka prioritāte nn appLang |

### lt (lietuviešu)

| Prioritāte | Avots | URL | Piezīmes |
|------------|-------|-----|----------|
| **P1** | lietuviu-vokieciu.com (reverse) | http://www.lietuviu-vokieciu.com/ | HTTP 200 B2 salikteņiem; līdzīgs primārajam portālam |
| **P2** | **LiVoLi (VU)** | http://www.livoli.flf.vu.lt/ | Institucionāls ~4k; dinamiska meklēšana — **nevis** vienkāršs `?q=` URL |
| P3 | Glosbe de/lt | jau ķēdē | Rescan lt #1 ar Haus — pārbaudīt salikteņu parseri |

**Neizmantot lt:** `verbformen.de/de-lt` un `verbformen.com/de-lt` — **404** (2026-09-26).

### uk (papildus)

| Avots | URL | Piezīmes |
|-------|-----|----------|
| UDEW Leipzig | https://udew.uni-leipzig.de/udew/en/deutsch_ukrainisch_online.htm | Ekstraktors `extractUdek` pastāv; rescan **FAILED**; VM fetch nestabils — vajag Playwright pilotu |
| Multitran | https://www.multitran.com/dictionary/german-ukrainian | Tikai pēc OWNER redakcionālās klases apstiprinājuma |

### et (papildus)

| Avots | Piezīmes |
|-------|----------|
| Keelevara TEA | Jau kā **subscriptionReferenceOnly** — nepalielina publisko coverage |
| verbformen de-et | **P1** — jāievada ķēdē |

---

## Izslēgtie / nepiemērotie avoti

- **Linguee, Reverso, Google Translate, DeepL** — aizliegti kā tulkojuma autoritāte.
- **bab.la** — Reverso tīkls; paliek zema prioritāte (jau ķēdē, bieži `NOT_FOUND`).
- **slovnik.cz** — DE–**čeština**, ne slovensk.
- **MT / “automatic translation only”** Glosbe sadaļas — jau filtrē `isGlosbeAutomaticOnly`.
- **Suomisanakirja / Satzübersetzer** utt. — frāžu MT, ne vārdnīcas autoritāte.

---

## Krusteniskā tabula — 38 rindas

| DE lemma | sq | bs | et | uk | nn | lt | sk |
|----------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Besucher (a1) | ✓ | | | | | | |
| stinken (a2) | ✓ | ✓ | | | | | |
| Kleingeld (a2) | ✓ | ✓ | ✓ | | | | |
| aufkommen (a2) | ✓ | ✓ | | ✓ | | | |
| bewirten (b1) | ✓ | ✓ | ✓ | ✓ | | | |
| Attacke (b1) | | ✓ | | | ✓ | | |
| glotzen (b2) | ✓ | ✓ | ✓ | | | | |
| Goldader (b2) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Grenzkonflikt (b2) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Machtgier (b2) | ✓ | | ✓ | ✓ | ✓ | ✓ | ✓ |

✓ = šai valodai rinda ir `needsAdditionalBilingualSource: true`.

---

## Ieteicamā ieviešanas secība (pēc OWNER apstiprinājuma)

1. **`orderedDictionaryCandidatesForLang`:** pievienot `german-target-dictionary-rescan-6-candidates.json` kandidātus valodām bs, et, sq, uk (un jaunam failam — sk).
2. **Primārie spoguļi:** `de-bs`, `de-sq`, `de-uk`, `de-sk` dict.cc pirms/atlasot `bsde`/`desq`/`deuk`/`desk`, ja primārais dod tukšu ekstraktu.
3. **nn:** reģistrēt DinOrdbok; apsvērt `RESCAN_PLATFORM_BY_LANG.nn` maiņu no `langenscheidt`.
4. **lt:** reverse portāls + LiVoLi adapteris (atsevišķi no vokieciu-lietuviu).
5. **Atkārtot pilotu:** `node scripts/run-g2-a1-card-translation-sample-lemmas-32lang.js` — mērīt `needsAdditionalBilingualSource` un NSR ar CURRENT.
6. **Salikteņi:** ja pēc P1–P4 joprojām tukši — atsevišķa OWNER politika par DE komponentu meklēšanu (DWDS), nevis MT.

---

## Pierādījumi

- Strukturēts JSON: [`additional-bilingual-source-recommendations.json`](./additional-bilingual-source-recommendations.json)
- Esošs rescan: [`../german-target-dictionary-rescan-6/german-target-dictionary-rescan-6.md`](../german-target-dictionary-rescan-6/german-target-dictionary-rescan-6.md)
- Kandidātu fails: [`../../../scripts/lib/data/german-target-dictionary-rescan-6-candidates.json`](../../../scripts/lib/data/german-target-dictionary-rescan-6-candidates.json)
- HTTP probe (2026-09-26): verbformen de-bs/sq/et/sk/uk — 10/10 lemmām 200; de-bs/de-sq/de-sk — 10/10; DinOrdbok nn — 4/4 B2; verbformen de-lt — 404.

**PR #843:** pēc commit — pievienot šo atskaiti review materiāliem (bez automātiskas 32/32 gatavības).
