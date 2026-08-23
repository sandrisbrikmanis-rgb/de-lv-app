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
| Kopā findings | **202** |
| CRITICAL | **0** |
| HIGH | **202** |
| MEDIUM | **0** |
| LOW | **0** |

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
| 51–95 | [group02 preview](./et-kurss-owner-review-group02.md) | [group02 decisions](./et-kurss-owner-decisions-group02.md) |

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