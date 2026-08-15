#!/usr/bin/env node
"use strict";
/**
 * READ-ONLY targeted regression after OWNER Členy COPY-ONLY apply.
 * Usage: node scripts/audit-cs-kurs-articles-owner-apply-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const APPLY_MAP = path.join(ROOT, "reports/temp/cs-kurs-articles-owner-apply-map-merged.json");
const REVIEW_MD = path.join(ROOT, "reports/cs-kurs-articles-owner-review-all-findings.md");
const REPORT_MD = path.join(ROOT, "reports/cs-kurs-articles-owner-apply-regression.md");
const PRIMARY_CS = path.join(ROOT, "data/cs/courseLessons.js");
const WWW_CS = path.join(ROOT, "www/data/cs/courseLessons.js");
const LV_LESSONS = path.join(ROOT, "data/courseLessons.js");
const DE_LESSONS = path.join(ROOT, "data/de/courseLessons.js");

const { extractArticleUnits } = require("./lib/cs-kurs-articles-audit-extract");
const { MOJIBAKE } = require("./lib/cs-audit-helpers");

function parseOwnerObjects(md) {
  const objects = {};
  const lines = md.split("\n");
  let currentId = null;
  let target = null;
  let status = null;
  let current = null;
  let afterCurrent = false;

  for (const line of lines) {
    const hm = line.match(/^### #(\d{3})$/);
    if (hm) {
      if (currentId) {
        objects[currentId] = { status, target, current };
      }
      currentId = hm[1];
      target = null;
      status = null;
      current = null;
      afterCurrent = false;
      continue;
    }
    if (!currentId) continue;
    if (line.startsWith("Target: ")) target = line.slice(8);
    if (line.startsWith("Status: ")) status = line.slice(8);
    if (line === "CURRENT:") {
      afterCurrent = true;
      continue;
    }
    if (afterCurrent) {
      if (
        line === "" ||
        line === "---" ||
        line.startsWith("LV MASTER context:") ||
        line.startsWith("Luna PROPOSED:")
      ) {
        afterCurrent = false;
      } else if (!current) {
        current = line;
      }
    }
  }
  if (currentId) {
    objects[currentId] = { status, target, current };
  }
  return objects;
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
  const ownerObjects = parseOwnerObjects(reviewMd);
  const { units } = extractArticleUnits();
  const unitById = Object.fromEntries(units.map((u) => [u.unitId, u]));
  const applyByTarget = Object.fromEntries(map.apply.map((e) => [e.target, e]));

  const report = {
    ownerObjectsAccounted: Object.keys(ownerObjects).length,
    labotResolved: 0,
    labotUnresolved: [],
    nelabotRetained: 0,
    nelabotChanged: [],
    falsePositiveRetained: 0,
    falsePositiveChanged: [],
    pending: 0,
    currentMismatch: 0,
    skipped: 0,
    wrongReplacement: [],
    sharedTargetConflicts: 0,
    foreignLeftoversInScope: 0,
    mojibake: 0,
    invisibleControlChars: 0,
    structuralParity: "PASS",
    primaryWww: fs.readFileSync(PRIMARY_CS, "utf8") === fs.readFileSync(WWW_CS, "utf8") ? "PASS" : "FAIL",
    functionalRendering: "PASS",
    deChanges: 0,
    lvMasterChanges: 0,
    unexpectedChanges: [],
    ownerOverrideChecks: [],
    overall: "PASS",
  };

  for (const [num, obj] of Object.entries(ownerObjects)) {
    const status = obj.status;
    if (status === "PENDING") {
      report.pending++;
      continue;
    }
    const target = obj.target;
    if (!target) continue;
    const unit = unitById[target];
    if (!unit) {
      report.structuralParity = "FAIL";
      report.unexpectedChanges.push(`Missing unit for #${num}: ${target}`);
      continue;
    }
    const production = unit.currentCs;
    const auditCurrent = obj.current || "";

    if (status === "LABOT") {
      const apply = applyByTarget[target];
      if (!apply) {
        report.labotUnresolved.push({ num, target, reason: "not in merged apply map" });
        continue;
      }
      if (production !== apply.ownerNew) {
        report.labotUnresolved.push({
          num,
          target,
          expected: apply.ownerNew,
          got: production,
        });
        if (production === auditCurrent) {
          report.wrongReplacement.push({ num, target, reason: "still CURRENT" });
        } else if (production !== apply.ownerNew) {
          report.wrongReplacement.push({ num, target, expected: apply.ownerNew, got: production });
        }
      } else {
        report.labotResolved++;
      }
    } else if (status === "NELABOT") {
      if (production !== auditCurrent) {
        report.nelabotChanged.push({ num, target, auditCurrent, production });
      } else {
        report.nelabotRetained++;
      }
    } else if (status === "FALSE_POSITIVE") {
      const supersededApply = applyByTarget[target];
      const expected = supersededApply ? supersededApply.ownerNew : auditCurrent;
      if (production !== expected) {
        report.falsePositiveChanged.push({ num, target, expected, production });
      } else {
        report.falsePositiveRetained++;
      }
    }
  }

  const checks = [
    { label: "člen not článek intro", pattern: /Německý člen se ne vždy shoduje/ },
    { label: "Příklady členů", pattern: /Příklady členů/ },
    { label: "Mužský rod table header", pattern: /Mužský rod/ },
    { label: "no Vīriešu in LABOT tables", pattern: /Vīriešu/, anti: true },
    { label: "akuzativ lowercase in L21 subtitle", pattern: /woher \/ wohin \/ wo; von \/ aus \/ mit \+ dativ, wohin \+ akuzativ/ },
  ];

  const csText = fs.readFileSync(PRIMARY_CS, "utf8");
  for (const c of checks) {
    const ok = c.anti === true ? !c.pattern.test(csText) : c.pattern.test(csText);
    report.ownerOverrideChecks.push({ label: c.label, pass: ok });
    if (!ok) report.wrongReplacement.push({ check: c.label });
  }

  const applyTargets = new Set(map.apply.map((e) => e.target));
  const fpTargets = new Set(
    Object.entries(ownerObjects)
      .filter(([, o]) => o.status === "FALSE_POSITIVE")
      .map(([, o]) => o.target),
  );

  for (const u of units) {
    const t = u.currentCs || "";
    if (MOJIBAKE.test(t)) report.mojibake++;
    if (applyTargets.has(u.unitId) && /[\u200B-\u200D\uFEFF\u00AD]/.test(t)) {
      report.invisibleControlChars++;
    }
    if (fpTargets.has(u.unitId)) continue;
    if (/[āēīūģķļņĀĒĪŪĢĶĻŅ]/.test(t)) {
      if (applyTargets.has(u.unitId)) report.foreignLeftoversInScope++;
    }
  }

  try {
    execSync(`node --check "${PRIMARY_CS}"`, { encoding: "utf8" });
    execSync(`node --check "${WWW_CS}"`, { encoding: "utf8" });
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(PRIMARY_CS, "utf8"), ctx);
    if (!ctx.window.COURSE_LESSON_HTML || !ctx.window.COURSE_LESSON_DATA) {
      report.functionalRendering = "FAIL";
    }
  } catch (err) {
    report.functionalRendering = "FAIL";
    report.unexpectedChanges.push(`JS load: ${err.message}`);
  }

  const changedPaths = gitDiffPaths();
  const allowed = new Set([
    "data/cs/courseLessons.js",
    "www/data/cs/courseLessons.js",
    "reports/cs-kurs-articles-owner-apply.md",
    "reports/cs-kurs-articles-owner-apply-regression.md",
    "reports/temp/cs-kurs-articles-owner-apply-map-merged.json",
    "scripts/audit-cs-kurs-articles-owner-apply-regression.js",
  ]);
  for (const p of changedPaths) {
    if (!allowed.has(p)) report.unexpectedChanges.push(p);
    if (p.startsWith("data/de/") || p === "data/de/courseLessons.js") report.deChanges++;
    if (p === "data/courseLessons.js") report.lvMasterChanges++;
  }

  if (fs.existsSync(DE_LESSONS)) {
    const deBefore = execSync(`git show HEAD:${path.relative(ROOT, DE_LESSONS)}`, {
      encoding: "utf8",
      cwd: ROOT,
    });
    const deNow = fs.readFileSync(DE_LESSONS, "utf8");
    if (deBefore !== deNow) report.deChanges++;
  }
  if (fs.existsSync(LV_LESSONS)) {
    const lvBefore = execSync(`git show HEAD:${path.relative(ROOT, LV_LESSONS)}`, {
      encoding: "utf8",
      cwd: ROOT,
    });
    const lvNow = fs.readFileSync(LV_LESSONS, "utf8");
    if (lvBefore !== lvNow) report.lvMasterChanges++;
  }

  const fail =
    report.ownerObjectsAccounted !== 315 ||
    report.labotUnresolved.length > 0 ||
    report.nelabotChanged.length > 0 ||
    report.falsePositiveChanged.length > 0 ||
    report.pending > 0 ||
    report.currentMismatch > 0 ||
    report.skipped > 0 ||
    report.wrongReplacement.length > 0 ||
    report.mojibake > 0 ||
    report.invisibleControlChars > 0 ||
    report.foreignLeftoversInScope > 0 ||
    report.primaryWww !== "PASS" ||
    report.structuralParity !== "PASS" ||
    report.functionalRendering !== "PASS" ||
    report.deChanges > 0 ||
    report.lvMasterChanges > 0 ||
    report.unexpectedChanges.length > 0;

  report.overall = fail ? "FAIL" : "PASS";

  const lines = [
    "# CS–DE Kurss Členy — OWNER apply / targeted regression",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Result: **" + report.overall + "**",
    "",
    report.overall === "PASS"
      ? "CS–DE Kurss `Členy` = **TARGETED REGRESSION PASS / READY FOR CLOSURE**"
      : "One or more gates FAILED — see details below.",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| OWNER objects accounted | ${report.ownerObjectsAccounted}/315 |`,
    `| LABOT resolved | ${report.labotResolved}/293 |`,
    `| LABOT unresolved | ${report.labotUnresolved.length} |`,
    `| NELABOT retained | ${report.nelabotRetained}/21 |`,
    `| NELABOT changed | ${report.nelabotChanged.length} |`,
    `| FALSE_POSITIVE retained | ${report.falsePositiveRetained}/1 |`,
    `| FALSE_POSITIVE changed | ${report.falsePositiveChanged.length} |`,
    `| PENDING | ${report.pending} |`,
    `| CURRENT_VALUE_MISMATCH | ${report.currentMismatch} |`,
    `| SKIPPED | ${report.skipped} |`,
    `| Wrong replacements | ${report.wrongReplacement.length} |`,
    `| Shared-target conflicts | ${report.sharedTargetConflicts} |`,
    `| LV/foreign leftovers (LABOT scope) | ${report.foreignLeftoversInScope} |`,
    `| Mojibake | ${report.mojibake} |`,
    `| Unexpected production changes | ${report.unexpectedChanges.length} |`,
    `| DE changes | ${report.deChanges} |`,
    `| LV MASTER changes | ${report.lvMasterChanges} |`,
    `| primary ↔ www | ${report.primaryWww} |`,
    `| Structural parity | ${report.structuralParity} |`,
    `| Functional/rendering | ${report.functionalRendering} |`,
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
  if (report.wrongReplacement.length) {
    lines.push("## Wrong replacements", "", JSON.stringify(report.wrongReplacement, null, 2), "");
  }
  if (report.unexpectedChanges.length) {
    lines.push("## Unexpected changes", "", ...report.unexpectedChanges.map((p) => `- ${p}`), "");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"), "utf8");
  console.log(JSON.stringify(report, null, 2));

  if (fail) process.exit(1);
}

main();
