# DA–DE Kurss — OWNER review — pilns komplekts (Copy-Only workflow)

Tas pats princips kā **DA–DE A1 / A2 / B1**:

1. Atver **`da-kurss-owner-review-INDEX.md`** — tur ir visas 30 sadaļas ar saitēm.
2. Katrai sadaļai ir pāris: `da-kurss-owner-review-<sadaļa>.md` + `da-kurss-owner-decisions-<sadaļa>.md`.
3. **ChatGPT / tu** aizpilda **OWNER_DECISION** (vai decisions tabulu).
4. Atgriez aizpildītos failus — es veicu **COPY-ONLY** labojumus:
   - `languages/da/ui.js` + `www/languages/da/ui.js`
   - `data/da/courseLessons.js` + `www/data/da/courseLessons.js`

## Indekss

| Fails | Saturs |
|-------|--------|
| [`da-kurss-owner-review-INDEX.md`](da-kurss-owner-review-INDEX.md) | Visas sadaļas (1271 findings) ar GitHub un raw saitēm |
| `da-kurss-owner-review-01-menu-shell.md` … `10-lesson-21.md` | Review pa sadaļām |
| `da-kurss-owner-decisions-01-menu-shell.md` … `10-lesson-21.md` | Tukšas tabulas + copy/paste bloki |

## Sadaļu karte

| Slug | Sadaļa |
|------|--------|
| `01-menu-shell` | Galvenā Kurss izvēlne |
| `02-pronunciation-menu` | Udtale apakšizvēlne |
| `03-articles` … `08-sentence-structure` | 6 statiskie HTML paneļi |
| `09-lessons-menu` | Lektioner izvēlne (1–21) |
| `10-lesson-01` … `10-lesson-21` | Katras lekcijas saturs |

## OWNER statusi

- **LABOT** — ieraksti NEW tekstu; es copy-paste
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam (dabīgs dāņu tulkojums)
- **NEEDS_SOURCE_REVIEW** — vajag papildu kontekstu

## Svarīgi

- **PROPOSED_DA** = ieteikums; tu vari apstiprināt vai labot.
- **DE nemainīt.**
- Vecākais `static-ui-parity` fails (23 findings) ir apakškopa no `01`–`08`; pilnam audita komplektam lieto **INDEX** failu.

## Ģenerēšana

```bash
node scripts/build-da-kurss-owner-review-pack.js
```
