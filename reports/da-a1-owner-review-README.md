# DA–DE A1 — OWNER review (Copy-Only workflow)

Tas pats princips kā **CS–DE Kurss — Lekcijas**:

1. Atver `da-a1-owner-review-*.md` failus.
2. Katram finding — **CURRENT_DA** ir nepareizais teksts production failā (`data/da/a1.js`, lauks `lv`).
3. **ChatGPT / tu** ieraksti pareizo dāņu variantu laukā **OWNER_DECISION** (vai izveido `da-a1-owner-decisions-groupXX.md` tabulu).
4. Atgriez aizpildītos failus — es veicu **COPY-ONLY** labojumus `data/da/a1.js` + `www/data/da/a1.js`.

## Faili

| Fails | Findings | Saturs |
|-------|----------|--------|
| `da-a1-owner-review-missing-study.md` | 10 | Trūkstošie Study objekti (§5) |
| `da-a1-owner-review-group01.md` | 12–61 | Lauku labojumi (50) |
| `da-a1-owner-review-group02.md` | 62–111 | Lauku labojumi (50) |
| `da-a1-owner-review-group03.md` | 112–143 | Lauku labojumi (32) |

**Kopā validēti atradumi auditā:** 143 (1 strukturāls CRITICAL nav copy-only — Study skaits 124→134)

## OWNER statusi (decisions tabulai)

- **LABOT** — ieraksti NEW tekstu; es copy-paste
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — vajag papildu kontekstu

## Svarīgi

- **PROPOSED_DA** = Luna ieteikums no audita; tu vari apstiprināt vai labot.
- **DE nemainīt** (`de`, `de_article`, Study DE piemēri).
- Production changes tikai pēc tavas atgriešanas.

**Audits:** `reports/da-a1-full-audit.md`
