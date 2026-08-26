# ES Kurss pronunciation visual repair — verification

Generated: 2026-08-26T12:09:45.484Z

## Verdict

**PASS — ES KURSS PRONUNCIATION VISUAL REPAIR APPLIED AND VERIFIED**

## applyLog

```json
{
  "pass": true,
  "log": {
    "requested": 12,
    "appliedVerified": 12,
    "mismatch": 0,
    "failed": 0,
    "nelabotSkipped": 0,
    "details": [
      {
        "id": "ES-KURSS-PRON-001",
        "file": "data/es/courseLessons.js",
        "field": "COURSE_LESSON_HTML.kurssPronunciationLesson",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-002",
        "file": "www/data/es/courseLessons.js",
        "field": "COURSE_LESSON_HTML.kurssPronunciationLesson",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-001",
        "file": "languages/es/ui.js",
        "field": "kurss.vowelsSubtitle",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-003",
        "file": "www/languages/es/ui.js",
        "field": "kurss.vowelsSubtitle",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-003",
        "file": "languages/es/ui.js",
        "field": "kurss.consonantsSubtitle",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-005",
        "file": "www/languages/es/ui.js",
        "field": "kurss.consonantsSubtitle",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-005",
        "file": "languages/es/ui.js",
        "field": "kurss.vowelsTitle",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-007",
        "file": "www/languages/es/ui.js",
        "field": "kurss.vowelsTitle",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-007",
        "file": "languages/es/ui.js",
        "field": "kurss.consonantsTitle",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-009",
        "file": "www/languages/es/ui.js",
        "field": "kurss.consonantsTitle",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-009",
        "file": "languages/es/ui.js",
        "field": "kurss.consonantsDesc",
        "status": "APPLIED_VERIFIED"
      },
      {
        "id": "ES-KURSS-PRON-UI-011",
        "file": "www/languages/es/ui.js",
        "field": "kurss.consonantsDesc",
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
      "id": "ES-KURSS-PRON-001",
      "field": "COURSE_LESSON_HTML.kurssPronunciationLesson",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-002",
      "field": "COURSE_LESSON_HTML.kurssPronunciationLesson",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-001",
      "field": "kurss.vowelsSubtitle",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-003",
      "field": "kurss.vowelsSubtitle",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-003",
      "field": "kurss.consonantsSubtitle",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-005",
      "field": "kurss.consonantsSubtitle",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-005",
      "field": "kurss.vowelsTitle",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-007",
      "field": "kurss.vowelsTitle",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-007",
      "field": "kurss.consonantsTitle",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-009",
      "field": "kurss.consonantsTitle",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-009",
      "field": "kurss.consonantsDesc",
      "ok": true
    },
    {
      "id": "ES-KURSS-PRON-UI-011",
      "field": "kurss.consonantsDesc",
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
  "openSection": 15,
  "closeSection": 15,
  "hasBadClose": false,
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
      "viewport": "mobile",
      "pass": true,
      "checks": {
        "hasWarm": true,
        "hasGut": true,
        "noBroken": true,
        "titleVisible": true,
        "subtitle": "AaVocales: largas y cortasVocales largas y cortas con ejemplos.›",
        "panelVisible": true,
        "horizontalOverflow": false,
        "scrollable": false
      }
    },
    {
      "viewport": "desktop",
      "pass": true,
      "checks": {
        "hasWarm": true,
        "hasGut": true,
        "noBroken": true,
        "titleVisible": true,
        "subtitle": "AaVocales: largas y cortasVocales largas y cortas con ejemplos.›",
        "panelVisible": true,
        "horizontalOverflow": false,
        "scrollable": false
      }
    }
  ],
  "pageErrors": []
}
```
