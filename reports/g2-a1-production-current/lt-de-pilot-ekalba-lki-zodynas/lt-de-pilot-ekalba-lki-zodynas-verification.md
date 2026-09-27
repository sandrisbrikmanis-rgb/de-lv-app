# LT↔DE pilot lemma verification — eKalba + LKI *Zodynas* (Internet Archive)

**Date:** 2026-09-27  
**Scope:** Empirical lookup of pilot lemmas on the URLs requested by OWNER. No production / MASTER / OWNER data changed.

## Sources

| Source | Direction | Type | Notes |
|--------|-----------|------|--------|
| [Vokiečių–lietuvių kalbų žodynas (eKalba)](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/) | DE→LT | LKI digital bilingual (~15 262 German lemmas) | Full headword entries with LT glosses |
| [Lietuvių–vokiečių kalbų žodynas (eKalba)](https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/) | LT→DE | LKI digital bilingual (~17 008 Lithuanian lemmas) | Full headword entries with DE glosses |
| [LKI *Lietuvių rašomosios kalbos žodynas* t. 1–5 (IA)](https://archive.org/details/zodynas-t.-1-1932) | **LT→DE only** | Historical monolingual LT with German glosses (1932–1968, 5 vols.) | **Not** a DE→LT dictionary; DE lemmas appear only inside LT entries or phrases |

**IA volumes (alphabetical split):** t.1 A–K (1932), t.2 L–Pa (1951), t.3 Pe–Sk (1957), t.4 Sl–Tev (1963), t.5 Tėv–Ž (1968).

**Page URLs:** Archive.org leaf `n{leaf}` links below were mapped from `_hocr_searchtext.txt` + `_hocr_pageindex.json` (proportional char offset). Approximate ±1–2 scan pages possible on OCR drift.

---

## Pilot results — eKalba (preferred modern DE↔LT)

### DE→LT ([vokieciu-lietuviu-kalbu-zodynas](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/))

| Pilot DE | Found | Entry URL | LT gloss (verified in UI) |
|----------|-------|-----------|---------------------------|
| **Haus** | yes | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Haus?i=32b14ac4-c7e6-4aca-b722-bde8f8168bad | **namas**, **pastatas**; phrases *nach Hause* → *namo*, *į namus*; *zu Hause* → *namie* |
| **arbeiten** | yes | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/arbeiten?i=2aeb2719-576a-4819-83ec-4fa822c20c2d | **dirbti**; also *veikti*, *funkcionuoti*; II **(pa)gamininti**, **(pa)daryti** |
| **Kleingeld** | yes | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Kleingeld?paieska=Kleingeld&i=f8697769-4fb6-471a-96ca-b0b2e63d899d | **smulkūs pinigai** |
| **bewirten** | yes | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/bewirten?paieska=bewirten&i=1501ec18-60c5-43d9-9faf-e23d0840edd0 | **aptarnauti**, **vaišinti svečią** |
| **Grenzkonflikt** | **no** | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/?paieska=Grenzkonflikt | **0 results** (2026-09-27) |
| **Machtgier** | **no** | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/?paieska=Machtgier | **0 results** |

**Related (not pilot-equivalent):** [Grenze](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Grenze?i=347203c6-d08e-4bee-a748-462ae6d667b2) → *siena*, *riba* (no compound *Grenzkonflikt*).

### LT→DE ([lietuviu-vokieciu-kalbu-zodynas](https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/))

| Pilot LT | Found | Entry URL | DE gloss (verified in UI) |
|----------|-------|-----------|---------------------------|
| **namas** | yes | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/namas?i=0cdbd720-ccec-48f1-a8a1-e3cd960c1301 | **Haus**; **Wohnhaus**; compounds (*Haushalt*, *Hausfrau*, *Hochhaus*, …) |
| **dirbti** | yes | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/dirbti?i=3ed0c8c1-5f67-4dde-9f74-4f1eca06eaf6 | **arbeiten**; **herstellen**, **machen**; **bearbeiten** (land) |
| **smulkūs pinigai** (Kleingeld) | yes (via **smulkus**) | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/smulkus?i=0e556c07-f528-4bc7-aef1-6c786ac7814e | **smulkūs pinigai → Kleingeld** (explicit sub-entry) |
| **vaišinti** | yes | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/vai%C5%A1inti?paieska=vai%C5%A1inti&i=99055672-eaf3-4960-a8c1-f2950de4631d | **bewirten** |
| **pasienio konfliktas** | **no** | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/?paieska=pasienio%20konfliktas | **0 results** |
| **valdžios geidulys** (Machtgier) | **no** | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/?paieska=vald%C5%BEios%20geidulys | **0 results** |

**Partial components (not pilot match):**

- [pasienis](https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/pasienis?i=0e873343-c59a-4ecc-a120-a826aacba918) → *Grenzgebiet*, *Grenzschutz*, *Grenzstreifen*, … (no *Konflikt* in entry).
- [konfliktas](https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/konfliktas?i=ede13b83-b56d-4bf9-9420-f482779d1893) → *Konflikt* (generic; no border sense).
- [geidulys](https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/geidulys?paieska=geidulys&i=1912a5c7-cdf4-402c-8fba-6ec07da441ca) → **Begierde** (not *Machtgier*).

---

## Pilot results — LKI *Zodynas* on Internet Archive (LT→DE corpus; DE→LT = reverse gloss search)

| Pilot | Direction | Best IA evidence | Page URL (approx.) | Notes |
|-------|-----------|------------------|--------------------|--------|
| **dirbti** / arbeiten | LT→DE | Headword `dirbti … arbeiten` | [t.1 / n152](https://archive.org/details/zodynas-t.-1-1932/page/n152/mode/2up) | Canonical intr. sense *arbeiten* |
| **namas** / Haus | LT→DE | No clean standalone `namas` headword in OCR; **Wohnhaus** under *gyvenama troba* | [t.1 / n29](https://archive.org/details/zodynas-t.-1-1932/page/n29/mode/2up) | Dwelling sense via compound, not lemma *namas* |
| **smulkūs pinigai** / Kleingeld | LT→DE | `smulkūs … Kleingeld` under *pinigai* | [t.3 / n99](https://archive.org/details/zodynas-t.-3-1957/page/n99/mode/2up) | Also t.4 *smulkūs pinigai* Kleingeld n. [n30](https://archive.org/details/zodynas-t.-4-1963/page/n30/mode/2up) |
| **vaišinti** / bewirten | LT→DE | `väisinti … (gastlich) bewirten` | [t.5 / n192](https://archive.org/details/zodynas-t.-5-1968/page/n192/mode/2up) | |
| **Haus** (DE pilot) | DE→LT reverse | Phrase gloss *das Haus* (e.g. *namus … das Haus sauber halten*) | [t.2 / n5](https://archive.org/details/zodynas-t.-2-1951/page/n5/mode/2up) | Not a German headword entry |
| **arbeiten** (DE pilot) | DE→LT reverse | Many verbal glosses *arbeiten* in running text | [t.1 / n36](https://archive.org/details/zodynas-t.-1-1932/page/n36/mode/2up) (example) | Prefer t.1 **dirbti** for LT→DE |
| **Kleingeld** | DE→LT reverse | *Kleingeld* in example sentence | [t.2 / n316](https://archive.org/details/zodynas-t.-2-1951/page/n316/mode/2up) | |
| **bewirten** | DE→LT reverse | *bewirten* in guest / treat senses | [t.5 / n61](https://archive.org/details/zodynas-t.-5-1968/page/n61/mode/2up) | See also **väisinti** headword t.5 n192 |
| **Grenzkonflikt** | both | **Not found** as lemma or German compound in OCR (all 5 vols.) | — | Generic *Konflikt m.* exists (e.g. [t.4 / n340](https://archive.org/details/zodynas-t.-4-1963/page/n340/mode/2up)); *pasienio* border vocabulary without *konfliktas* compound |
| **Machtgier** | both | **Not found**; related **Herrschsucht** / *valdžios troškimas* style glosses | [t.5 / n200](https://archive.org/details/zodynas-t.-5-1968/page/n200/mode/2up) (*Herrschsucht*) | Modern compound absent in this historical work |

**Volume landing pages (as requested):**

- [t.1 1932](https://archive.org/details/zodynas-t.-1-1932/page/n9/mode/2up) — front matter / start of A–K  
- [t.2 1951](https://archive.org/details/zodynas-t.-2-1951/page/n1/mode/2up)  
- [t.3 1957](https://archive.org/details/zodynas-t.-3-1957/page/n1/mode/2up)  
- [t.4 1963](https://archive.org/details/zodynas-t.-4-1963/page/n1/mode/2up)  
- [t.5 1968](https://archive.org/details/zodynas-t.-5-1968/page/n1/mode/2up)  

---

## Summary verdict

| Lemma group | eKalba DE↔LT | LKI IA (5 vols.) |
|-------------|--------------|------------------|
| Haus / namas | **Pass** (both directions) | **Partial** — strong LT→DE via compounds; weak standalone *namas* in OCR |
| arbeiten / dirbti | **Pass** | **Pass** (t.1 *dirbti*) |
| Kleingeld / smulkūs pinigai | **Pass** | **Pass** (under *pinigai* / *smulkūs*) |
| bewirten / vaišinti | **Pass** | **Pass** (t.5 *väisinti*) |
| Grenzkonflikt / pasienio konfliktas | **Missing** | **Missing** (only separable *Grenze*/*pasienis* + *Konflikt*) |
| Machtgier / valdžios geidulys | **Missing** | **Missing** (related *Begierde* / *Herrschsucht* only) |

**Recommendation for card-translation pilots:** Use **eKalba** as the verified modern DE↔LT pair for the four core lemmas; treat **LKI IA *Zodynas*** as historical **LT→DE** supplement (reverse DE lookup only with manual disambiguation). Do **not** mark *Grenzkonflikt* / *Machtgier* as supported by these two sources without OWNER-chosen alternative lemmas or additional dictionaries.

## Method

- eKalba: Playwright via `scripts/lib/g2-a1-production-current/source-adapters/browser/pool.js` (`withDomainBrowserSession`), 2026-09-27.
- IA: Downloaded official `_hocr_searchtext.txt.gz` + `_hocr_pageindex.json.gz` per item; full-text regex + proportional page mapping.
