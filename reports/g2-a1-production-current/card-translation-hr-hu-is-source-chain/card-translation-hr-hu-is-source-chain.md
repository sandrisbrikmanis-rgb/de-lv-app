# G2/A1 kartīšu tulkojums — hr / hu / is audita avotu ķēde

- **Ģenerēts:** 2026-10-02T15:40:32.810Z
- **Avotu reģistrs:** `scripts/lib/data/g2-a1-card-translation-bilingual-audit-hr-hu-is.json`
- **Pilot verifikācija:** `reports/g2-a1-production-current/pdf-bilingual-dictionary-hr-hu-is-pilot-verify/pdf-bilingual-dictionary-hr-hu-is-pilot-verify.json`
- **Production / OWNER / MASTER mainīti:** nē

## Kopsavilkums

| Valoda | Audita ķēde | Gala statuss |
|--------|-------------|--------------|
| **hr** | Šulek DE→HR (MDZ I–II) + Filipović 1875 HR→DE A–O | **HR_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |
| **hu** | MEK 24482 DE→HU + MEK 00072 DE↔HU; REAL-EOD papild. | **HU_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |
| **is** | — (nav audit-ready digitizācijas) | **IS_NOT_VERIFIED_DIGITIZED** |

## Avotu prioritāte un pilot (īss)

- **hr:** DE→HR izmantojams (Šulek); HR→DE nepilns A–O; pilot **3/6** + reverse **kuća**.
- **hu:** MEK 24482 atvērts PDF; MEK 00072 meklējams DE↔HU; pilot **4/6** + **Haus→ház**.
- **is:** LEXÍA nav pipeline-verificēta; pilns DE↔IS PDF nav — **nav reģistrēts** kā gatavs avots.

## Audita secība
1. Meklē tiešo pāri DE→TARGET primārajā digitizētajā vārdnīcā (OCR, PDF teksts vai MDZ/IIIF lapas).
2. Ja nav, meklē TARGET→DE otrajā ķēdes posmā (atsevišķa vārdnīca; hr: Filipović 1875 A–O — P–Z trūkums).
3. Papildavotus (hu: REAL-EOD vēsturiskais PDF; hr: kabatas Žepni u.c.) izmanto tikai ja primārais posms nedod pāri — neaizstāj primāro ķēdi.
4. Pārbaudi vārdšķiru un konkrētās kartītes vācu nozīmi; citai nozīmei piederošu ekvivalentu nepieņem.
5. Automātiskos tulkotājus, dict.cc, bosniešu/serbu vārdnīcas kā hr aizstājējus un hr/sr maisījumus neizmanto kā pierādījumu.
6. Saglabā avota nosaukumu, virzienu, atrasto pāri un precīzo viewer / OCR / PDF URL.

## HR — HR_DIGITIZED_SOURCES_REGISTERED_PARTIAL

> **Jaunie avoti:** reģistrēti audita katalogā (PARTIAL — nav READY).

- **Digitizācijas audits:** `PARTIAL`
- **Audit READY:** nē (apzināti PARTIAL / not verified)
### Primārie digitizētie avoti
- **Deutsch-kroatisches Wörterbuch vol. I A–L (Bogoslav Šulek, 1860)** (de→hr): https://www.digitale-sammlungen.de/de/view/bsb10703395?page=1
- **Deutsch-kroatisches Wörterbuch vol. II M–Z (Bogoslav Šulek, 1860)** (de→hr): https://www.digitale-sammlungen.de/de/view/bsb10703396?page=1

### HR→DE / reverse ķēde
- **Novi rječnik hrvatskoga i njemačkoga jezika — A–O (Ivan Filipović, 1875)** [primary_reverse]: https://archive.org/details/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic
  - Gap: P–Z volume not found open on IA — HR→DE chain incomplete

### Papildu / rezerves avoti
- Filipović 1869 DE→HR (IA) (supplement_only)

### Noraidīti / nav audit avoti
- Karadžić Deutsch-serbisches Wörterbuch: sr ≠ hr — neaizstāj horvātu audita avotu.
- Šamšalović DE↔HR/SR mixed: hr/sr maisījums — nav hr-only pierādījums.

### Avotu secība
- primaryDigitized:de→hr (mdz-bsb-sulek-de-hr-vol1-1860 + mdz-bsb-sulek-de-hr-vol2-1860)
- reverseChainDigitized:hr→de (ia-filipovic-hr-de-vol-a-o-1875 — A–O only, PARTIAL)
- supplementaryReserve:ia-filipovic-de-hr-1869 (only if primary DE→HR fails)

### Pilot kopsavilkums
```json
{
  "status": "PARTIAL",
  "deToTargetHits": "3/6",
  "sourceDeToTarget": "mdz-bsb-sulek-de-hr-vol1-1860",
  "sourceTargetToDe": "ia-filipovic-hr-de-vol-a-o-1875",
  "targetToDeKuća": true,
  "targetToDeHausNear": false
}
```

### Regresija (pilot)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 1 | Šulek DE→HR vol. I (IA _djvu.txt) | FOUND_IN_OCR | [link](https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt) |
| arbeiten | 1 | Šulek DE→HR vol. I (IA _djvu.txt) | FOUND_IN_OCR | [link](https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt) |
| Kleingeld | 1 | Šulek DE→HR vol. I (IA _djvu.txt) | FOUND_IN_OCR | [link](https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt) |
| bewirten | 1 | Šulek DE→HR vol. I (IA _djvu.txt) | NOT_FOUND | [link](https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt) |
| Grenzkonflikt | 1 | Šulek DE→HR vol. I (IA _djvu.txt) | NOT_FOUND | [link](https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt) |
| Machtgier | 1 | Šulek DE→HR vol. I (IA _djvu.txt) | NOT_FOUND | [link](https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt) |
| (reverse) kuća | 2 | Filipović 1875 HR→DE A–O (IA OCR) | kuća attested (P–Z gap) | [link](https://archive.org/download/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic_djvu.txt) |

## HU — HU_DIGITIZED_SOURCES_REGISTERED_PARTIAL

> **Jaunie avoti:** reģistrēti audita katalogā (PARTIAL — nav READY).

- **Digitizācijas audits:** `PARTIAL`
- **Audit READY:** nē (apzināti PARTIAL / not verified)
### Primārie digitizētie avoti
- **Német–magyar szótár (MEK / OSZK, 2023 PDF)** (de→hu): https://mek.oszk.hu/24400/24482/
- **Német-magyar, magyar-német szótár (Molnár Ágnes, 1996 — MEK HTML)** (de↔hu): https://mek.oszk.hu/00000/00072/html/index.htm

### Papildu / rezerves avoti
- Magyar és német zsebszótár — REAL-EOD vol. 13 (1838 pocket) (supplement_hu_to_de): http://real-eod.mtak.hu/1348/13/Magyar_es_N%C3%A9met_Zsebsz%C3%B3t%C3%A1r.pdf

### Noraidīti / nav audit avoti
- Halász 1952 on IA (nemetmagyar0000haka): Borrow/LCP — use MEK 24482 for open DE→HU PDF.
- PICDIC / Data Manager software: Nav vārdnīcas skenējuma.

### Avotu secība
- primaryDigitized:de→hu (mek-24482-nemet-magyar-pdf-2023)
- primaryDigitized:de↔hu (mek-00072-de-hu-hu-de-html — searchable both ways)
- supplementaryReserve:real-eod-nemet-magyar-zsebszotar-vol13-1838 (HU→DE historical supplement)

### Pilot kopsavilkums
```json
{
  "status": "PARTIAL",
  "mekHtmlDeToTargetHits": "4/6",
  "mekPdfDeToTargetHits": "4/6",
  "targetToDeHázHtml": true,
  "targetToDeHázPdf": false
}
```

### Regresija (pilot)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 1 | MEK 00072 HTML (Molnár 1996) | FOUND_IN_MEK_HTML | [link](https://mek.oszk.hu/00000/00072/html/h.htm) |
| arbeiten | 1 | MEK 00072 HTML (Molnár 1996) | FOUND_IN_MEK_HTML | [link](https://mek.oszk.hu/00000/00072/html/a.htm) |
| Kleingeld | 1 | MEK 00072 HTML (Molnár 1996) | FOUND_IN_MEK_HTML | [link](https://mek.oszk.hu/00000/00072/html/k.htm) |
| bewirten | 1 | MEK 00072 HTML (Molnár 1996) | FOUND_IN_MEK_HTML | [link](https://mek.oszk.hu/00000/00072/html/b.htm) |
| Grenzkonflikt | 1 | MEK 00072 HTML (Molnár 1996) | NOT_FOUND | [link](https://mek.oszk.hu/00000/00072/html/g.htm) |
| Machtgier | 1 | MEK 00072 HTML (Molnár 1996) | NOT_FOUND | [link](https://mek.oszk.hu/00000/00072/html/m.htm) |
| (reverse) Haus → ház | 1 | MEK 00072 HTML h.htm | Haus (s) → ház verified | [link](https://mek.oszk.hu/00000/00072/html/h.htm) |

## IS — IS_NOT_VERIFIED_DIGITIZED

- **Digitizācijas audits:** `IS_NOT_VERIFIED_DIGITIZED`
- **Audit READY:** nē (apzināti PARTIAL / not verified)
### Primārie digitizētie avoti

### Noraidīti / nav audit avoti
- LEXÍA online IS↔DE: SPA — nav automatizēti verificēta ar esošo audit pipeline (NOT_VERIFIED_AUTOMATION).
- Jón Ófeigsson 1935 print (~930 pp): Nav atvērts pilns PDF/skenējums; fiziska grāmata nav digitāls audita avots.
- dict.cc Deutsch–Isländisch: Nav institucionāls vārdnīcas skenējums.

### Avotu secība
- digitizedAuditStatus:IS_NOT_VERIFIED_DIGITIZED — nav reģistrēta gatava audita ķēde

### Pilot kopsavilkums
```json
{
  "status": "NOT_VERIFIED_AUTOMATION",
  "reason": "No open OCR/PDF/ HTML dictionary text for IS↔DE in this run (LEXÍA requires browser session)",
  "lexiaUrl": "https://lexia.arnastofnun.is/"
}
```

### Regresija (pilot)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 0 | — | NOT_FOUND | — |
| arbeiten | 0 | — | NOT_FOUND | — |
| Kleingeld | 0 | — | NOT_FOUND | — |
| bewirten | 0 | — | NOT_FOUND | — |
| Grenzkonflikt | 0 | — | NOT_FOUND | — |
| Machtgier | 0 | — | NOT_FOUND | — |

