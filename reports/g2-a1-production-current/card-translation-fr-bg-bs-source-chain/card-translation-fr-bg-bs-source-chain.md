# G2/A1 kartīšu tulkojums — fr / bg / bs audita avotu ķēde

- **Ģenerēts:** 2026-10-01T17:08:57.912Z
- **Avotu reģistrs:** `scripts/lib/data/g2-a1-card-translation-bilingual-audit-fr-bg-bs.json`
- **Pilot verifikācija:** `reports/g2-a1-production-current/pdf-bilingual-dictionary-bg-bs-fr-pilot-verify/pdf-bilingual-dictionary-bg-bs-fr-pilot-verify.json`
- **Production / OWNER / MASTER mainīti:** nē

## Kopsavilkums

| Valoda | Jaunais audita avots | Statuss |
|--------|----------------------|---------|
| **fr** | Sachs–Villatte 1906 (primārais); Mozin/Biber tikai rezerve | sachs-villatte-1906 |
| **bg** | Miladinov vol. I DE→BG; vol. II HathiTrust + MultiSlavDict BG→DE | mdz-bsb-miladinov-vol1-1897 + reverse chain |
| **bs** | — | **NOT_FOUND_DIGITIZED** (nav derīga digitizēta DE↔BS vārdnīca) |

## Audita secība
1. Meklē tiešo pāri DE→TARGET primārajā digitizētajā vārdnīcā (OCR vai skenētas lapas).
2. Ja nav, meklē TARGET→DE otrajā ķēdes posmā (atsevišķa vārdnīca vai pretējais virziens, ja abi ir dokumentēti).
3. Rezerves / papildavotus izmanto tikai tad, ja primārais posms nedod derīgu pāri (fr: Mozin/Biber; bg: MultiSlavDict).
4. Pārbaudi vārdšķiru un konkrētās kartītes vācu nozīmi; citai nozīmei piederošu ekvivalentu nepieņem.
5. Automātiskos tulkotājus, dict.cc, drukātu grāmatu veikalu lapas un hr/sr vārdnīcas neizmanto kā pierādījumu.
6. Saglabā avota nosaukumu, virzienu, atrasto pāri un precīzo viewer / OCR / lapas URL.

## FR — FR_DIGITIZED_SOURCES_REGISTERED

> **Jaunie avoti:** reģistrēti audita katalogā un dokumentēti šajā atskaitē.

### Primārie digitizētie avoti
- **Sachs–Villatte enzyklopädisches französisch-deutsches und deutsch-französisches Wörterbuch (1906)** (de↔fr): https://archive.org/details/sachsvillatteenz00sachuoft

### Rezerves avoti
- Neues vollständiges Wörterbuch (Mozin, Biber, Hölder) 1823–1828 (reserve_only)

### Avotu secība
- primaryDigitized:de↔fr (sachs-villatte-1906 — IA PDF + _djvu.txt OCR)
- supplementaryReserve:mozin-biber-1823 (only if primary fails)
- targetOfficial:larousse-fr

### Regresija (pilot OCR / skenējums)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 1 | Sachs–Villatte 1906 (IA OCR) | FOUND_IN_OCR | [link](https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt) |
| arbeiten | 1 | Sachs–Villatte 1906 (IA OCR) | FOUND_IN_OCR | [link](https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt) |
| Kleingeld | 1 | Sachs–Villatte 1906 (IA OCR) | NOT_FOUND | [link](https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt) |
| bewirten | 1 | Sachs–Villatte 1906 (IA OCR) | FOUND_IN_OCR | [link](https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt) |
| Grenzkonflikt | 1 | Sachs–Villatte 1906 (IA OCR) | NOT_FOUND | [link](https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt) |
| Machtgier | 1 | Sachs–Villatte 1906 (IA OCR) | NOT_FOUND | [link](https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt) |
| (reverse) Maison | 1 | Sachs–Villatte 1906 (IA OCR) | Maison → DE attested | [link](https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt) |

## BG — BG_DIGITIZED_SOURCES_REGISTERED

> **Jaunie avoti:** reģistrēti audita katalogā un dokumentēti šajā atskaitē.

### Primārie digitizētie avoti
- **Miladinov vol. I — Deutsch-Bulgarisches Wörterbuch (1897), BSB/MDZ** (de→bg): https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1

### BG→DE ķēde (otrais posms)
- **Miladinov vol. II — Bulgarisch-Deutsches (Pŭlen bŭlgarsko-němski)** [primary_reverse]: https://babel.hathitrust.org/cgi/pt?id=harvard.32044086444973
- **MultiSlavDict — Miladinov BG→DE (1927)** [supplement_reserve]: https://slavistik-portal.de/en/dicthub/dict-milad.html

### Avotu secība
- primaryDigitized:de→bg (mdz-bsb-miladinov-vol1-1897)
- reverseChainDigitized:bg→de (hathitrust-miladinov-vol2 — prioritāri)
- reverseChainDigitized:bg→de (multislavdict-miladinov-1927 — papildinājums/rezerve)
- targetOfficial:ibl-bg

### Regresija (pilot OCR / skenējums)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 1 | Miladinov vol. I MDZ/BSB (IIIF OCR sample) | FOUND_IN_SCAN_SAMPLE | [link](https://www.digitale-sammlungen.de/de/view/bsb11814571?page=120) |
| arbeiten | 1 | Miladinov vol. I MDZ/BSB (IIIF OCR sample) | FOUND_IN_SCAN_SAMPLE | [link](https://www.digitale-sammlungen.de/de/view/bsb11814571?page=280) |
| Kleingeld | 1 | Miladinov vol. I MDZ/BSB (IIIF OCR sample) | NOT_FOUND | [link](https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1) |
| bewirten | 1 | Miladinov vol. I MDZ/BSB (IIIF OCR sample) | NOT_FOUND | [link](https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1) |
| Grenzkonflikt | 1 | Miladinov vol. I MDZ/BSB (IIIF OCR sample) | NOT_FOUND | [link](https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1) |
| Machtgier | 1 | Miladinov vol. I MDZ/BSB (IIIF OCR sample) | NOT_FOUND | [link](https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1) |
| (reverse) къща | 2 | Vol. II HathiTrust / MultiSlavDict (chain — not pilot-checked) | NOT_FOUND | [link](https://babel.hathitrust.org/cgi/pt?id=harvard.32044086444973) |

## BS — BS_NOT_FOUND_DIGITIZED

- **Digitizācijas audits:** `NOT_FOUND_DIGITIZED`
### Primārie digitizētie avoti

### Noraidīti (nav audita avoti)
- Vukić drukātās vārdnīcas: Fiziski nopērkamas grāmatas — nav digitizēta audita avota.
- Marojević: Drukāts avots / nav verificēta digitizācija.
- bookstore.ba / knjiga.ba / Amazon fizisko grāmatu lapas: Veikalu katalogi nav vārdnīcas pierādījums.
- Horvātu vai serbu vārdnīcas (DE↔HR/SR): hr/sr ≠ bs — neaizstāj bosniešu valodas DE↔BS pāri.
- dict.cc Deutsch–Bosnisch: Nav derīgs šī audita ķēdes avots (kā norādīts prasībās).

### Avotu secība
- digitizedAuditStatus:NOT_FOUND_DIGITIZED — nav reģistrēta derīga digitizēta DE↔BS vārdnīca

### Regresija (pilot OCR / skenējums)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 0 | — | NOT_FOUND | — |
| arbeiten | 0 | — | NOT_FOUND | — |
| Kleingeld | 0 | — | NOT_FOUND | — |
| bewirten | 0 | — | NOT_FOUND | — |
| Grenzkonflikt | 0 | — | NOT_FOUND | — |
| Machtgier | 0 | — | NOT_FOUND | — |

