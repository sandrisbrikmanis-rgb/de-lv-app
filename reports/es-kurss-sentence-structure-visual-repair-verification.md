# ES Kurss Sentence structure visual repair — verification

Generated: 2026-08-26T13:23:39.053Z

## Verdict

**PASS — ES KURSS SENTENCE STRUCTURE VISUAL REPAIR APPLIED AND VERIFIED**

## applyLog

```json
{
  "pass": true,
  "log": {
    "requested": 2,
    "appliedVerified": 2,
    "mismatch": 0,
    "failed": 0,
    "details": [
      {
        "id": "ES-KURSS-SENTENCE-STRUCTURE-0001",
        "file": "data/es/courseLessons.js",
        "field": "COURSE_LESSON_HTML.kurssSentenceStructureLesson",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-SENTENCE-STRUCTURE-0002",
        "file": "www/data/es/courseLessons.js",
        "field": "COURSE_LESSON_HTML.kurssSentenceStructureLesson",
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
      "id": "ES-KURSS-SENTENCE-STRUCTURE-0001",
      "ok": true
    },
    {
      "id": "ES-KURSS-SENTENCE-STRUCTURE-0002",
      "ok": true
    }
  ],
  "coverage": 2
}
```

## content

```json
{
  "pass": true,
  "sectionCount": 4,
  "firstSectionExamples": 8,
  "wasExamples": 4,
  "nichtExamples": 4,
  "lesson2Examples": 19,
  "forbiddenFound": [],
  "hasGehtIhr": true,
  "hasSingtIhr": true,
  "hasFinalPair": true
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
  "openSection": 4,
  "closeSection": 4
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
    "www/data/es/courseLessons.js"
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
        "hasVais": true,
        "hasFinal": true,
        "panelVisible": true
      }
    },
    {
      "viewport": "mobile",
      "pass": true,
      "checks": {
        "hasTitle": true,
        "hasVais": true,
        "hasFinal": true,
        "panelVisible": true
      }
    }
  ],
  "pageErrors": []
}
```
