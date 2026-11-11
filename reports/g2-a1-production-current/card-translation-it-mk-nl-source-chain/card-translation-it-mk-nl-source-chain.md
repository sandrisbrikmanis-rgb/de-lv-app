# G2/A1 kartīšu tulkojums — it / mk / nl audita avotu ķēde

- **Ģenerēts:** 2026-10-02T18:09:05.057Z
- **Avotu reģistrs:** `scripts/lib/data/g2-a1-card-translation-bilingual-audit-it-mk-nl.json`
- **Pilot verifikācija:** `reports/g2-a1-production-current/pdf-bilingual-dictionary-it-mk-nl-pilot-verify/pdf-bilingual-dictionary-it-mk-nl-pilot-verify.json`
- **Discovery:** `reports/g2-a1-production-current/pdf-bilingual-dictionary-it-mk-nl-discovery/pdf-bilingual-dictionary-it-mk-nl-discovery.json`
- **Production / OWNER / MASTER mainīti:** nē

## Kopsavilkums

| Valoda | Audita ķēde | Gala statuss |
|--------|-------------|--------------|
| **it** | BSB 11793257 + MDZ IIIF + IA PDF/OCR | **IT_DIGITIZED_SOURCES_REGISTERED_READY** |
| **nl** | Nieuw Woordenboek 1787 (3 daļas, MDZ IIIF + IA) | **NL_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |
| **mk** | — (nav primary) | **MK_NOT_FOUND_DIGITIZED** |

## Pilot (īss)

- **it:** Haus, arbeiten, Kleingeld, bewirten ✅; reverse **casa** ✅; MDZ IIIF ✅
- **nl:** Haus, arbeiten ✅; **Klein geld** variants; reverse **Huis** ✅
- **mk:** nav primary avota — discovery evidence tikai

## Audita secība
1. Meklē tiešo pāri DE→TARGET primārajā digitizētajā vārdnīcā (MDZ IIIF lapas, IA PDF vai OCR).
2. Ja nepieciešams, izmanto TARGET→DE tajā pašā divvirzienu darbā vai otrā sējumā.
3. Papildu/reserves avotus (it: Bull IA, 11645915/16) izmanto tikai ja primārais 11793257 posms nedod pāri.
4. Pārbaudi vārdšķiru un konkrētās kartītes vācu nozīmi; citai nozīmei piederošu ekvivalentu nepieņem.
5. Automātiskos tulkotājus, dict.cc un bg kā mk aizstājējus neizmanto kā pierādījumu.
6. Saglabā avota nosaukumu, virzienu, atrasto pāri un precīzo viewer / IIIF / OCR URL.

## IT — IT_DIGITIZED_SOURCES_REGISTERED_READY

> **Jaunie avoti:** reģistrēti audita katalogā.

- **Digitizācijas audits:** `READY`
### Primārie digitizētie avoti
- **Neues italienisch-deutsches und deutsch-italienisches Wörterbuch. 1 (BSB 11793257)** (de↔it): https://www.digitale-sammlungen.de/de/view/bsb11793257?page=1

### Papildu / rezerves avoti
- Neues italienisch-deutsches Wörterbuch vol. 1 (Bull IA) [supplement_reserve]
- Neues italienisch-deutsches Wörterbuch vol. 2 (Bull IA) [supplement_reserve]
- Neues vollständiges italienisch-deutsches Wörterbuch (11645915/16 BSB) [supplement_reserve]

### Avotu secība
- primaryDigitized:de↔it (ia-bsb-neues-it-de-11793257-vol1 — MDZ IIIF + IA PDF/OCR)
- supplementaryReserve:ia-neuesitalienisch00bulluoft-vol1
- supplementaryReserve:ia-neuesitalienisch02bulluoft
- supplementaryReserve:ia-bsb-neues-vollstaendig-it-de-vol1-2 (only if primary fails)

### Regresija (pilot)
| Lemma | Solis | Avots | Pāris |
| --- | --- | --- | --- |
| Haus | 1 | BSB 11793257 vol. 1 (IA OCR) | FOUND_IN_OCR |
| arbeiten | 1 | BSB 11793257 vol. 1 (IA OCR) | FOUND_IN_OCR |
| Kleingeld | 1 | BSB 11793257 vol. 1 (IA OCR) | FOUND_IN_OCR |
| bewirten | 1 | BSB 11793257 vol. 1 (IA OCR) | FOUND_IN_OCR |
| Grenzkonflikt | 1 | BSB 11793257 vol. 1 (IA OCR) | NOT_FOUND |
| Machtgier | 1 | BSB 11793257 vol. 1 (IA OCR) | NOT_FOUND |
| (reverse) casa | 1 | BSB 11793257 vol. 1 (IA OCR) | casa attested |

## MK — MK_NOT_FOUND_DIGITIZED

- **Digitizācijas audits:** `MK_NOT_FOUND_DIGITIZED`

### Discovery evidence (nav primary audit)
- makedonisch.info web lexicon: Documented in discovery; NOT_VERIFIED_AUTOMATION in pilot — not registered as primary.
- Ivanovska & Belčev 2012 e-lib: discovery_metadata_only
- Milošev 2004 print: discovery_print_only

### Avotu secība
- digitizedAuditStatus:MK_NOT_FOUND_DIGITIZED — no primary audit chain registered

### Regresija (pilot)
| Lemma | Solis | Avots | Pāris |
| --- | --- | --- | --- |
| Haus | 0 | — | NOT_FOUND |
| arbeiten | 0 | — | NOT_FOUND |
| Kleingeld | 0 | — | NOT_FOUND |
| bewirten | 0 | — | NOT_FOUND |
| Grenzkonflikt | 0 | — | NOT_FOUND |
| Machtgier | 0 | — | NOT_FOUND |

## NL — NL_DIGITIZED_SOURCES_REGISTERED_PARTIAL

> **Jaunie avoti:** reģistrēti audita katalogā.

- **Digitizācijas audits:** `PARTIAL`
### Primārie digitizētie avoti
- **Nieuw Woordenboek der Nederlandsche en Hoogduitsche Taal (1787, 3 BSB parts)** (nl↔de): https://www.digitale-sammlungen.de/de/view/bsb10523039?page=1

### Avotu secība
- primaryDigitized:nl↔de (ia-bsb-nieuw-woordenboek-nl-hoogduits-1787-3parts — MDZ IIIF + 3× IA OCR)

### Regresija (pilot)
| Lemma | Solis | Avots | Pāris |
| --- | --- | --- | --- |
| Haus | 1 | Nieuw Woordenboek 1787 (3× IA OCR) | FOUND_IN_OCR |
| arbeiten | 1 | Nieuw Woordenboek 1787 (3× IA OCR) | FOUND_IN_OCR |
| Kleingeld | 1 | Nieuw Woordenboek 1787 (3× IA OCR) | NOT_FOUND |
| bewirten | 1 | Nieuw Woordenboek 1787 (3× IA OCR) | NOT_FOUND |
| Grenzkonflikt | 1 | Nieuw Woordenboek 1787 (3× IA OCR) | NOT_FOUND |
| Machtgier | 1 | Nieuw Woordenboek 1787 (3× IA OCR) | NOT_FOUND |
| (reverse) Huis | 1 | Nieuw Woordenboek 1787 (3× IA OCR) | Huis attested |

