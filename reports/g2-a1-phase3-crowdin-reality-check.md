# G2/A1 Phase 3 — Crowdin A1 translation reality check

**Classification:** `CROWDIN_A1_LUNA_FINDINGS_REQUIRE_REVALIDATION`
**Sample seed:** `g2-a1-crowdin-reality-check-v1`
**Output hash:** `43125d82e51e9fc17b5aa40944d04b5d3454b2f534a61cce9f59ab6b40d578b9`

## Short answers

- **Vai Crowdin tulkojumi eksistē?** YES
- **Vai tie ir staging vidē?** YES
- **Vai tie jau ir App production?** NO
- **Cik pārbaudīti?** 360 sample units (248 flagged + 62 controls + 50 SOURCE_LV clusters)
- **Cik no pārbaudītajiem Luna atradumiem ir reāli (sample)?** confirmed=0, likely=204, false-positive=44 (sample estimate only)
- **Vai 22 750 backlogu drīkst izmantot OWNER review?** NOT YET — see classification

CROWDIN_TRANSLATIONS_PRESENT: YES
CROWDIN_STAGING_COMPLETE: YES
CROWDIN_TRANSLATIONS_APPLIED_TO_APP: NO

## Crowdin staging

| Metric | Value |
|--------|------:|
| Languages complete | 31/31 |
| Total values | 92101 |
| Non-empty | 92101 |
| Empty | 0 |
| Identical to LV | 4121 |
| Identical to DE | 3562 |
| Multi-translation (•) values | 4283 |
| Placeholder/structure flags | 0 |

## Flagged sample (target-language)

| Metric | Value |
|--------|------:|
| Sample size | 248 |
| Confirmed real | 0 |
| Likely real | 204 |
| False positive | 44 |
| Insufficient evidence | 0 |
| Decisionable % | 100.00% |
| Confirmed+likely precision % | 82.26% |

## SOURCE_LV clusters (sample)

| Metric | Value |
|--------|------:|
| Clusters sampled | 50 |
| Member findings represented | 217 |
| Duplicate source repetitions | 0 |

## Unflagged controls

| Metric | Value |
|--------|------:|
| Control sample size | 62 |
| Control pass | 59 |
| Possible missed errors | 3 |
| Estimated miss rate % | 4.84% |

> Sample results are stratified estimates only, not exhaustive truth for all 22,750 findings.
> No OWNER decisions (LABOT/NELABOT/NEW) were made in this audit.

