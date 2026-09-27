# LT↔DE pilot lemma verification — eKalba (primary) + LKI *Zodynas* IA (supplement)

**Date:** 2026-09-27  
**Git branch (PR #843):** [`cursor/g2-a1-card-translation-31lang-17f5`](https://github.com/sandrisbrikmanis-rgb/de-lv-app/tree/cursor/g2-a1-card-translation-31lang-17f5)  
**Pull request:** [sandrisbrikmanis-rgb/de-lv-app#843](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/843) — *G2/A1: card translation readiness 12/32 (catalog wiring, strict gates)*  
**Scope:** Empirical verification only. No production / MASTER / OWNER data changed.

---

## Source roles

| Role | Source | Direction | Use in pilots |
|------|--------|-----------|---------------|
| **Primary** | [Vokiečių–lietuvių kalbų žodynas (eKalba)](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/) | DE→LT | Main modern DE→LT lookups |
| **Primary** | [Lietuvių–vokiečių kalbų žodynas (eKalba)](https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/) | LT→DE | Main modern LT→DE lookups |
| **Supplement** | [LKI *Lietuvių rašomosios kalbos žodynas* t. 1–5 (Internet Archive)](https://archive.org/details/zodynas-t.-1-1932) | **LT→DE only** | Historical LT headwords with German glosses; **not** a DE→LT dictionary |

**Alphabetical volume split (LKI *Zodynas*):**

| Vol. | IA item | Range |
|------|---------|--------|
| t. 1 (1932) | [zodynas-t.-1-1932](https://archive.org/details/zodynas-t.-1-1932) | **A–K** |
| t. 2 (1951) | [zodynas-t.-2-1951](https://archive.org/details/zodynas-t.-2-1951) | **L–Pa** |
| t. 3 (1957) | [zodynas-t.-3-1957](https://archive.org/details/zodynas-t.-3-1957) | **Pe–Sk** |
| t. 4 (1963) | [zodynas-t.-4-1963](https://archive.org/details/zodynas-t.-4-1963) | **Sl–Tev** |
| t. 5 (1968) | [zodynas-t.-5-1968](https://archive.org/details/zodynas-t.-5-1968) | **Tėv–Ž** (+ appendix) |

**IA page verification method:** Each cited *Zodynas* URL was opened in the Internet Archive BookReader (live UI text overlay, 2026-09-27). Headword + German gloss were confirmed on the opened spread—not inferred from OCR files alone.

---

## eKalba — primary bilingual results

### DE→LT

| Pilot DE | Status | Entry URL | LT match for card / pilot |
|----------|--------|-----------|---------------------------|
| **Haus** | FOUND | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Haus?i=32b14ac4-c7e6-4aca-b722-bde8f8168bad | **namas** — dwelling/home sense (*nach Hause* → *namo*, *į namus*; *zu Hause* → *namie*). **pastatas** listed separately (building/structure); **not** used as the primary *das Haus* = *māja* dwelling equivalent. |
| **arbeiten** | FOUND | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/arbeiten?i=2aeb2719-576a-4819-83ec-4fa822c20c2d | **dirbti** (also *veikti*, *funkcionuoti*; II *pagaminti*, *padaryti*) |
| **Kleingeld** | FOUND | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Kleingeld?paieska=Kleingeld&i=f8697769-4fb6-471a-96ca-b0b2e63d899d | **smulkūs pinigai** |
| **bewirten** | FOUND | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/bewirten?paieska=bewirten&i=1501ec18-60c5-43d9-9faf-e23d0840edd0 | **aptarnauti**, **vaišinti svečią** |
| **Grenzkonflikt** | **NOT_FOUND** | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/?paieska=Grenzkonflikt | 0 results — no direct DE→LT pair |
| **Machtgier** | **NOT_FOUND** | https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/?paieska=Machtgier | 0 results — no direct DE→LT pair |

### LT→DE

| Pilot LT | Status | Entry URL | DE match |
|----------|--------|-----------|----------|
| **namas** | FOUND | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/namas?i=0cdbd720-ccec-48f1-a8a1-e3cd960c1301 | **Haus**, **Wohnhaus** (+ compounds) |
| **dirbti** | FOUND | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/dirbti?i=3ed0c8c1-5f67-4dde-9f74-4f1eca06eaf6 | **arbeiten** (+ *herstellen*, *machen*, *bearbeiten*) |
| **smulkūs pinigai** | FOUND | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/smulkus?i=0e556c07-f528-4bc7-aef1-6c786ac7814e | **Kleingeld** (sub-entry under *smulkus*) |
| **vaišinti** | FOUND | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/vai%C5%A1inti?paieska=vai%C5%A1inti&i=99055672-eaf3-4960-a8c1-f2950de4631d | **bewirten** |
| **pasienio konfliktas** | **NOT_FOUND** | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/?paieska=pasienio%20konfliktas | 0 results |
| **valdžios geidulys** | **NOT_FOUND** | https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/?paieska=vald%C5%BEios%20geidulys | 0 results |

**Not pilot-equivalent (informational only):** separate entries for *pasienis*, *konfliktas*, *geidulys* (Begierde) — no attested compound matching *Grenzkonflikt* / *Machtgier*.

---

## LKI *Zodynas* (IA) — supplement, LT→DE only

Verified BookReader pages (headword + German gloss visible on scan):

| Pilot (LT→DE) | Correct vol. | BookReader URL (verified) | Visible on page |
|---------------|--------------|---------------------------|-----------------|
| **dirbti** → arbeiten | **t. 1 (A–K)** | https://archive.org/details/zodynas-t.-1-1932/page/124/mode/2up?q=dirbti+Arbeitszimmer&search=dirbti+Arbeitszimmer | `dirbti (-du, -baw, -bsiu) … arbeiten` |
| **namas** → Haus | **t. 2 (L–Pa)** — **not** t. 1 | https://archive.org/details/zodynas-t.-2-1951/page/117/mode/2up?q=n%C3%A4mas%2C+-o&search=n%C3%A4mas%2C+-o | `nämas, -o … (Wohn)haus n., Heim n.` (Fraktur spelling *nämas* = *namas*) |
| **smulkūs pinigai** / **pinigai** → Kleingeld | **t. 3 (Pe–Sk)** | https://archive.org/details/zodynas-t.-3-1957/page/95/mode/2up?q=pinigai+Kleingeld&search=pinigai+Kleingeld | `pinigas … pinigai … smulküs a Kleingeld` |
| **vaišinti** → bewirten | **t. 5 (Tėv–Ž)** | https://archive.org/details/zodynas-t.-5-1968/page/185/mode/2up?q=gastlich%29+bewirten&search=gastlich%29+bewirten | `väisinti … (gastlich) bewirten` |

| Pilot | Status in *Zodynas* |
|-------|---------------------|
| **Grenzkonflikt** / **pasienio konfliktas** | **NOT_FOUND** — no compound in any volume (BookReader search + full-text check) |
| **Machtgier** / **valdžios geidulys** | **NOT_FOUND** — no compound; unrelated glosses (*Herrschsucht*, *Begierde*) do not count as pilot pairs |

**Volume entry URLs (as requested):**

- [t. 1 — A–K](https://archive.org/details/zodynas-t.-1-1932/page/n9/mode/2up)
- [t. 2 — L–Pa](https://archive.org/details/zodynas-t.-2-1951/page/n1/mode/2up)
- [t. 3 — Pe–Sk](https://archive.org/details/zodynas-t.-3-1957/page/n1/mode/2up)
- [t. 4 — Sl–Tev](https://archive.org/details/zodynas-t.-4-1963/page/n1/mode/2up)
- [t. 5 — Tėv–Ž](https://archive.org/details/zodynas-t.-5-1968/page/n1/mode/2up)

---

## Summary

| Lemma group | eKalba (primary) | *Zodynas* IA (supplement) |
|-------------|------------------|---------------------------|
| Haus ↔ namas (dwelling) | **Pass** — use **namas**, not pastatas for card dwelling sense | **Pass** — **t. 2** only, verified p. 117 spread |
| arbeiten ↔ dirbti | **Pass** | **Pass** — **t. 1**, verified |
| Kleingeld ↔ smulkūs pinigai | **Pass** | **Pass** — **t. 3** *pinigas* / *smulküs a Kleingeld*, verified |
| bewirten ↔ vaišinti | **Pass** | **Pass** — **t. 5**, verified |
| Grenzkonflikt / pasienio konfliktas | **NOT_FOUND** | **NOT_FOUND** |
| Machtgier / valdžios geidulys | **NOT_FOUND** | **NOT_FOUND** |

**Recommendation:** Treat **eKalba DE→LT and LT→DE** as the authoritative modern bilingual pair for pilots; use **LKI *Zodynas* on IA** only as a historical LT→DE cross-check with the verified page links above. Do not infer DE→LT headword support from *Zodynas* reverse gloss search.
