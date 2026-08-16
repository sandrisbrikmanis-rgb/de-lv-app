# DA–DE A2 — OWNER review (Copy-Only workflow)

Tas pats princips kā **DA–DE A1** un **CS–DE Kurss — Lekcijas**:

1. Atver `da-a2-owner-review-*.md` failus (vai decisions tabulas).
2. Katram finding — **CURRENT_DA** ir nepareizais teksts production failā (`data/da/a2.js`, lauks `lv`).
3. **ChatGPT / OWNER** ieraksta pareizo dāņu variantu laukā **OWNER_DECISION** (vai aizpilda `da-a2-owner-decisions-*.md`).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply uz `data/da/a2.js` + `www/data/da/a2.js`.

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Kopā audit atradumi | **1403** |
| Comparison LV (HIGH) | **485** |
| sectionAccents (MEDIUM) | **801** |
| Citi (ZW, sinonīmi, u.c.) | **117** |
| Review faili | **30** |

## Faili

| Review | Findings | Skaits | Kategorija | Decisions template |
|--------|----------|--------|------------|-------------------|
| `da-a2-owner-review-comparison-01.md` | 1–179 | 50 | comparison | `da-a2-owner-decisions-comparison-01.md` |
| `da-a2-owner-review-comparison-02.md` | 180–366 | 50 | comparison | `da-a2-owner-decisions-comparison-02.md` |
| `da-a2-owner-review-comparison-03.md` | 369–486 | 50 | comparison | `da-a2-owner-decisions-comparison-03.md` |
| `da-a2-owner-review-comparison-04.md` | 487–620 | 50 | comparison | `da-a2-owner-decisions-comparison-04.md` |
| `da-a2-owner-review-comparison-05.md` | 621–752 | 50 | comparison | `da-a2-owner-decisions-comparison-05.md` |
| `da-a2-owner-review-comparison-06.md` | 753–923 | 50 | comparison | `da-a2-owner-decisions-comparison-06.md` |
| `da-a2-owner-review-comparison-07.md` | 924–1035 | 50 | comparison | `da-a2-owner-decisions-comparison-07.md` |
| `da-a2-owner-review-comparison-08.md` | 1044–1161 | 50 | comparison | `da-a2-owner-decisions-comparison-08.md` |
| `da-a2-owner-review-comparison-09.md` | 1162–1293 | 50 | comparison | `da-a2-owner-decisions-comparison-09.md` |
| `da-a2-owner-review-comparison-10.md` | 1294–1381 | 35 | comparison | `da-a2-owner-decisions-comparison-10.md` |
| `da-a2-owner-review-sectionaccents-01.md` | 6–87 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-01.md` |
| `da-a2-owner-review-sectionaccents-02.md` | 88–160 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-02.md` |
| `da-a2-owner-review-sectionaccents-03.md` | 161–239 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-03.md` |
| `da-a2-owner-review-sectionaccents-04.md` | 240–307 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-04.md` |
| `da-a2-owner-review-sectionaccents-05.md` | 308–388 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-05.md` |
| `da-a2-owner-review-sectionaccents-06.md` | 389–496 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-06.md` |
| `da-a2-owner-review-sectionaccents-07.md` | 497–568 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-07.md` |
| `da-a2-owner-review-sectionaccents-08.md` | 569–666 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-08.md` |
| `da-a2-owner-review-sectionaccents-09.md` | 667–745 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-09.md` |
| `da-a2-owner-review-sectionaccents-10.md` | 754–855 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-10.md` |
| `da-a2-owner-review-sectionaccents-11.md` | 856–928 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-11.md` |
| `da-a2-owner-review-sectionaccents-12.md` | 929–1039 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-12.md` |
| `da-a2-owner-review-sectionaccents-13.md` | 1040–1131 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-13.md` |
| `da-a2-owner-review-sectionaccents-14.md` | 1132–1224 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-14.md` |
| `da-a2-owner-review-sectionaccents-15.md` | 1225–1309 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-15.md` |
| `da-a2-owner-review-sectionaccents-16.md` | 1310–1392 | 50 | sectionaccents | `da-a2-owner-decisions-sectionaccents-16.md` |
| `da-a2-owner-review-sectionaccents-17.md` | 1402–1402 | 1 | sectionaccents | `da-a2-owner-decisions-sectionaccents-17.md` |
| `da-a2-owner-review-misc-01.md` | 5–660 | 50 | misc | `da-a2-owner-decisions-misc-01.md` |
| `da-a2-owner-review-misc-02.md` | 673–1202 | 50 | misc | `da-a2-owner-decisions-misc-02.md` |
| `da-a2-owner-review-misc-03.md` | 1226–1403 | 17 | misc | `da-a2-owner-decisions-misc-03.md` |

## OWNER statusi

- **LABOT** — ieraksti NEW tekstu; copy-paste apply
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — vajag papildu kontekstu
- **FJERN `termins`** — sectionAccents: noņem akcenta terminu (apply map)

## Apply (pēc OWNER atgriešanas)

```bash
node scripts/build-da-a2-owner-apply-map.js
node scripts/apply-da-a2-owner-repair.js
```

## Svarīgi

- **PROPOSED_DA** = Luna ieteikums; OWNER var apstiprināt vai labot.
- **DE nemainīt** (`de`, `de_article`, Study DE piemēri).
- Production changes tikai pēc OWNER lēmumiem.
- Comparison `PROPOSED_DA` dažās vietās ir mehāniski — OWNER jāpārbauda dabiskums.

**Audits:** `reports/da-a2-full-audit.md`
