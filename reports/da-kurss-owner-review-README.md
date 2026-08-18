# DA–DE Kurss — OWNER review (GPT-5.6 Luna)

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1

Avots: [da-kurss-full-audit.md](./da-kurss-full-audit.md) · [GitHub indekss](./da-kurss-owner-review-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| DA lauki audited | **1264/1264** |
| Lekcijas | **21/21** |
| Extra HTML topics | **6/6** |
| Kopā findings | **95** |
| CRITICAL | **17** |
| HIGH | **52** |
| MEDIUM | **18** |
| LOW | **5** |

## Faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Preview | [da-kurss-owner-review.md](./da-kurss-owner-review.md) | Pilns OWNER preview (95) |
| Decisions | [da-kurss-owner-decisions.md](./da-kurss-owner-decisions.md) | **Aizpildīt šeit** — PENDING |
| Accepted | [da-kurss-owner-accepted.md](./da-kurss-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [da-kurss-owner-review-GITHUB.md](./da-kurss-owner-review-GITHUB.md) | Visas saites PR #585 |

## Grupas (GitHub ērtākai review)

| Grupa | Preview | Decisions |
|-------|---------|-----------|
| 1–50 | [group01 preview](./da-kurss-owner-review-group01.md) | [group01 decisions](./da-kurss-owner-decisions-group01.md) |
| 51–95 | [group02 preview](./da-kurss-owner-review-group02.md) | [group02 decisions](./da-kurss-owner-decisions-group02.md) |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis
- **LABOT** — OWNER apstiprina precīzu gala vērtību
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Pirms apply: `actual current value === CURRENT_DA`, citādi SKIP.
- Mainīt tikai norādīto DA lauku; **DE = STRICT READ-ONLY**.

**Production changes = 0 · DE changes = 0**