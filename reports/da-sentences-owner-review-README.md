# DA–DE Sätze — OWNER review (GPT-5.6 Luna)

**Auditors:** GPT-5.6 Luna (READ-ONLY)

Avots: [da-sentences-full-audit.md](./da-sentences-full-audit.md) · [da-sentences-all-findings-by-sentence.md](./da-sentences-all-findings-by-sentence.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| sentences total | **796** |
| sentences audited | **796/796** |
| Kopā audit atradumi | **252** |
| OWNER kandidāti | **252** |
| CRITICAL | **27** |
| HIGH | **80** |
| MEDIUM | **114** |
| LOW | **31** |

## Faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Preview | [da-sentences-owner-review.md](./da-sentences-owner-review.md) | Pilns OWNER preview (252 findingi) |
| Decisions | [da-sentences-owner-decisions.md](./da-sentences-owner-decisions.md) | PENDING — aizpildīt OWNER |
| Accepted | [da-sentences-owner-accepted.md](./da-sentences-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [da-sentences-owner-review-GITHUB.md](./da-sentences-owner-review-GITHUB.md) | Visas saites |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis (`owner-decisions`)
- **LABOT** — OWNER apstiprina labojumu
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Mainīt tikai `(Sentence/Card ID, lv)`.
- Pirms apply: `actual current value === CURRENT_DA`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Production changes = 0 · DE changes = 0**
