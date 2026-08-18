# DA–DE Kurss — NEEDS_SOURCE_REVIEW README

Findings: **20** · post-Luna re-audit · **41 LABOT** jau piemēroti PR [#581](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/581)

## GitHub

**Atver:** [da-kurss-needs-source-review-GITHUB.md](./da-kurss-needs-source-review-GITHUB.md)

Tiešā saite:

`https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-post-luna-owner-repair-fffe/reports/da-kurss-needs-source-review-GITHUB.md`

## Lokālie faili

| Fails | Mērķis |
|-------|--------|
| [da-kurss-needs-source-review.md](./da-kurss-needs-source-review.md) | Pilns pārskats |
| [da-kurss-needs-source-review-decisions.md](./da-kurss-needs-source-review-decisions.md) | Aizpildāma veidne |

## Workflow

1. Salīdzini **LV MASTER** (`data/courseLessons.js`) ar **CURRENT_DA**.
2. Aizpildi decisions — LABOT / NELABOT / FALSE_POSITIVE.
3. LABOT → pilns dāņu HTML/teksts (COPY-ONLY).
4. **DE nemainīt.**

Regenerēt: `node scripts/build-da-kurss-needs-source-review.js`
