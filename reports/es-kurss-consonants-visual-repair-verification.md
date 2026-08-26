# ES Kurss consonants visual repair — verification

Generated: 2026-08-26T12:14:48.521Z

## Verdict

**PASS — ES KURSS CONSONANTS VISUAL REPAIR APPLIED AND VERIFIED**

## applyLog

```json
{
  "pass": true,
  "log": {
    "requested": 2,
    "appliedVerified": 2,
    "alreadyAppliedVerified": 0,
    "mismatch": 0,
    "failed": 0,
    "details": [
      {
        "id": "ES-KURSS-CONSONANTS-001",
        "file": "data/es/courseLessons.js",
        "field": "COURSE_LESSON_HTML.kurssConsonantsLesson",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-CONSONANTS-002",
        "file": "www/data/es/courseLessons.js",
        "field": "COURSE_LESSON_HTML.kurssConsonantsLesson",
        "status": "APPLIED_VERIFIED"
      }
    ],
    "errors": []
  }
}
```

## decisionsExact

```json
{
  "pass": true,
  "rows": [
    {
      "id": "ES-KURSS-CONSONANTS-001",
      "field": "COURSE_LESSON_HTML.kurssConsonantsLesson",
      "ok": true
    },
    {
      "id": "ES-KURSS-CONSONANTS-002",
      "field": "COURSE_LESSON_HTML.kurssConsonantsLesson",
      "ok": true
    }
  ]
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
  "openSection": 10,
  "closeSection": 10,
  "brokenFound": [],
  "germanMissing": []
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
        "hasStall": true,
        "hasZahl": true,
        "noBroken": true,
        "germanPresent": true,
        "titleVisible": true,
        "subtitle": "chConsonantes y combinaciones de letrasLos sonidos consonánticos más importantes para principiantes.›",
        "panelVisible": true,
        "horizontalOverflow": false,
        "scrollable": false
      }
    },
    {
      "viewport": "mobile",
      "pass": true,
      "checks": {
        "hasStall": true,
        "hasZahl": true,
        "noBroken": true,
        "germanPresent": true,
        "titleVisible": true,
        "subtitle": "chConsonantes y combinaciones de letrasLos sonidos consonánticos más importantes para principiantes.›",
        "panelVisible": true,
        "horizontalOverflow": false,
        "scrollable": false
      }
    }
  ],
  "pageErrors": []
}
```
