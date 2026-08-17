# DA–DE Kurss — OWNER review — statiskā UI paritāte (Copy-Only workflow)

Tas pats princips kā **DA–DE A1 / A2 / B1**:

1. Atver `da-kurss-owner-review-static-ui-parity.md`.
2. Katram finding — **CURRENT_DA** ir pašreizējais teksts production failā.
3. **ChatGPT / tu** ieraksti pareizo dāņu variantu laukā **OWNER_DECISION** (vai aizpildi `da-kurss-owner-decisions-static-ui-parity.md` tabulu).
4. Atgriez aizpildītos failus — es veicu **COPY-ONLY** labojumus:
   - `languages/da/ui.js` + `www/languages/da/ui.js`
   - `data/da/courseLessons.js` + `www/data/da/courseLessons.js`

## Faili

| Fails | Findings | Saturs |
|-------|----------|--------|
| `da-kurss-owner-review-static-ui-parity.md` | 1–23 | LV etalons + DA salīdzinājums (UI + 6 statiskie paneļi + Pronominer rindas) |
| `da-kurss-owner-decisions-static-ui-parity.md` | 1–23 | Tukša tabula + copy/paste bloks Owner atbildei |

## OWNER statusi

- **LABOT** — ieraksti NEW tekstu; es copy-paste
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam (piem. UI izvēlne OK)
- **NEEDS_SOURCE_REVIEW** — vajag papildu kontekstu

## Svarīgi

- **PROPOSED_DA** = ieteikums; tu vari apstiprināt vai labot.
- **DE nemainīt.**
- Izvēlnes kartītes (violetais `Aa`, tituls, apakšvirksts) ir kopīga struktūra visām valodām.
