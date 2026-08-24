#!/usr/bin/env node
/**
 * Reconstruct MASTER v1.12 = authoritative v1.11 + v1.12 patch.
 */
const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "../docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");
let doc = fs.readFileSync(outPath, "utf8");

doc = doc.replace("**Versija:** 1.11\\", "**Versija:** 1.12\\");

doc = doc.replace(
  "## 1.1. Learning First — viena galvenā nozīme uz parastās flashkartes",
  "## 1.1. Viena kartīte = viena galvenā nozīme = viens galvenais tulkojums",
);

doc = doc.replace(
  "Šī lietotne nav vārdnīca. Parastajai flashkartei jābūt ātri uztveramai\nun nepārprotamai.",
  "Šī lietotne nav vārdnīca. Katrai learner-facing kartītei jābūt ātri uztveramai\nun nepārprotamai — ordinary flashcard, minimalStudy, standardStudy,\ncomparisonStudy un jebkurš cits Study tips.",
);

doc = doc.replace(
  "-   parastās flashkartes native-language pusē ir **viena galvenā praktickā\n    nozīme**;",
  "-   katram learner-facing galvenā tulkojuma laukā ir **viena galvenā praktiskā\n    nozīme** (`MAIN_TRANSLATION_COUNT = 1`);",
);

doc = doc.replace(
  "Auditā parastajām flashkartēm obligāti jābūt deterministiskam kandidātu\nscan uz:",
  "Auditā **visiem kartīšu tipiem** obligāti jābūt deterministiskam kandidātu\nscan uz visiem rendererī redzamiem galvenajiem tulkojuma laukiem (`MAIN_TRANSLATION_FIELD_INVENTORY`, sk. §1.1.10):\n\nScan uz:",
);

doc = doc.replace(
  "-   `TRANSLATION_COUNT = 1`;",
  "-   `MAIN_TRANSLATION_COUNT = 1` (v1.11 `TRANSLATION_COUNT = 1` ekvivalents);",
);

const section110 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v112-patch-section110.txt"),
  "utf8",
);

doc = doc.replace(
  "### 1.1.9. Normatīvs piemērs",
  section110 + "### 1.1.9. Normatīvs piemērs",
);

doc = doc.replace(
  "Scope:\n\n**100% visu parasto flashcard learner-facing tulkojuma lauku.**",
  "Scope:\n\n**100% visu kartīšu tipu learner-facing galveno tulkojuma lauku**\n(atbilstoši `MAIN_TRANSLATION_FIELD_INVENTORY`).",
);

const section1012 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v112-patch-section1012.txt"),
  "utf8",
);

doc = doc.replace(
  "6.  post-repair full residual scan apstiprina\n    `ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS = 0`.",
  "6.  post-repair full residual scan apstiprina\n    `MAIN_TRANSLATION_COUNT_VIOLATIONS = 0`;\n" + section1012,
);

const section1115 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v112-patch-section1115.txt"),
  "utf8",
);

doc = doc.replace(
  "`FINAL_CLOSED_ON_MAIN = BLOCKED`\n------------------------------------------------------------------------\n\n# 12. GIT",
  "`FINAL_CLOSED_ON_MAIN = BLOCKED`\n" + section1115 + "------------------------------------------------------------------------\n\n# 12. GIT",
);

doc = doc.replace(
  "### Multi-translation closure (v1.11)\n\n`ORDINARY_FLASHCARD_SCOPE`, `MULTI_TRANSLATION_SCAN_COVERAGE`,\n`MULTIPLE_TRANSLATION_CANDIDATES_RAW`,\n`MULTIPLE_TRANSLATION_VALIDATED_REAL`,\n`MULTIPLE_TRANSLATION_OWNER_UNRESOLVED`,\n`ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS`,\n`OWNER_AUTOMATIC_SELECTION`, `MULTI_TRANSLATION_RESIDUAL_SCAN`.",
  "### Multi-translation closure (v1.12)\n\n`CARD_SCOPE`, `MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE`,\n`UNMAPPED_MAIN_TRANSLATION_FIELDS`, `MULTI_TRANSLATION_SCAN_COVERAGE`,\n`MULTIPLE_MAIN_TRANSLATION_CANDIDATES_RAW`,\n`MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL`,\n`MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED`,\n`MAIN_TRANSLATION_COUNT_VIOLATIONS`, `OWNER_AUTOMATIC_SELECTION`,\n`MULTI_TRANSLATION_SCAN` (VALID/INVALID), `MULTI_TRANSLATION_RESIDUAL_SCAN`.",
);

const changelog112 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v112-patch-changelog.txt"),
  "utf8",
);

doc = doc.replace(
  "# 20. VERSION CHANGELOG\n\n## Version 1.11",
  "# 20. VERSION CHANGELOG\n" + changelog112 + "## Version 1.11",
);

doc = doc.replace("## MASTER 1.11 --- END", "## MASTER 1.12 --- END");

fs.writeFileSync(outPath, doc);
console.log("Written", outPath, "lines:", doc.split("\n").length);
