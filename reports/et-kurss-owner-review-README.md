# ET–DE Kurss — OWNER review (GPT-5.6 Luna)

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9

Avots: [et-kurss-full-audit.md](./et-kurss-full-audit.md) · [GitHub indekss](./et-kurss-owner-review-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| ET lauki audited | **100% object coverage** |
| Lekcijas | **21** |
| Extra HTML topics | **6** |
| Kopā findings | **323** |
| CRITICAL | **0** |
| HIGH | **249** |
| MEDIUM | **65** |
| LOW | **6** |

## Faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Preview (authoritative) | [et-kurss-owner-view.md](./et-kurss-owner-view.md) | Pilns OWNER VIEW |
| Preview (legacy alias) | [et-kurss-owner-review.md](./et-kurss-owner-review.md) | Atpakaļsaderība |
| Decisions | [et-kurss-owner-decisions.md](./et-kurss-owner-decisions.md) | **Aizpildīt šeit** — PENDING |
| Accepted | [et-kurss-owner-accepted.md](./et-kurss-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [et-kurss-owner-review-GITHUB.md](./et-kurss-owner-review-GITHUB.md) | Visas saites |

## Grupas (GitHub ērtākai review)

| Grupa | Preview | Decisions |
|-------|---------|-----------|
| 1–50 | [group01 preview](./et-kurss-owner-review-group01.md) | [group01 decisions](./et-kurss-owner-decisions-group01.md) |
| 51–100 | [group02 preview](./et-kurss-owner-review-group02.md) | [group02 decisions](./et-kurss-owner-decisions-group02.md) |
| 101–150 | [group03 preview](./et-kurss-owner-review-group03.md) | [group03 decisions](./et-kurss-owner-decisions-group03.md) |
| 151–200 | [group04 preview](./et-kurss-owner-review-group04.md) | [group04 decisions](./et-kurss-owner-decisions-group04.md) |
| 201–250 | [group05 preview](./et-kurss-owner-review-group05.md) | [group05 decisions](./et-kurss-owner-decisions-group05.md) |
| 251–300 | [group06 preview](./et-kurss-owner-review-group06.md) | [group06 decisions](./et-kurss-owner-decisions-group06.md) |
| 301–323 | [group07 preview](./et-kurss-owner-review-group07.md) | [group07 decisions](./et-kurss-owner-decisions-group07.md) |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis
- **LABOT** — OWNER apstiprina precīzu gala vērtību
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Pirms apply: `actual current value === CURRENT_ET`, citādi SKIP.
- Mainīt tikai norādīto ET lauku; **DE = STRICT READ-ONLY**.

**Production changes = 0 · DE changes = 0**