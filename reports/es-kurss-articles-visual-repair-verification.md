# ES Kurss Artículos visual repair — verification

Generated: 2026-08-26T13:01:14.162Z

## Verdict

**PASS — ES KURSS ARTICLES VISUAL REPAIR APPLIED AND VERIFIED**

## Gates

```json
{
  "applyLog": "PASS (19/19)",
  "decisionsExact": "PASS",
  "mirror": "PASS",
  "syntax": "PASS",
  "structure": "PASS",
  "deUnchanged": "PASS",
  "unexpectedChanges": "PASS",
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
  "pass": true,
  "changed": [
    "data/es/courseLessons.js",
    "www/data/es/courseLessons.js"
  ],
  "unexpected": []
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
