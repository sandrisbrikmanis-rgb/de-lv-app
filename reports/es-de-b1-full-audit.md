# ES–DE B1 pilns lingvistiskais audits (MASTER v1.9 FIRST_FULL_DISCOVERY)

**HEAD:** `59f439adc02fdf79dcda765e4871462866fbdaed`
**Standards:** `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Production changes:** **0** · **DE changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|--------:|
| Kartītes | **3367** |
| Study | **324** |
| Luna model | **gpt-5.6-luna** |
| Luna coverage | **100%** |
| API batches | **94** |
| Failed batches | **0** |
| Retry batches | **0** |
| Raw findings | **3795** |
| REAL | **3795** |
| OWNER_REVIEW_REQUIRED | **0** |
| FALSE_POSITIVE | **0** |
| SOURCE_DE_ISSUE | **0** |
| Unikālie OWNER | **2842** |
| Mirror | **PASS** |
| Syntax | **PASS** |

## **Verdict: READY FOR OWNER REVIEW**

## 2. Severity sadalījums (OWNER objekti)

- AUGSTA: **1415**
- KRITISKA: **326**
- VIDĒJA: **731**
- ZEMA: **370**

## 3. Kategoriju sadalījums (OWNER objekti)

- FOREIGN_REMNANT: **1028**
- SECTION_ACCENT: **108**
- TRANSLATION: **478**
- SEMANTICS: **558**
- GRAMMAR: **174**
- REGISTER: **101**
- ORTHOGRAPHY: **357**
- STUDY_STRUCTURE: **32**
- PUNCTUATION: **6**

## 4. Metodoloģija

| Rīks | Komanda |
|------|---------|
| Kolektors | `node scripts/audit-es-b1-collect.js` |
| Luna | `node scripts/audit-es-b1-linguistic.js` |
| Orķestrators | `node scripts/run-es-de-b1-full-audit.js` |
| Validācija | `node scripts/validate-es-de-b1-full-audit.js` |
