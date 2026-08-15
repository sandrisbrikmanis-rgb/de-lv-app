#!/usr/bin/env node
"use strict";
/**
 * READ-ONLY targeted regression after OWNER Výslovnost COPY-ONLY apply.
 * Usage: node scripts/audit-cs-kurs-pronunciation-owner-apply-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const APPLY_MAP = path.join(ROOT, "reports/temp/cs-kurs-pronunciation-owner-apply-map-merged.json");
const REVIEW_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-review-all-findings.md");
const REPORT_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-apply-regression.md");
const PRIMARY_CS = path.join(ROOT, "data/cs/courseLessons.js");
const WWW_CS = path.join(ROOT, "www/data/cs/courseLessons.js");
const LV_LESSONS = path.join(ROOT, "data/courseLessons.js");
const DE_LESSONS = path.join(ROOT, "data/de/courseLessons.js");

const { extractPronunciationUnits } = require("./lib/cs-kurs-pronunciation-audit-extract");
const { MOJIBAKE } = require("./lib/cs-audit-helpers");

const NELABOT_FALSE_POSITIVE_IDS = new Set([
  "033", "049", "054", "055", "056", "065", "066", "067", "070", "084", "102", "109", "124", "127",
]);

function loadWindow(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function parseOwnerStatuses(md) {
  const re = /^## Finding (\d{3})\n[\s\S]*?### OWNER\n\*\*Status:\*\* ([A-Z_]+)/gm;
  const statuses = {};
  let m;
  while ((m = re.exec(md)) !== null) {
    statuses[m[1]] = m[2];
  }
  return statuses;
}

function parseFindingBlocks(md) {
  const re = /^## Finding (\d{3})\n([\s\S]*?)(?=\n---\n\n## Finding |\n## End)/gm;
  const blocks = {};
  let m;
  while ((m = re.exec(md)) !== null) {
    blocks[m[1]] = m[0];
  }
  return blocks;
}

function extractAuditCurrent(block) {
  const raw = block.match(/### CURRENT\n([\s\S]*?)### Luna PROPOSED/)?.[1]?.trim() || "";
  return raw.replace(/^```\n?/, "").replace(/\n?```$/, "").trim();
}

function gitDiffPaths() {
  try {
    const out = execSync("git diff --name-only HEAD", { encoding: "utf8", cwd: ROOT }).trim();
    return out ? out.split("\n").filter(Boolean) : [];
  } catch {
    return [];
  }
}

function main() {
  const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const reviewMd = fs.readFileSync(REVIEW_MD, "utf8");
  const ownerStatuses = parseOwnerStatuses(reviewMd);
  const findingBlocks = parseFindingBlocks(reviewMd);
  const { units } = extractPronunciationUnits();
  const unitById = Object.fromEntries(units.map((u) => [u.unitId, u]));

  const applyByFid = Object.fromEntries(map.apply.map((e) => [e.findingId, e]));

  const report = {
    findingsAccounted: Object.keys(ownerStatuses).length,
    labotResolved: 0,
    labotUnresolved: [],
    nelabotRetained: 0,
    nelabotChanged: [],
    falsePositiveRetained: 0,
    falsePositiveChanged: [],
    wrongReplacement: [],
    currentMismatch: 0,
    foreignLeftoversInScope: 0,
    mojibake: 0,
    invisibleControlChars: 0,
    phoneticRegression: [],
    structuralParity: "PASS",
    primaryWww: fs.readFileSync(PRIMARY_CS, "utf8") === fs.readFileSync(WWW_CS, "utf8") ? "PASS" : "FAIL",
    deChanges: 0,
    lvMasterChanges: 0,
    unexpectedChanges: [],
    ownerOverrideChecks: [],
    overall: "PASS",
  };

  for (const [num, status] of Object.entries(ownerStatuses)) {
    const block = findingBlocks[num];
    if (!block) continue;
    const fid = block.match(/\*\*Finding ID:\*\* (.+)/)?.[1]?.trim();
    if (!fid) continue;
    const unit = unitById[fid];
    if (!unit) {
      report.structuralParity = "FAIL";
      report.unexpectedChanges.push(`Missing unit for finding #${num}: ${fid}`);
      continue;
    }
    const production = unit.currentCs;
    const auditCurrent = extractAuditCurrent(block);

    if (status === "LABOT") {
      const apply = applyByFid[fid];
      if (!apply) {
        report.labotUnresolved.push({ num, fid, reason: "not in merged apply map" });
        continue;
      }
      if (production !== apply.ownerNew) {
        report.labotUnresolved.push({
          num,
          fid,
          expected: apply.ownerNew,
          got: production,
        });
      } else {
        report.labotResolved++;
      }
    } else if (status === "NELABOT" || status === "FALSE_POSITIVE") {
      const supersededApply = applyByFid[fid];
      const expected =
        supersededApply && status === "FALSE_POSITIVE" ? supersededApply.ownerNew : auditCurrent;
      if (production !== expected) {
        const entry = { num, fid, status, auditCurrent, production, expected };
        if (status === "NELABOT") report.nelabotChanged.push(entry);
        else report.falsePositiveChanged.push(entry);
      } else {
        if (status === "NELABOT") report.nelabotRetained++;
        else report.falsePositiveRetained++;
      }
    }
  }

  const checks = [
    { label: "sitzen (zicen)", pattern: /sitzen \(zicen\)/, anti: /sitzen \(cicen\)/ },
    { label: "Mädchen (mētchen) retained", pattern: /Mädchen \(mētchen\)/, required: true },
    { label: "Huhn (hūn) retained", pattern: /Huhn \(hūn\)/, required: true },
    { label: "wachsen chs→ks", pattern: /wachsen se skupina chs vyslovuje jako ks/ },
    { label: "wieder -er [ɐ]", pattern: /wieder se skupina ie vyslovuje jako dlouhé í; koncovka -er se vyslovuje přibližně jako \[ɐ\]/ },
    { label: "hinter -er [ɐ]", pattern: /hinter se h vyslovuje, i je krátké a koncovka -er se vyslovuje přibližně jako \[ɐ\]/ },
    { label: "flajsich Ich-Laut", pattern: /fleißig \(flajsich; ch jako německý Ich-Laut \[ç\]\)/ },
    { label: "dojtlich", pattern: /deutlich \(dojtlich\)/, anti: /Eu se vyslovuje[^]*doitlich/ },
    { label: "no smags LV", pattern: /smags/, anti: true },
  ];

  const csText = fs.readFileSync(PRIMARY_CS, "utf8");
  for (const c of checks) {
    const ok = c.anti === true ? !c.pattern.test(csText) : c.pattern.test(csText);
    const bad = c.anti && c.anti !== true ? c.anti.test(csText) : false;
    const pass = ok && !bad;
    report.ownerOverrideChecks.push({ label: c.label, pass });
    if (!pass) report.phoneticRegression.push(c.label);
  }

  const applyFids = new Set(map.apply.map((e) => e.findingId));
  const fpFids = new Set(
    Object.entries(ownerStatuses)
      .filter(([, s]) => s === "FALSE_POSITIVE")
      .map(([num]) => findingBlocks[num]?.match(/\*\*Finding ID:\*\* (.+)/)?.[1]?.trim())
      .filter(Boolean),
  );

  for (const u of units) {
    const t = u.currentCs || "";
    if (MOJIBAKE.test(t)) report.mojibake++;
    if (applyFids.has(u.unitId) && /[\u200B-\u200D\uFEFF\u00AD]/.test(t)) {
      report.invisibleControlChars++;
    }
    if (
      fpFids.has(u.unitId) ||
      /[āēīūģķļņĀĒĪŪĢĶĻŅ]/.test(t) &&
        /\([^\)]*[īūāēōĪŪĀĒŌ][^\)]*\)/.test(t)
    ) {
      continue;
    }
    if (/[āēīūģķļņĀĒĪŪĢĶĻŅ]/.test(t)) {
      report.foreignLeftoversInScope++;
    }
  }

  const changedPaths = gitDiffPaths();
  const allowed = new Set([
    "data/cs/courseLessons.js",
    "www/data/cs/courseLessons.js",
    "reports/cs-kurs-pronunciation-owner-apply.md",
    "reports/cs-kurs-pronunciation-owner-apply-regression.md",
    "reports/temp/cs-kurs-pronunciation-owner-apply-map-merged.json",
    "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-101-150.json",
    "scripts/apply-cs-kurs-pronunciation-owner-copy-only.js",
    "scripts/audit-cs-kurs-pronunciation-owner-apply-regression.js",
  ]);
  for (const p of changedPaths) {
    if (!allowed.has(p)) report.unexpectedChanges.push(p);
    if (p.startsWith("data/de/") || p === "data/courseLessons.js") {
      if (p.includes("/de/")) report.deChanges++;
      if (p === "data/courseLessons.js") report.lvMasterChanges++;
    }
  }

  const fail =
    report.findingsAccounted !== 268 ||
    report.labotUnresolved.length > 0 ||
    report.nelabotChanged.length > 0 ||
    report.falsePositiveChanged.length > 0 ||
    report.phoneticRegression.length > 0 ||
    report.mojibake > 0 ||
    report.invisibleControlChars > 0 ||
    report.primaryWww !== "PASS" ||
    report.deChanges > 0 ||
    report.lvMasterChanges > 0 ||
    report.unexpectedChanges.length > 0;

  report.overall = fail ? "FAIL" : "PASS";

  const lines = [
    "# CS–DE Kurss Výslovnost — OWNER apply targeted regression",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Result: **" + report.overall + "**",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| Findings accounted | ${report.findingsAccounted}/268 |`,
    `| LABOT resolved | ${report.labotResolved}/254 |`,
    `| LABOT unresolved | ${report.labotUnresolved.length} |`,
    `| NELABOT retained | ${report.nelabotRetained}/9 |`,
    `| NELABOT changed | ${report.nelabotChanged.length} |`,
    `| FALSE_POSITIVE retained | ${report.falsePositiveRetained}/5 |`,
    `| FALSE_POSITIVE changed | ${report.falsePositiveChanged.length} |`,
    `| Mojibake in scope | ${report.mojibake} |`,
    `| Invisible/control chars | ${report.invisibleControlChars} |`,
    `| primary ↔ www | ${report.primaryWww} |`,
    `| DE changes | ${report.deChanges} |`,
    `| LV MASTER changes | ${report.lvMasterChanges} |`,
    `| Unexpected file changes | ${report.unexpectedChanges.length} |`,
    "",
    "## OWNER override spot checks",
    "",
    ...report.ownerOverrideChecks.map((c) => `- ${c.pass ? "PASS" : "FAIL"}: ${c.label}`),
    "",
  ];

  if (report.labotUnresolved.length) {
    lines.push("## LABOT unresolved", "", JSON.stringify(report.labotUnresolved, null, 2), "");
  }
  if (report.nelabotChanged.length) {
    lines.push("## NELABOT changed", "", JSON.stringify(report.nelabotChanged, null, 2), "");
  }
  if (report.falsePositiveChanged.length) {
    lines.push("## FALSE_POSITIVE changed", "", JSON.stringify(report.falsePositiveChanged, null, 2), "");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"), "utf8");
  console.log(JSON.stringify(report, null, 2));

  if (fail) process.exit(1);
}

main();
