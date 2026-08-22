# DA–DE Sätze — OWNER review (GPT-5.6 Luna)

**Auditors:** GPT-5.6 Luna (READ-ONLY)

Avots: [et-sentences-full-audit.md](./et-sentences-full-audit.md) · [et-sentences-all-findings-by-sentence.md](./et-sentences-all-findings-by-sentence.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| sentences total | **796** |
| sentences audited | **796/796** |
| Kopā audit atradumi | **166** |
| OWNER kandidāti | **166** |
| CRITICAL | **0** |
| HIGH | **62** |
| MEDIUM | **85** |
| LOW | **17** |

## Faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Preview | [et-sentences-owner-review.md](./et-sentences-owner-review.md) | Pilns OWNER preview (252 findingi) |
| Decisions | [et-sentences-owner-decisions.md](./et-sentences-owner-decisions.md) | PENDING — aizpildīt OWNER |
| Accepted | [et-sentences-owner-accepted.md](./et-sentences-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [et-sentences-owner-review-GITHUB.md](./et-sentences-owner-review-GITHUB.md) | Visas saites |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis (`owner-decisions`)
- **LABOT** — OWNER apstiprina labojumu
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Mainīt tikai `(Sentence/Card ID, lv)`.
- Pirms apply: `actual current value === CURRENT_ET`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Production changes = 0 · DE changes = 0**
