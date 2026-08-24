#!/usr/bin/env node
/**
 * Reconstruct MASTER v1.11 = authoritative v1.10 (PR #641) + v1.11 patch only.
 */
const fs = require("fs");
const path = require("path");

const v110Path = path.join(__dirname, "../reports/temp/master-v110-baseline.md");
const outPath = path.join(__dirname, "../docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");

let doc = fs.readFileSync(v110Path, "utf8");

doc = doc.replace("**Versija:** 1.10\\", "**Versija:** 1.11\\");

const v111Section1 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v111-patch-section1.txt"),
  "utf8"
);

doc = doc.replace(
  /(Atšķirība starp flashkartes `\{lang\}` un `study\.translation`[\s\S]*?pretrunīgs\.)\n\n## 1\.2\. DE/,
  `$1\n${v111Section1}\n## 1.2. DE`
);

doc = doc.replace(
  /- `OWNER_DECISION`: tukšs\.\n\n`PROPOSED_<LANGUAGE>` ir tikai audita ieteikums/,
  "- `OWNER_DECISION`: tukšs.\n\nJa `MULTIPLE_TRANSLATIONS_DETECTED = true`, papildus obligāti (sk. §1.1.4):\n\n- detected translation candidates;\n- semantic assessment;\n- recommended main translation (ja ir);\n- `Status: OWNER_DECISION_REQUIRED` līdz OWNER lēmumam.\n\n`PROPOSED_<LANGUAGE>` ir tikai audita ieteikums"
);

const section725 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v111-patch-section725.txt"),
  "utf8"
);

doc = doc.replace(
  /`FINAL VERDICT = BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED`\n\n------------------------------------------------------------------------\n\n# 8\. OWNER REVIEW/,
  "`FINAL VERDICT = BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED`\n\n" + section725 + "# 8. OWNER REVIEW"
);

doc = doc.replace(
  /`NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW` netiek modificēti\.\n\nNedrīkst mainīt blakus kartes/,
  "`NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW` netiek modificēti.\n\nVairāku tulkojumu gadījumā obligāti §1.1.5: bez OWNER `NEW` ar tieši\nvienu galveno tulkojumu — `SKIP_OWNER_DECISION_REQUIRED`.\n\nNedrīkst mainīt blakus kartes"
);

const section101 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v111-patch-section101.txt"),
  "utf8"
);

doc = doc.replace(
  /Ja regression atrod kļūdu, dataset nav CLOSED\.\n\n------------------------------------------------------------------------\n\n# 11\. POST-REPAIR/,
  "Ja regression atrod kļūdu, dataset nav CLOSED.\n\n" + section101 + "------------------------------------------------------------------------\n\n# 11. POST-REPAIR"
);

doc = doc.replace(
  /- READ-ONLY integritāte = PASS\.\n\nRaw LLM finding count/,
  "- READ-ONLY integritāte = PASS;\n- `ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS = 0` (sk. §11.14);\n- `MULTIPLE_TRANSLATION_OWNER_UNRESOLVED = 0` (sk. §11.14).\n\nRaw LLM finding count"
);

const section1113 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v111-patch-section1113.txt"),
  "utf8"
);

doc = doc.replace(
  /viens pats nav pietiekams Kurss final closure\.\n\n------------------------------------------------------------------------\n\n# 12\. GIT/,
  "viens pats nav pietiekams Kurss final closure.\n\n" + section1113 + "------------------------------------------------------------------------\n\n# 12. GIT"
);

doc = doc.replace(
  /-   `OWNER_DECISION_REOPEN_REQUIRED = 0` vai OWNER atrisināts\.\n\nLīdz `POST_MERGE_MAIN_VERIFICATION`/,
  "-   `OWNER_DECISION_REOPEN_REQUIRED = 0` vai OWNER atrisināts;\n-   `ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS = 0` (sk. §11.14);\n-   `MULTIPLE_TRANSLATION_OWNER_UNRESOLVED = 0` (sk. §11.14);\n-   `MULTI_TRANSLATION_RESIDUAL_SCAN = PASS` (sk. §11.13).\n\nLīdz `POST_MERGE_MAIN_VERIFICATION`"
);

doc = doc.replace(
  /### Zināmās problēmas\n\nTikai reāli neatrisinātais/,
  fs.readFileSync(path.join(__dirname, "../reports/temp/master-v111-patch-section14.txt"), "utf8") +
    "### Zināmās problēmas\n\nTikai reāli neatrisinātais"
);

doc = doc.replace(
  /Requested, applied, already applied, mismatch, skipped, unexpected\./,
  "Requested, applied, already applied, mismatch, skipped, unexpected,\n`SKIP_OWNER_DECISION_REQUIRED`."
);

const changelog111 = fs.readFileSync(
  path.join(__dirname, "../reports/temp/master-v111-patch-changelog.txt"),
  "utf8"
);

doc = doc.replace(
  /# 20\. VERSION CHANGELOG\n\n## Version 1\.10/,
  "# 20. VERSION CHANGELOG\n" + changelog111 + "## Version 1.10"
);

doc = doc.replace(/## MASTER 1\.10 --- END/, "## MASTER 1.11 --- END");

fs.writeFileSync(outPath, doc);
console.log("Written", outPath, "lines:", doc.split("\n").length);
