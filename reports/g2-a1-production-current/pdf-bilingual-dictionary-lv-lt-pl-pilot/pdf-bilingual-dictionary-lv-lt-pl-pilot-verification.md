# PDF bilingual dictionary pilot verification — `lv`, `lt`, `pl`

Deep-dive follow-up to `master-german-target-pdf-bilingual-dictionaries-32.json`.  
**Scope:** both directions (DE→TARGET and TARGET→DE), metadata, public searchability, and six pilot lemmas with TARGET gloss and viewer URL where verified.

**Gala statuses used**

| Status | Meaning |
|--------|---------|
| `VERIFIED_HISTORICAL_COMPARABLE` | Open OCR/PDF; bilingual content searched; large historical pair |
| `VERIFIED_HISTORICAL_LIMITED` | Open OCR/PDF; historical, below modern ~30k scale and/or poor OCR |
| `VERIFIED_PARTIAL_VOLUME` | Real dictionary OCR opened; incomplete pair or single volume |
| `NOT_VERIFIED_OPEN_PDF` | Catalog or viewer exists; content not opened this run |
| `GAP` | No usable public PDF pair at target scale |

Page URLs use Internet Archive leaf numbers:  
`leaf = floor((ocrLine − 1) / ocrLines × scannedPages)`  
(IA `hocr_pageindex.json` char offsets target full hOCR HTML, not `djvu.txt`.)

---

## Summary table

| Lang | Direction | Gala status | Work | Year | Verified access | Headless search |
|------|-----------|-------------|------|------|-------------------|-----------------|
| **pl** | DE→PL | VERIFIED_HISTORICAL_COMPARABLE | Haessel *Nowy dokładny…* vol. 2 DE–PL | 1903 | [IA NDIGDRUK014604](https://archive.org/details/jbc.bj.uj.edu.pl.NDIGDRUK014604) | Yes (IA OCR) |
| **pl** | PL→DE | VERIFIED_HISTORICAL_COMPARABLE | Haessel vol. 1 PL–DE | 1872 | [IA NDIGDRUK014605](https://archive.org/details/jbc.bj.uj.edu.pl.NDIGDRUK014605) | Yes (IA OCR) |
| **lv** | DE→LV | VERIFIED_HISTORICAL_LIMITED | Stender *Deutschlettisches Wörter-Lexikon* | 1789 | [IA bub_gb_vFhKAAAAcAAJ](https://archive.org/details/bub_gb_vFhKAAAAcAAJ) | Yes (poor Fraktur OCR) |
| **lv** | LV→DE | NOT_VERIFIED_OPEN_PDF | Stender Teil 1 | 1789 | [LU DSpace](https://dspace.lu.lv/items/98bdf37e-0eb8-4fd5-94d4-d6ed655e5791) | No |
| **lt** | DE→LT | GAP | Brodowski / modern institutional | — | [Lituanistika metadata](https://www.lituanistika.lt/content/20958) only | No |
| **lt** | LT→DE | VERIFIED_PARTIAL_VOLUME | LKI Senn–Salys vol. 3 | 1957 | [IA zodynas-t.-3-1957](https://archive.org/details/zodynas-t.-3-1957) | Yes (vol. 3 only) |

**Live JBC/WBC:** [jbc.bj.uj.edu.pl](https://jbc.bj.uj.edu.pl/dlibra/doccontent?id=330399) returns PoW captcha (`captcha_pow` cookie); headless curl is not equivalent to ET DIGAR Valgus browser search.

**Not claimed as usable (catalog only):** LV modern *Avots* ~33k; LV Forssman 2008 (gbv.de stub); LT epaveldas Brodowski PDF (404/HTML this run).

---

## Poland (`pl`)

### DE→PL — verified pilot hits (vol. 2, IA mirror)

| Pilot | Found | Polish gloss (sample) | Viewer URL |
|-------|-------|----------------------|------------|
| Haus | Partial OCR | `dom` (in phrases; headword line noisy) | https://archive.org/details/jbc.bj.uj.edu.pl.NDIGDRUK014604/page/n64 |
| arbeiten | Yes | m.in. *pańszczyznę odrabiać* | https://archive.org/details/jbc.bj.uj.edu.pl.NDIGDRUK014604/page/n113 |
| Grenze | Yes | *granica* | https://archive.org/details/jbc.bj.uj.edu.pl.NDIGDRUK014604/page/n156 |
| Kleingeld | No | — | — |
| bewirten | No | — | — |
| Grenzkonflikt | No | — | — |
| Machtgier | No | — | — |

OCR source: `NDIGDRUK014604_djvu.txt` (≈261k lines, 409 scan leaves).

### PL→DE — verified pilot hits (vol. 1, IA mirror)

| Pilot | Found | German gloss (sample) | Viewer URL |
|-------|-------|----------------------|------------|
| Haus | Yes (via **Dom**) | *Haus, Wohnhaus* | https://archive.org/details/jbc.bj.uj.edu.pl.NDIGDRUK014605/page/n78 |
| arbeiten | No clean headword | — | — |
| Kleingeld / bewirten / Grenzkonflikt / Machtgier | No | — | — |

OCR source: `NDIGDRUK014605_hocr_searchtext.txt.gz` (≈75k lines, 1160 scan leaves).

---

## Latvia (`lv`)

### DE→LV — Stender (1789), IA PDF + OCR

| Pilot | Found | TARGET gloss | Viewer URL |
|-------|-------|--------------|------------|
| arbeiten | Partial | OCR not reliable | https://archive.org/details/bub_gb_vFhKAAAAcAAJ/page/n74 |
| Haus, Kleingeld, bewirten, Grenzkonflikt, Machtgier | No string match | — | — |

[LNB DOM](https://dom.lndb.lv/data/obj/1709940.html) title confirms *Deutschlettisches* volume; flipbook UI loads — PDF text path not verified here.

### LV→DE

Teil 1 (LU DSpace) — **NOT_VERIFIED_OPEN_PDF** this run. Letonika/Tēzaurs are web lexica, not the scanned PDF pair requested.

---

## Lithuania (`lt`)

| Direction | Result |
|-----------|--------|
| DE→LT | **GAP** — no Valgus-scale modern public PDF pair opened. |
| LT→DE | **VERIFIED_PARTIAL_VOLUME** — LKI vol. 3 on IA (725 pp); multi-volume set; pilot DE lemmas not mapped to LT headwords with page URLs in this pass. |

---

## Machine-readable

See `pdf-bilingual-dictionary-lv-lt-pl-pilot-verification.json` in this directory.

**Evidence commands (this run):**

```bash
curl -fsSL -o NDIGDRUK014604_djvu.txt \
  "https://archive.org/download/jbc.bj.uj.edu.pl.NDIGDRUK014604/NDIGDRUK014604_djvu.txt"
curl -fsSL -o NDIGDRUK014605_hocr_searchtext.txt.gz \
  "https://archive.org/download/jbc.bj.uj.edu.pl.NDIGDRUK014605/NDIGDRUK014605_hocr_searchtext.txt.gz"
curl -fsSL -o stender.pdf \
  "https://archive.org/download/bub_gb_vFhKAAAAcAAJ/bub_gb_vFhKAAAAcAAJ.pdf"
curl -fsSL -o lt_zodynas_djvu.txt \
  "https://archive.org/download/zodynas-t.-3-1957/Zodynas,%20t.3,%201957_djvu.txt"
```

No production, MASTER, or OWNER artifacts changed.
