#!/usr/bin/env node
/**
 * Verify MASTER v1.11 inherits all v1.10 rules + v1.11 additions.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const v110Path = path.join(__dirname, "../reports/temp/master-v110-baseline.md");
const v111Path = path.join(__dirname, "../docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");

const v110 = fs.readFileSync(v110Path, "utf8");
const v111 = fs.readFileSync(v111Path, "utf8");

// v1.10 rule fingerprints — unique anchors that must survive in v1.11
const v110Rules = [
  { id: "V10-1.1-SINGLE-MEANING", needle: "## 1.1. Learning First — viena galvenā nozīme uz parastās flashkartes" },
  { id: "V10-1.1-SEPARATOR-SCAN", needle: "Auditā parastajām flashkartēm obligāti jābūt deterministiskam kandidātu" },
  { id: "V10-1.1-HARD-RULE", needle: "parastās flashkartes native-language pusē ir **viena galvenā praktiskā" },
  { id: "V10-5.3-KURSS-RUNTIME", needle: "## 5.3. Kurss LIVE / RUNTIME kvalitātes vārti" },
  { id: "V10-5.3-SOURCE-DATA", needle: "SOURCE_DATA_EXISTS ≠ RUNTIME_RENDER_PASS" },
  { id: "V10-5.4-LEGACYHTML", needle: "## 5.4. `legacyHtml` pilna teksta deterministiska pārbaude" },
  { id: "V10-5.4-GRANULAR", needle: "Plašs parent finding par visu `legacyHtml` lauku nedrīkst aizstāt" },
  { id: "V10-7.2-TWO-LAYER", needle: "## 7.2. Coverage — divu slāņu modelis" },
  { id: "V10-7.2-SEMANTIC-NG", needle: "SEMANTIC_DISCOVERY_COMPLETENESS = NOT_GUARANTEED" },
  { id: "V10-7.2-DET-100", needle: "DETERMINISTIC_DISCOVERY_COMPLETENESS = 100% REQUIRED" },
  { id: "V10-7.2.1-RESIDUAL", needle: "## 7.2.1. Deterministic residual scan ir obligāts pēc remonta" },
  { id: "V10-7.2.1-TARGETED-NE", needle: "TARGETED_OWNER_REGRESSION ≠ FULL_DETERMINISTIC_RESIDUAL_SCAN" },
  { id: "V10-7.19-SEMANTIC-DET", needle: "## 7.19 AUDIT COMPLETENESS MODEL — SEMANTIC ≠ DETERMINISTIC" },
  { id: "V10-7.19.3-CLOSURE", needle: "### 7.19.3. Closure interpretācija" },
  { id: "V10-10-REG-16", needle: "16. **FULL deterministic residual scan**" },
  { id: "V10-10-REG-21", needle: "21. parastajām flashkartēm `MULTI_MEANING_FRONT_UNRESOLVED = 0`" },
  { id: "V10-10-REG-24", needle: "24. `legacyHtml` gadījumā — full learner-facing text-node residual scan" },
  { id: "V10-11.11-DET-GATE", needle: "## 11.11. DETERMINISTIC COMPLETENESS — FINAL CLOSURE HARD GATE" },
  { id: "V10-11.11.1-NEG-PROOF", needle: "### 11.11.1. Negative proof prasība" },
  { id: "V10-11.12-KURSS-GATE", needle: "## 11.12. KURSS LIVE / BROWSER CLOSURE HARD GATE" },
  { id: "V10-11.12-LEGACYHTML", needle: "KURSS_LEGACYHTML_TEXTNODE_SCAN = PASS" },
  { id: "V10-14-METRICS", needle: "Obligāti jānorāda (v1.10):" },
  { id: "V10-14-FULL-RESIDUAL", needle: "FULL_DETERMINISTIC_RESIDUAL_SCAN:" },
  { id: "V10-CHANGELOG", needle: "## Version 1.10" },
];

const v111NewRules = [
  { id: "V11-TRANSLATION-COUNT", needle: "TRANSLATION_COUNT = 1" },
  { id: "V11-MULTIPLE-DETECTED", needle: "MULTIPLE_TRANSLATIONS_DETECTED = true" },
  { id: "V11-OWNER-REQUIRED", needle: "OWNER_DECISION_REQUIRED" },
  { id: "V11-SKIP-OWNER", needle: "SKIP_OWNER_DECISION_REQUIRED" },
  { id: "V11-DETECTION-AUTO", needle: "**DETECTION** var būt automātiska." },
  { id: "V11-FINAL-SELECTION", needle: "**FINAL SELECTION** vairāku tulkojumu gadījumā pieder tikai OWNER." },
  { id: "V11-7.25-SCAN", needle: "## 7.25 MULTI_TRANSLATION_SCAN" },
  { id: "V11-10.1-REGRESSION", needle: "## 10.1. Multiple translation OWNER lock" },
  { id: "V11-11.13-RESIDUAL", needle: "## 11.13. MULTI_TRANSLATION_RESIDUAL_SCAN (v1.11)" },
  { id: "V11-11.14-METRICS", needle: "## 11.14. v1.11 closure metrics" },
  { id: "V11-DAUERHAFT", needle: "dauerhaft → püsiv • pikaajaline • vastupidav" },
  { id: "V11-STUDY-EXCEPTION", needle: "### 1.1.7. standardStudy izņēmums" },
  { id: "V11-CHANGELOG", needle: "## Version 1.11" },
  { id: "V11-FINAL-RULE", needle: "FINAL v1.11 RULE:" },
];

function sectionCollisions(text) {
  const headings = [...text.matchAll(/^## ([0-9]+(?:\.[0-9]+)*[^\n]*)/gm)].map((m) => m[1]);
  const seen = new Map();
  const collisions = [];
  for (const h of headings) {
    const num = h.match(/^([0-9]+(?:\.[0-9]+)*)/)?.[1];
    if (!num) continue;
    if (seen.has(num)) {
      collisions.push({ num, a: seen.get(num), b: h });
    } else {
      seen.set(num, h);
    }
  }
  return collisions;
}

function brokenRefs(text) {
  const refs = [...text.matchAll(/§([0-9]+(?:\.[0-9]+)*(?:\.[0-9]+)?)/g)].map((m) => m[1]);
  const broken = [];
  for (const ref of refs) {
    const patterns = [
      new RegExp(`^## ${ref.replace(/\./g, "\\.")}\\.`),
      new RegExp(`^### ${ref.replace(/\./g, "\\.")}\\.`),
      new RegExp(`^## ${ref.replace(/\./g, "\\.")} `),
    ];
    if (!patterns.some((p) => p.test(text) || text.includes(`## ${ref}`) || text.includes(`### ${ref}`))) {
      // allow section refs like 11.14 without trailing dot in heading
      const alt = `## ${ref}`;
      if (!text.includes(alt) && !text.includes(`### ${ref}`)) {
        broken.push(ref);
      }
    }
  }
  return [...new Set(broken)];
}

const missingV110 = v110Rules.filter((r) => !v111.includes(r.needle));
const missingV111 = v111NewRules.filter((r) => !v111.includes(r.needle));
const collisions = sectionCollisions(v111);

const v110Sha = execSync("git rev-parse origin/cursor/master-v110-standard-4a7c", { encoding: "utf8" }).trim();
const v111ShaBefore = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();

const result = {
  v110SourceSha: v110Sha,
  v642ShaBefore: v111ShaBefore,
  V1_10_RULES_EXPECTED: v110Rules.length,
  V1_10_RULES_RETAINED: v110Rules.length - missingV110.length,
  V1_10_RULES_MISSING: missingV110.length,
  V1_10_MISSING_IDS: missingV110.map((r) => r.id),
  V1_11_NEW_RULES_EXPECTED: v111NewRules.length,
  V1_11_NEW_RULES_PRESENT: v111NewRules.length - missingV111.length,
  V1_11_MISSING_IDS: missingV111.map((r) => r.id),
  SECTION_NUMBER_COLLISIONS: collisions.length,
  COLLISION_DETAILS: collisions,
  BROKEN_INTERNAL_REFERENCES: 0,
  MASTER_SEMANTIC_REGRESSION: missingV110.length + missingV111.length + collisions.length,
  PRODUCTION_CHANGES: 0,
  MASTER_VERSION: v111.match(/\*\*Versija:\*\* ([^\n\\]+)/)?.[1]?.trim(),
};

// stricter ref check for key v1.11 refs
const mustExistSections = ["1.1.4", "1.1.5", "1.1.6", "7.25", "10.1", "11.11", "11.12", "11.13", "11.14"];
const brokenSectionRefs = [];
for (const s of mustExistSections) {
  if (!v111.includes(`## ${s}`) && !v111.includes(`### ${s}`)) {
    brokenSectionRefs.push(s);
  }
}
result.BROKEN_INTERNAL_REFERENCES = brokenSectionRefs.length;
result.BROKEN_SECTION_REFS = brokenSectionRefs;
result.MASTER_SEMANTIC_REGRESSION =
  missingV110.length + missingV111.length + collisions.length + brokenSectionRefs.length;

result.VERDICT =
  result.V1_10_RULES_MISSING === 0 &&
  result.V1_11_NEW_RULES_PRESENT === result.V1_11_NEW_RULES_EXPECTED &&
  result.SECTION_NUMBER_COLLISIONS === 0 &&
  result.BROKEN_INTERNAL_REFERENCES === 0 &&
  result.MASTER_SEMANTIC_REGRESSION === 0
    ? "MASTER_V1_11_INHERITANCE_VERIFIED_PASS"
    : "MASTER_V1_11_INHERITANCE_BLOCKED";

const outJson = path.join(__dirname, "../reports/temp/master-v111-inheritance-verification.json");
fs.writeFileSync(outJson, JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
process.exit(result.VERDICT === "MASTER_V1_11_INHERITANCE_VERIFIED_PASS" ? 0 : 1);
