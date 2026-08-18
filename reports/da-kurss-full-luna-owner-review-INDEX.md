# DA–DE Kurss — full Luna audit — OWNER review — indekss

Avots: [da-kurss-full-audit.md](da-kurss-full-audit.md) · **69 findings** (bez PASS/FALSE_POSITIVE)

Tas pats **Copy-Only** workflow kā A1/A2/B1 un section-pack:

1. Atver **review** failu grupai.
2. ChatGPT/OWNER aizpilda **OWNER_DECISION** (vai **decisions** tabulu / copy-paste bloku).
3. Atgriez aizpildītos failus — es veicu COPY-ONLY labojumus.

**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

## Severity (kopā)

| CRITICAL | HIGH | MEDIUM | LOW | NEEDS_SOURCE_REVIEW |
|----------|------|--------|-----|---------------------|
| 7 | 23 | 29 | 7 | 3 |

## Grupas

| # | Grupa | Findings | Review | Decisions |
|---|-------|----------|--------|-----------|
| 1 | Lektion 7 — exercise card struktūra | 4 | [review](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-reaudit-fffe/reports/da-kurss-full-luna-owner-review-01-structure-lesson7.md) | [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-reaudit-fffe/reports/da-kurss-full-luna-owner-decisions-01-structure-lesson7.md) |
| 2 | Statiskie HTML paneļi (6) | 18 | [review](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-reaudit-fffe/reports/da-kurss-full-luna-owner-review-02-static-html.md) | [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-reaudit-fffe/reports/da-kurss-full-luna-owner-decisions-02-static-html.md) |
| 3 | Lekcijas 1–7 (legacyHtml + saturs) | 20 | [review](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-reaudit-fffe/reports/da-kurss-full-luna-owner-review-03-lessons-01-07.md) | [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-reaudit-fffe/reports/da-kurss-full-luna-owner-decisions-03-lessons-01-07.md) |
| 4 | Lekcijas 8–21, training, UI | 27 | [review](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-reaudit-fffe/reports/da-kurss-full-luna-owner-review-04-lessons-08-21-misc.md) | [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-reaudit-fffe/reports/da-kurss-full-luna-owner-decisions-04-lessons-08-21-misc.md) |

## Vienots fails (visi 67)

- [da-kurss-owner-review.md](da-kurss-owner-review.md)
- [da-kurss-owner-decisions.md](da-kurss-owner-decisions.md)

## Apply (pēc OWNER)

```bash
node scripts/build-da-kurss-full-luna-owner-apply-map.js
node scripts/apply-da-kurss-full-luna-owner-repair.js
```

**DE nemainīt.** Mirror: `www/data/da/` + `www/languages/da/`.