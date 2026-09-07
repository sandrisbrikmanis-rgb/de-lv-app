# G2/A1 Crowdin AI HTML — controlled apply report

**Classification:** `G2_A1_CROWDIN_AI_HTML_CONTROLLED_APPLY_PASS`

## START GATE — PASS

- START_GATE_HEAD: `5faaa32e08846618c2110c0197bd2d532513d53c`
- PR BASE: `c611840fc3e9db2da1d5ee222ce2a6a3123470fe`
- APPLY_EVIDENCE_COMMIT: `10c26d60195ed7a28fb566c0c099f7f3bfb903be`
- OWNER LABOT: 5/5

## Apply results — 5/5

| # | Lang | String ID | Key | Write | Read-back | Export=NEW |
|---:|---|---:|---|---|---|---|
| 1 | fi | 9366 | `a1.card.a1-mann.study.tip[0]` | patched | pass | ✓ |
| 2 | sl | 6672 | `a1.card.a1-appetit.study.explanation[2]` | patched | pass | ✓ |
| 3 | sl | 6794 | `a1.card.a1-aufs.study.important[0]` | patched | pass | ✓ |
| 4 | sl | 8980 | `a1.card.a1-lang.study.examples[5].native` | patched | pass | ✓ |
| 5 | sl | 8988 | `a1.card.a1-lang.study.explanation[3]` | patched | pass | ✓ |

## Export diff

- fi changed: **1** (expected 1)
- sl changed: **4** (expected 4)
- unexpected: **0**
- fi export refreshed after 2s delay; initial export cache was stale

## HTML validation (allowlist keys)

- fi issues: **0**
- sl issues: **0**

## Protection

- Crowdin modifying writes: **5**
- approved delta: **0**
- AI/MT/Luna calls: **0**
- production/DE/UI diff: **0**
- **Production import: NOT performed**

PR: https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/717