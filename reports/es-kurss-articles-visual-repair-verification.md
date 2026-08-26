# ES Kurss Artículos visual repair — verification

Generated: 2026-08-26T13:53:59.595Z

## Verdict

**FAIL — ES KURSS ARTICLES VISUAL REPAIR**

## Gates

```json
{
  "applyLog": "PASS (19/19)",
  "decisionsExact": "PASS",
  "mirror": "PASS",
  "syntax": "PASS",
  "structure": "PASS",
  "deUnchanged": "PASS",
  "unexpectedChanges": "FAIL",
  "visual": "PASS",
  "consoleErrors": "PASS"
}
```

## Apply log

```json
{
  "pass": true,
  "log": {
    "requested": 19,
    "appliedVerified": 19,
    "currentMismatch": 0,
    "newMismatch": 0,
    "failed": 0,
    "details": [
      {
        "id": "ES-KURSS-ARTICLES-0001",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0002",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0003",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0004",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0005",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0006",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0007",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0008",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0009",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0010",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0011",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0012",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0013",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0014",
        "status": "APPLIED_VERIFIED",
        "note": "REMOVE_ELEMENT"
      },
      {
        "id": "ES-KURSS-ARTICLES-0015",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0016",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0017",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0018",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-ARTICLES-0019",
        "status": "APPLIED_VERIFIED"
      }
    ],
    "errors": []
  }
}
```

## Decisions exact

```json
{
  "pass": true,
  "rows": [
    {
      "id": "ES-KURSS-ARTICLES-0001",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0002",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0003",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0004",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0005",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0006",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0007",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0008",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0009",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0010",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0011",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0012",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0013",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0014",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0015",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0016",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0017",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0018",
      "ok": true
    },
    {
      "id": "ES-KURSS-ARTICLES-0019",
      "ok": true
    }
  ]
}
```

## HTML structure

```json
{
  "pass": true,
  "openSection": 5,
  "closeSection": 5,
  "hasBadClose": false,
  "brokenFound": [],
  "markersMissing": [],
  "articleRemnants": {
    "pass": true,
    "hits": []
  }
}
```

## Mirror

```json
{
  "pass": true,
  "mismatches": []
}
```

## Syntax

```json
{
  "pass": true,
  "errors": []
}
```

## DE unchanged

```json
{
  "pass": true,
  "diff": ""
}
```

## Unexpected changes

```json
{
  "pass": false,
  "changed": [
    "data/es/courseLessons.js",
    "languages/es/ui.js",
    "reports/es-kurss-articles-visual-owner-apply.md",
    "reports/es-kurss-articles-visual-owner-decisions.json",
    "reports/es-kurss-articles-visual-owner-decisions.md",
    "reports/es-kurss-articles-visual-repair-task.md",
    "reports/es-kurss-articles-visual-repair-verification.md",
    "reports/es-kurss-pronouns-visual-owner-apply.md",
    "reports/es-kurss-pronouns-visual-owner-decisions.json",
    "reports/es-kurss-pronouns-visual-owner-decisions.md",
    "reports/es-kurss-pronouns-visual-repair-task.md",
    "reports/es-kurss-pronouns-visual-repair-verification.md",
    "reports/es-kurss-sentence-structure-visual-owner-apply.md",
    "reports/es-kurss-sentence-structure-visual-owner-decisions.json",
    "reports/es-kurss-sentence-structure-visual-repair-task.md",
    "reports/es-kurss-sentence-structure-visual-repair-verification.md",
    "reports/es-kurss-verb-basics-visual-owner-apply.md",
    "reports/es-kurss-verb-basics-visual-owner-decisions.json",
    "reports/es-kurss-verb-basics-visual-repair-task.md",
    "reports/es-kurss-verb-basics-visual-repair-verification.md",
    "reports/temp/es-kurss-articles-visual-owner-apply-log.json",
    "reports/temp/es-kurss-pronouns-visual-owner-apply-log.json",
    "reports/temp/es-kurss-sentence-structure-visual-owner-apply-log.json",
    "reports/temp/es-kurss-verb-basics-visual-owner-apply-log.json",
    "scripts/apply-es-kurss-articles-visual-owner-copy-only.js",
    "scripts/apply-es-kurss-pronouns-visual-owner-copy-only.js",
    "scripts/apply-es-kurss-sentence-structure-visual-owner-copy-only.js",
    "scripts/apply-es-kurss-verb-basics-visual-owner-copy-only.js",
    "scripts/verify-es-kurss-articles-visual-repair.js",
    "scripts/verify-es-kurss-pronouns-visual-repair.js",
    "scripts/verify-es-kurss-sentence-structure-visual-repair.js",
    "scripts/verify-es-kurss-verb-basics-visual-repair.js",
    "www/data/es/courseLessons.js",
    "www/languages/es/ui.js"
  ],
  "unexpected": [
    "languages/es/ui.js",
    "reports/es-kurss-articles-visual-owner-decisions.md",
    "reports/es-kurss-pronouns-visual-owner-apply.md",
    "reports/es-kurss-pronouns-visual-owner-decisions.json",
    "reports/es-kurss-pronouns-visual-owner-decisions.md",
    "reports/es-kurss-pronouns-visual-repair-task.md",
    "reports/es-kurss-pronouns-visual-repair-verification.md",
    "reports/es-kurss-sentence-structure-visual-owner-apply.md",
    "reports/es-kurss-sentence-structure-visual-owner-decisions.json",
    "reports/es-kurss-sentence-structure-visual-repair-task.md",
    "reports/es-kurss-sentence-structure-visual-repair-verification.md",
    "reports/es-kurss-verb-basics-visual-owner-apply.md",
    "reports/es-kurss-verb-basics-visual-owner-decisions.json",
    "reports/es-kurss-verb-basics-visual-repair-task.md",
    "reports/es-kurss-verb-basics-visual-repair-verification.md",
    "reports/temp/es-kurss-pronouns-visual-owner-apply-log.json",
    "reports/temp/es-kurss-sentence-structure-visual-owner-apply-log.json",
    "reports/temp/es-kurss-verb-basics-visual-owner-apply-log.json",
    "scripts/apply-es-kurss-pronouns-visual-owner-copy-only.js",
    "scripts/apply-es-kurss-sentence-structure-visual-owner-copy-only.js",
    "scripts/apply-es-kurss-verb-basics-visual-owner-copy-only.js",
    "scripts/verify-es-kurss-pronouns-visual-repair.js",
    "scripts/verify-es-kurss-sentence-structure-visual-repair.js",
    "scripts/verify-es-kurss-verb-basics-visual-repair.js",
    "www/languages/es/ui.js"
  ]
}
```

## Visual smoke

```json
{
  "pass": true,
  "results": [
    {
      "viewport": "desktop",
      "pass": true,
      "checks": {
        "titleVisible": true,
        "hasMesa": true,
        "noBroken": true,
        "markersPresent": true,
        "noEnglishArticle": true,
        "panelVisible": true,
        "horizontalOverflow": false,
        "scrollable": false,
        "textLength": 3010
      }
    },
    {
      "viewport": "mobile",
      "pass": true,
      "checks": {
        "titleVisible": true,
        "hasMesa": true,
        "noBroken": true,
        "markersPresent": true,
        "noEnglishArticle": true,
        "panelVisible": true,
        "horizontalOverflow": false,
        "scrollable": false,
        "textLength": 3010
      }
    }
  ],
  "pageErrors": []
}
```
