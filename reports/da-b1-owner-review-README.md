# DA–DE B1 — OWNER review (Copy-Only workflow)

**GitHub atvēršana (visas saites):** [da-b1-owner-review-GITHUB.md](./da-b1-owner-review-GITHUB.md) · **PR:** [#546](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/546)

Tas pats princips kā **DA–DE A1** un **CS–DE Kurss — Lekcijas**:

1. Zemāk tabulā **noklikšķini** uz Review vai Decisions faila (zilais links).
2. Katram finding — **CURRENT_DA** ir nepareizais teksts production failā (`data/da/b1.js`, lauks `lv`).
3. **ChatGPT / OWNER** ieraksta pareizo dāņu variantu laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply uz `data/da/b1.js` + `www/data/da/b1.js`.

**Mape ar visiem failiem:** [reports/](./)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Kopā audit atradumi | **1575** |
| Comparison LV (HIGH) | **710** |
| sectionAccents (MEDIUM) | **798** |
| Citi (ZW, sinonīmi, u.c.) | **67** |
| Missing Study | **0** |
| Review faili | **33** |

## Faili

| Review | Findings | Skaits | Kategorija | Decisions template |
|--------|----------|--------|------------|-------------------|
| [da-b1-owner-review-comparison-01.md](./da-b1-owner-review-comparison-01.md) | 1–62 | 50 | comparison | [da-b1-owner-decisions-comparison-01.md](./da-b1-owner-decisions-comparison-01.md) |
| [da-b1-owner-review-comparison-02.md](./da-b1-owner-review-comparison-02.md) | 63–151 | 50 | comparison | [da-b1-owner-decisions-comparison-02.md](./da-b1-owner-decisions-comparison-02.md) |
| [da-b1-owner-review-comparison-03.md](./da-b1-owner-review-comparison-03.md) | 153–232 | 50 | comparison | [da-b1-owner-decisions-comparison-03.md](./da-b1-owner-decisions-comparison-03.md) |
| [da-b1-owner-review-comparison-04.md](./da-b1-owner-review-comparison-04.md) | 233–320 | 50 | comparison | [da-b1-owner-decisions-comparison-04.md](./da-b1-owner-decisions-comparison-04.md) |
| [da-b1-owner-review-comparison-05.md](./da-b1-owner-review-comparison-05.md) | 324–413 | 50 | comparison | [da-b1-owner-decisions-comparison-05.md](./da-b1-owner-decisions-comparison-05.md) |
| [da-b1-owner-review-comparison-06.md](./da-b1-owner-review-comparison-06.md) | 414–498 | 50 | comparison | [da-b1-owner-decisions-comparison-06.md](./da-b1-owner-decisions-comparison-06.md) |
| [da-b1-owner-review-comparison-07.md](./da-b1-owner-review-comparison-07.md) | 499–578 | 50 | comparison | [da-b1-owner-decisions-comparison-07.md](./da-b1-owner-decisions-comparison-07.md) |
| [da-b1-owner-review-comparison-08.md](./da-b1-owner-review-comparison-08.md) | 579–719 | 50 | comparison | [da-b1-owner-decisions-comparison-08.md](./da-b1-owner-decisions-comparison-08.md) |
| [da-b1-owner-review-comparison-09.md](./da-b1-owner-review-comparison-09.md) | 722–831 | 50 | comparison | [da-b1-owner-decisions-comparison-09.md](./da-b1-owner-decisions-comparison-09.md) |
| [da-b1-owner-review-comparison-10.md](./da-b1-owner-review-comparison-10.md) | 832–958 | 50 | comparison | [da-b1-owner-decisions-comparison-10.md](./da-b1-owner-decisions-comparison-10.md) |
| [da-b1-owner-review-comparison-11.md](./da-b1-owner-review-comparison-11.md) | 959–1089 | 50 | comparison | [da-b1-owner-decisions-comparison-11.md](./da-b1-owner-decisions-comparison-11.md) |
| [da-b1-owner-review-comparison-12.md](./da-b1-owner-review-comparison-12.md) | 1090–1246 | 50 | comparison | [da-b1-owner-decisions-comparison-12.md](./da-b1-owner-decisions-comparison-12.md) |
| [da-b1-owner-review-comparison-13.md](./da-b1-owner-review-comparison-13.md) | 1247–1405 | 50 | comparison | [da-b1-owner-decisions-comparison-13.md](./da-b1-owner-decisions-comparison-13.md) |
| [da-b1-owner-review-comparison-14.md](./da-b1-owner-review-comparison-14.md) | 1406–1537 | 50 | comparison | [da-b1-owner-decisions-comparison-14.md](./da-b1-owner-decisions-comparison-14.md) |
| [da-b1-owner-review-comparison-15.md](./da-b1-owner-review-comparison-15.md) | 1538–1562 | 10 | comparison | [da-b1-owner-decisions-comparison-15.md](./da-b1-owner-decisions-comparison-15.md) |
| [da-b1-owner-review-sectionaccents-01.md](./da-b1-owner-review-sectionaccents-01.md) | 4–156 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-01.md](./da-b1-owner-decisions-sectionaccents-01.md) |
| [da-b1-owner-review-sectionaccents-02.md](./da-b1-owner-review-sectionaccents-02.md) | 157–291 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-02.md](./da-b1-owner-decisions-sectionaccents-02.md) |
| [da-b1-owner-review-sectionaccents-03.md](./da-b1-owner-review-sectionaccents-03.md) | 292–405 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-03.md](./da-b1-owner-decisions-sectionaccents-03.md) |
| [da-b1-owner-review-sectionaccents-04.md](./da-b1-owner-review-sectionaccents-04.md) | 406–553 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-04.md](./da-b1-owner-decisions-sectionaccents-04.md) |
| [da-b1-owner-review-sectionaccents-05.md](./da-b1-owner-review-sectionaccents-05.md) | 560–661 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-05.md](./da-b1-owner-decisions-sectionaccents-05.md) |
| [da-b1-owner-review-sectionaccents-06.md](./da-b1-owner-review-sectionaccents-06.md) | 662–740 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-06.md](./da-b1-owner-decisions-sectionaccents-06.md) |
| [da-b1-owner-review-sectionaccents-07.md](./da-b1-owner-review-sectionaccents-07.md) | 741–833 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-07.md](./da-b1-owner-decisions-sectionaccents-07.md) |
| [da-b1-owner-review-sectionaccents-08.md](./da-b1-owner-review-sectionaccents-08.md) | 834–917 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-08.md](./da-b1-owner-decisions-sectionaccents-08.md) |
| [da-b1-owner-review-sectionaccents-09.md](./da-b1-owner-review-sectionaccents-09.md) | 921–1000 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-09.md](./da-b1-owner-decisions-sectionaccents-09.md) |
| [da-b1-owner-review-sectionaccents-10.md](./da-b1-owner-review-sectionaccents-10.md) | 1001–1080 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-10.md](./da-b1-owner-decisions-sectionaccents-10.md) |
| [da-b1-owner-review-sectionaccents-11.md](./da-b1-owner-review-sectionaccents-11.md) | 1084–1155 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-11.md](./da-b1-owner-decisions-sectionaccents-11.md) |
| [da-b1-owner-review-sectionaccents-12.md](./da-b1-owner-review-sectionaccents-12.md) | 1156–1231 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-12.md](./da-b1-owner-decisions-sectionaccents-12.md) |
| [da-b1-owner-review-sectionaccents-13.md](./da-b1-owner-review-sectionaccents-13.md) | 1232–1305 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-13.md](./da-b1-owner-decisions-sectionaccents-13.md) |
| [da-b1-owner-review-sectionaccents-14.md](./da-b1-owner-review-sectionaccents-14.md) | 1306–1381 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-14.md](./da-b1-owner-decisions-sectionaccents-14.md) |
| [da-b1-owner-review-sectionaccents-15.md](./da-b1-owner-review-sectionaccents-15.md) | 1382–1457 | 50 | sectionaccents | [da-b1-owner-decisions-sectionaccents-15.md](./da-b1-owner-decisions-sectionaccents-15.md) |
| [da-b1-owner-review-sectionaccents-16.md](./da-b1-owner-review-sectionaccents-16.md) | 1458–1563 | 48 | sectionaccents | [da-b1-owner-decisions-sectionaccents-16.md](./da-b1-owner-decisions-sectionaccents-16.md) |
| [da-b1-owner-review-misc-01.md](./da-b1-owner-review-misc-01.md) | 37–1552 | 50 | misc | [da-b1-owner-decisions-misc-01.md](./da-b1-owner-decisions-misc-01.md) |
| [da-b1-owner-review-misc-02.md](./da-b1-owner-review-misc-02.md) | 1553–1575 | 17 | misc | [da-b1-owner-decisions-misc-02.md](./da-b1-owner-decisions-misc-02.md) |

## OWNER statusi

- **LABOT** — ieraksti NEW tekstu; copy-paste apply
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — vajag papildu kontekstu
- **FJERN `termins`** — sectionAccents: noņem akcenta terminu (apply map)

## Apply (pēc OWNER atgriešanas)

```bash
node scripts/build-da-b1-owner-apply-map.js
node scripts/apply-da-b1-owner-repair.js
```

## Svarīgi

- **PROPOSED_DA** = Luna ieteikums; OWNER var apstiprināt vai labot.
- **DE nemainīt** (`de`, `de_article`, Study DE piemēri).
- Production changes tikai pēc OWNER lēmumiem.
- Comparison `PROPOSED_DA` dažās vietās ir mehāniski — OWNER jāpārbauda dabiskums.

**Audits:** [da-b1-full-audit.md](./da-b1-full-audit.md)
