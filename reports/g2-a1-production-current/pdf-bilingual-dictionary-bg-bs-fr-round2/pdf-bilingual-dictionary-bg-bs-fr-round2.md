# PDF bilingual dictionary discovery — round 2 (`bg`, `bs`, `fr`)

Generated: 2026-09-30T15:13:20.794Z

Pilotlemmas (DE): **Haus, arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier**.

## BEST_FOUND_SOURCE (kopsavilkums)

| Lang | ID | Pamatojums |
|------|-----|------------|
| **fr** | `sachs-villatte-1906` | Atvērts IA PDF (~2140 lp.), abpusējs enciklopēdisks DE↔FR vienā sējumā, OCR `_djvu.txt` (~22 MB) ar pilotiem `arbeiten`, `bewirten`; jaunāks un platāks par Mozin 1823–1828. |
| **bg** | `miladinov-institutional-pair` | Round 2 nav apstiprinājis **pilnībā atvēru** modernu DE↔BG PDF: Stameva 2004 IA ir LCP/Borrow (PDF nav `%PDF`, OCR 172 B). Labākais **leksikons** joprojām Miladinov (NSI vol.I DE→BG + HathiTrust/NSI vol.II BG→DE), bet PDF šajā vidē nav atvērts (Cloudflare/Hathi bot siena). MultiSlavDict 1927 ir meklējams, bet nav PDF. |
| **bs** | `NOT_FOUND_DIGITIZED` | Nav digitizēta DE↔BS vārdnīca. Vukić u.c. ir **tikai nopērkamas fiziskas grāmatas** — ne audit avots. |

## fr

| Title | Year | Direction | PDF | Opens | OCR/search | Scope | vs round-1 |
|---|---|---|---|---|---|---|---|
| Sachs-Villatte enzyklopädisches französisch-deutsches und deutsch-franzö… | 1906 | DE↔FR (abi virzieni vienā darbā) | [PDF](https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft.pdf) | **yes** | yes (~22M text); pilots: Haus, arbeiten, bewirten | ~2140 pp (IA jp2 filecount); encyklopädisch | true |
| Grand dictionnaire français-allemand et allemand-français (Birm et al.) … | 1884 | DE↔FR (2 vol.) | [PDF](https://archive.org/download/granddictionnair01birm/granddictionnair01birm.pdf) | **yes** | yes (~15M text); pilots: Haus, arbeiten | ~1186 pp vol. 1 on IA | true |
| Grand Dictionnaire Allemand-Francais et Francais-Allemand… | 1972 | DE↔FR | [PDF](https://archive.org/download/bwb_S0-DGA-173/bwb_S0-DGA-173.pdf) | **no** | yes (~0M text); pilots: — | 20th-c. full dictionary (publisher scan) | scope yes; access no (LCP) |
| Neues vollständiges Wörterbuch (Mozin, Biber, Hölder) — round-1 baseline… | 1823–1828 | DE→FR A–K + FR→DE vol.1 (atsevišķi IA PDF) | [PDF](https://archive.org/download/bub_gb_qCwCncvvUEYC/bub_gb_qCwCncvvUEYC.pdf) | **yes** | yes (~8M text); pilots: Haus, arbeiten, bewirten | Multi-volume; IA pilots used A–K DE part + FR vol.1 | false |

## bg

| Title | Year | Direction | PDF | Opens | OCR/search | Scope | vs round-1 |
|---|---|---|---|---|---|---|---|
| Немско–български, български–немски речник / Wörterbuch Deutsch–Bulgarisc… | 2004 | DE↔BG (vienā sējumā) | [PDF](https://archive.org/download/nemskobalgarskib00stam/nemskobalgarskib00stam.pdf) | **no** | empty/short (172 B) | Modern school/university pocket dictionary (both directions) | lexicon modernity yes; open PDF no |
| Немско-български и българско-немски речник, I Немско-българска част… | 1893 | DE→BG (vol. 1) | [catalog](https://statlib.nsi.bg/bg/v/NSI010008337) | **no** | — | Vol. I DE→BG (institutional scan catalog) | same pair; still no open PDF in probe |
| Пълен българско-немски речник / Deutsch-bulgarisches und bulgarisch-deut… | 1893–1908 | BG→DE (vol. 2) | [catalog](https://catalog.hathitrust.org/Record/102751195) | **no** | — | 2-vol set; HT full view v.2 only | same pair |
| Bulgarisch-Deutsches Handwörterbuch / Българо-немски пъленъ речникъ… | 1927 | BG→DE (searchable DB, not PDF) | [catalog](https://slavistik-portal.de/en/dicthub/dict-milad.html) | **no** | searchable DB (not PDF OCR) | Full historical lexicon — digital text, not downloadable PDF | searchability yes; not PDF audit chain |
| Българо-немски пълен речник, Tom II, 3. dop. izd.… | 1929 | BG→DE | [catalog](https://statlib.nsi.bg/en/v/NSI010008318) | **no** | — | 984 pp (NSI catalog metadata) | newer BG→DE edition; PDF not probed open |

## bs

| Title | Year | Direction | PDF | Opens | OCR/search | Scope | vs round-1 |
|---|---|---|---|---|---|---|---|
| Njemačko-bosanski i bosansko-njemacki rječnik… | 2018 | DE↔BS (abi virzieni, drukāts) | [catalog](https://bookstore.ba/knjiga/njemacko-bosanski-i-bosansko-njemacki-rjecnik) | **no** | — | ~836 pp; skolu programam | best institutional monolingual pair; still no scan |
| Njemačko-bosanski i bosansko-njemacki rječnik (2. izd.)… | 1998 | DE↔BS | [catalog](https://katalog.ub.uni-heidelberg.de/titel/9900267) | **no** | — | 857 S. | library holding only |
| Bosansko-njemački frazeološki rječnik… | 2013 | Phraseological — not general DE↔BS | [PDF](https://idoc.pub/documents/bosansko-njemacki-frazeoloski-rjecnik-6nq8qyp3o1nw) | **no** | — | Frazeoloģija | false |
| Njemačko-hrvatski rječnik (Ante Kružić)… | null | DE↔HR (noraidīts kā bs proxy) | [PDF](https://archive.org/download/njemacko_hrvatski_rjecnik-ante_kruzic/njemacko_hrvatski_rjecnik-ante_kruzic.pdf) | **yes** | — | Open IA PDF — wrong target language | false |

## France — Sachs-Villatte vs Mozin (round-1)

- **Sachs-Villatte 1906:** viens IA PDF, DE↔FR, ~2140 lp., OCR meklējams; piloti `arbeiten`, `bewirten` atrasti OCR.
- **Mozin 1823:** joprojām derīgs baseline (Gallica/IA), bet šaurāks laiks un OCR biežāk neaptver jaunākos salikteņus (`Kleingeld`, `Grenzkonflikt`, `Machtgier` bieži nav).

## Bulgaria — atvērts PDF

- **Stameva 2004** IA: modernākais kandidāts pēc apjoma, bet **Borrow/LCP** — nav brīvi atvērams PDF auditam.
- **Miladinov** NSI + HathiTrust: pilna vēsturiskā pāris, PDF jāverificē ar cilvēka pārlūku / bibliotēkas VPN.

## Bosnia — DE↔BS

- Nav IA **njemačko-bosanski** vispārīgas vārdnīcas PDF.
- **Vukić 2018** — standarta BiH skolu/leksikons (836 lp.), bez digitāla skena.

