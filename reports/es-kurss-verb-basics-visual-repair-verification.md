# ES Kurss Verb basics visual repair — verification

Generated: 2026-08-26T13:21:21.853Z

## Verdict

**PASS — ES KURSS VERB BASICS VISUAL REPAIR APPLIED AND VERIFIED**

## applyLog

```json
{
  "pass": true,
  "log": {
    "requested": 6,
    "appliedVerified": 6,
    "mismatch": 0,
    "failed": 0,
    "details": [
      {
        "id": "ES-KURSS-VERB-BASICS-0001",
        "file": "data/es/courseLessons.js",
        "field": "COURSE_LESSON_HTML.kurssVerbBasicsLesson",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-VERB-BASICS-0002",
        "file": "www/data/es/courseLessons.js",
        "field": "COURSE_LESSON_HTML.kurssVerbBasicsLesson",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-VERB-BASICS-0003",
        "file": "languages/es/ui.js",
        "field": "COURSE_UI.sections.verbBasics",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-VERB-BASICS-0004",
        "file": "www/languages/es/ui.js",
        "field": "COURSE_UI.sections.verbBasics",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-VERB-BASICS-0005",
        "file": "languages/es/ui.js",
        "field": "COURSE_UI.sections.verbBasicsDesc",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-VERB-BASICS-0006",
        "file": "www/languages/es/ui.js",
        "field": "COURSE_UI.sections.verbBasicsDesc",
        "status": "APPLIED_VERIFIED"
      }
    ],
    "errors": []
  }
}
```

## decisions

```json
{
  "pass": true,
  "rows": [
    {
      "id": "ES-KURSS-VERB-BASICS-0001",
      "ok": true
    },
    {
      "id": "ES-KURSS-VERB-BASICS-0002",
      "ok": true
    },
    {
      "id": "ES-KURSS-VERB-BASICS-0003",
      "ok": true
    },
    {
      "id": "ES-KURSS-VERB-BASICS-0004",
      "ok": true
    },
    {
      "id": "ES-KURSS-VERB-BASICS-0005",
      "ok": true
    },
    {
      "id": "ES-KURSS-VERB-BASICS-0006",
      "ok": true
    }
  ],
  "coverage": 6
}
```

## content

```json
{
  "pass": true,
  "verbsPresent": 11,
  "totalExamples": 88,
  "conjugationRows": 77,
  "perVerb": {
    "kommen": 7,
    "gehen": 7,
    "stehen": 7,
    "singen": 7,
    "spielen": 7,
    "arbeiten": 7,
    "fragen": 7,
    "antworten": 7,
    "rechnen": 7,
    "zeichnen": 7,
    "tun": 7
  },
  "sectionCount": 13,
  "forbiddenFound": [],
  "ihrTu": 0,
  "hasExamplesWrapper": true,
  "hasExampleItems": true
}
```

## mirror

```json
{
  "pass": true,
  "mismatches": []
}
```

## syntax

```json
{
  "pass": true,
  "errors": []
}
```

## html

```json
{
  "pass": true,
  "openSection": 13,
  "closeSection": 13
}
```

## deChanges

```json
{
  "pass": true,
  "diff": ""
}
```

## unexpected

```json
{
  "pass": true,
  "changed": [
    "data/es/courseLessons.js",
    "languages/es/ui.js",
    "www/data/es/courseLessons.js",
    "www/languages/es/ui.js"
  ],
  "unexpected": []
}
```

## visual

```json
{
  "pass": true,
  "results": [
    {
      "viewport": "desktop",
      "pass": true,
      "checks": {
        "hasTitle": true,
        "hasKommen": true,
        "noBroken": true,
        "panelVisible": true
      }
    },
    {
      "viewport": "mobile",
      "pass": true,
      "checks": {
        "hasTitle": true,
        "hasKommen": true,
        "noBroken": true,
        "panelVisible": true
      }
    }
  ],
  "pageErrors": []
}
```
