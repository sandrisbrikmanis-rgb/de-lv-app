# Murko (dLib TXT) — SL pilot vs 6 DE lemmas

**Resource:** [dLib URN:NBN:SI:DOC-T28EEL0U](https://www.dlib.si/details/URN:NBN:SI:DOC-T28EEL0U) — *Deutsch-Slowenisches und Slowenisch-Deutsches Handwörterbuch* (Anton Murko / Greiner).

| Volume | Role (local file) | dLib TEXT stream |
|--------|-------------------|------------------|
| 1 | `murko-dlib-vol1-de-sl.txt` | [vol1 TEXT](https://www.dlib.si/stream/URN:NBN:SI:DOC-T28EEL0U/c6e13f7f-f297-4d2f-99f1-c05cfda85d29/TEXT) |
| 2 | `murko-dlib-vol2-sl-de.txt` | [vol2 TEXT](https://www.dlib.si/stream/URN:NBN:SI:DOC-T28EEL0U/5453dc73-29ff-4ad0-a156-8bf187c93dfe/TEXT) |

Re-download needs a dLib session cookie (`curl -c/-b` after opening the details page); bare stream GET returns WAF HTML.

## DE → SL (6 pilot lemmas)

| Lemma | found | DE form in TXT | SL equivalent (if any) | Evidence |
|-------|-------|----------------|------------------------|----------|
| Haus | **true** | `HauS, n.` | `dom`, `hifha`/`hifhen`, `liram` (St.) | vol1 L4880; [vol1 stream](https://www.dlib.si/stream/URN:NBN:SI:DOC-T28EEL0U/c6e13f7f-f297-4d2f-99f1-c05cfda85d29/TEXT) |
| arbeiten | **true** | `Arbeiten v. a.` | `delati`, `opravljati` | vol2 L12513; [vol2 stream](https://www.dlib.si/stream/URN:NBN:SI:DOC-T28EEL0U/5453dc73-29ff-4ad0-a156-8bf187c93dfe/TEXT) |
| Kleingeld | false | — | — | no headword; see `Pfennig`/`dnarji` for small money |
| bewirten | false* | `(bewirten)` sense gloss only | `sadobiti`, `perdobiti`, `obdershati` | vol1 L1974 (under Aus-/Äußern verb block, not lemma) |
| Grenzkonflikt | false | — | — | no `Konflikt`; border lexemes only |
| Machtgier | false | — | — | no compound; separate Macht/Gier entries |

\*Same strict headword rule as Cigale/Janežič pilots (`found: false`).

**Strict score: 2/6** (Haus, arbeiten). Subgloss-only bewirten would make 3/6 but is not counted for parity.

## SL → DE reverse pilot (`hiša` → Haus)

| Field | Value |
|-------|--------|
| Modern query | `hiša` |
| Matched in TXT | `hifha`, `hirha`, `hifh` (1833 orthography) |
| found | **true** |
| DE | `HauS, n.` / *das Haus* |
| Evidence | vol2 L15765–15766 (`HauS, n. … hifha, hirha … dom`); L16069 `hifh, na (gofpodizhna)` |

## Comparison (same 6 lemmas)

| Source | DE→SL | Reverse TXT | Notes |
|--------|-------|-------------|--------|
| Cigale 1860 (IA) | 2/6 | IA OCR only | primary today |
| Janežič Taschen 1866 | 2/6 | IA | |
| Janežič 1905 | 1/6 | IA | arbeiten |
| **Murko dLib TXT** | **2/6** strict | **yes** (`hiša`↔`hifha`→Haus) | 2 vols; Fraktur/OCR noise |

## Recommendation

**Keep Cigale 1860 as `sl` primary** in discovery/pilot registry. **Murko dLib TXT = supplementary**: institutional bidirectional TEXT and dialectal variants (`hifha`, `liram`), but no better strict DE→SL coverage on the six lemmas and heavier normalization cost. Do not promote to primary until lemma/orthography adapters are defined for Murko’s split volumes and Bohorič spelling.

Machine-readable: `pdf-bilingual-dictionary-sl-murko-dlib-pilot.json`.
