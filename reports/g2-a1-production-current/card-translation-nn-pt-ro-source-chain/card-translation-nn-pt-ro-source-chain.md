# G2/A1 kartīšu tulkojums — pt / ro / nn audita avotu ķēde

- **Ģenerēts:** 2026-10-03T10:06:07.367Z
- **Avotu reģistrs:** `scripts/lib/data/g2-a1-card-translation-bilingual-audit-nn-pt-ro.json`
- **Pilot verifikācija:** `reports/g2-a1-production-current/pdf-bilingual-dictionary-nn-pt-ro-pilot-verify/pdf-bilingual-dictionary-nn-pt-ro-pilot-verify.json`
- **Discovery:** `reports/g2-a1-production-current/pdf-bilingual-dictionary-nn-pt-ro-discovery/pdf-bilingual-dictionary-nn-pt-ro-discovery.json`
- **Production / OWNER / MASTER mainīti:** nē

## Kopsavilkums

| Valoda | Primārais stack | Statuss |
|--------|-----------------|--------|
| **pt** | Torchtrop 1943 (IA OCR) + Wagener / modern IA papildus | **PT_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |
| **ro** | Barcianu 1886 (bidir IA) + TDRG³ (solirom) | **RO_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |
| **nn** | Helms 11752747 + Kaper MDZ + Hanson; DinOrdbok tikai kontrolei | **NN_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |

## Pilot (6 DE lemmas)

- **pt:** 4/6 primārais Torchtrop; *Grenzkonflikt*, *Machtgier* nav
- **ro:** 4/6 Barcianu; TDRG³ 4/6 (cásă→Haus, lucrá→arbeiten, ban→Kleingeld, cinstí→bewirten)
- **nn:** 4/6 Helms/Kaper (vēsturisks dāņu–norv.); nav moderna nynorsk digitālā pāra

## Audita secība
1. Meklē tiešo pāri DE→TARGET primārajā digitizētajā vārdnīcā (IA OCR, MDZ hOCR/IIIF, institucionālais digitālais leksikons).
2. Ja nepieciešams, izmanto TARGET→DE tajā pašā divvirzienu darbā vai otrā reģistrētajā virzienā.
3. Papildu/reserves avotus izmanto tikai ja primārais posms nedod derīgu pāri.
4. Pārbaudi vārdšķiru un konkrētās kartītes vācu nozīmi; citai nozīmei piederošu ekvivalentu nepieņem.
5. Lietotāju papildinātos tīmekļa vārdnīcus (DinOrdbok u.c.) neizmanto kā galveno OWNER pierādījumu.
6. Saglabā avota nosaukumu, virzienu, atrasto pāri un precīzo viewer / OCR / meklējuma URL.

## PT — PT_DIGITIZED_SOURCES_REGISTERED_PARTIAL

### Primārie avoti
- **Dicionário Alemão–Português (Leonardo Torchtrop, 1943 / Globo)** (de→pt): https://archive.org/details/DICIONARIOALEMAOPORTUGUESLEONARDOTORCHTROP

## RO — RO_DIGITIZED_SOURCES_REGISTERED_PARTIAL

### Primārie avoti
- **Dicționar român-germân și germân-român (Barcianu, 1886)** (de↔ro): https://archive.org/details/wrterbuchderrom00barcgoog

### Institucionālie (mūsdienīgi)
- **Tiktin TDRG³ — Dicționar român-german (Miron / Lüder, 2000–2005)**: https://tdrg.solirom.ro/

## NN — NN_DIGITIZED_SOURCES_REGISTERED_PARTIAL

### Primārie avoti
- **Neues vollständiges Wörterbuch der dänisch-norwegischen und deutschen Sprache (Helms, BSB/IA 11752747)** (de↔no-historical): https://www.digitale-sammlungen.de/de/view/bsb11752747?page=1

### Institucionālie (mūsdienīgi)
- **SNORRE terminology wordlist (Språkbanken oai-nb-no-sbr-24 / Standard Norge)**: https://www.nb.no/sprakbanken/ressurskatalog/oai-nb-no-sbr-24/

### Tikai papildu kontrole (nav autoritatīvi)
- DinOrdbok Tysk–Nynorsk (crowd-sourced web): https://www.dinordbok.se/tysk-nynorsk/

