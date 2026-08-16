#!/usr/bin/env node
/**
 * Build OWNER review group files from reports/cs-kurss-full-audit.md (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const AUDIT_MD = path.join(ROOT, "reports", "cs-kurss-full-audit.md");
const GROUPS = [
  { file: "reports/cs-kurss-owner-review-group01.md", start: 1, end: 50 },
  { file: "reports/cs-kurss-owner-review-group02.md", start: 51, end: 100 },
  { file: "reports/cs-kurss-owner-review-group03.md", start: 101, end: 150 },
  { file: "reports/cs-kurss-owner-review-group04.md", start: 151, end: 200 },
  { file: "reports/cs-kurss-owner-review-group05.md", start: 201, end: 218 },
];

function parseFindings(md) {
  const findingsStart = md.indexOf("## Findings");
  if (findingsStart < 0) throw new Error("Findings section not found");
  const body = md.slice(findingsStart);
  const structuralStart = body.indexOf("## Strukturālā pārbaude");
  const findingsBody = structuralStart >= 0 ? body.slice(0, structuralStart) : body;
  const blocks = findingsBody.split(/\n(?=### \d+\. )/);
  const findings = [];

  for (const block of blocks) {
    const header = block.match(/^### (\d+)\. (.+?)\s*$/m);
    if (!header) continue;
    const num = Number(header[1]);
    const lessonSection = header[2].trim();
    const slashIdx = lessonSection.indexOf(" / ");
    const lesson = slashIdx >= 0 ? lessonSection.slice(0, slashIdx).trim() : lessonSection;
    const idPath = slashIdx >= 0 ? lessonSection.slice(slashIdx + 3).trim() : lessonSection;

    function field(label) {
      const re = new RegExp(`\\- \\*\\*${label}:\\*\\*\\s*(.*)`, "m");
      const m = block.match(re);
      return m ? m[1].trim() : "";
    }

    findings.push({
      num,
      lesson,
      section: lessonSection,
      idPath,
      severity: field("Severity"),
      status: field("Status"),
      field: field("Field").replace(/^`|`$/g, ""),
      deContext: field("DE context") || field("DE context, ja auditā dots") || "",
      lvReference: field("LV reference"),
      currentCs: field("CURRENT_CS"),
      proposedCs: field("PROPOSED_CS"),
      reason: field("Pamatojums"),
      source: field("Avots"),
    });
  }

  findings.sort((a, b) => a.num - b.num);
  return findings;
}

function renderFinding(f) {
  const lines = [];
  lines.push(`## Finding ${f.num}`);
  lines.push("");
  lines.push(`**Lesson / section:** ${f.section}`);
  lines.push(`**ID / path:** ${f.idPath}`);
  lines.push(`**Severity:** ${f.severity}`);
  if (f.deContext) lines.push(`**DE context:** ${f.deContext}`);
  lines.push(`**Field:** \`${f.field}\``);
  lines.push(`**LV reference:** ${f.lvReference}`);
  lines.push(`**CURRENT_CS:** ${f.currentCs}`);
  lines.push(`**PROPOSED_CS:** ${f.proposedCs}`);
  lines.push(`**Audita pamatojums:** ${f.reason}`);
  if (f.source) lines.push(`**Avots:** ${f.source}`);
  lines.push("");
  lines.push("**OWNER_DECISION:**");
  lines.push("");
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

function renderGroup(group, findings) {
  const slice = findings.filter((f) => f.num >= group.start && f.num <= group.end);
  const lines = [];
  lines.push(`# CS–DE Kurss — OWNER review Group ${String(group.start).padStart(2, "0")}–${String(group.end).padStart(2, "0")}`);
  lines.push("");
  lines.push(`Avots: \`reports/cs-kurss-full-audit.md\``);
  lines.push(`Findings: **${group.start}–${group.end}** (${slice.length} ieraksti)`);
  lines.push("");
  lines.push("> **PROPOSED_CS** nav OWNER apstiprināts variants.");
  lines.push("");
  for (const f of slice) lines.push(renderFinding(f));
  return { content: lines.join("\n"), count: slice.length, nums: slice.map((f) => f.num) };
}

function main() {
  const md = fs.readFileSync(AUDIT_MD, "utf8");
  const findings = parseFindings(md);
  if (findings.length !== 218) {
    throw new Error(`Expected 218 findings, got ${findings.length}`);
  }
  const nums = findings.map((f) => f.num);
  const expected = Array.from({ length: 218 }, (_, i) => i + 1);
  for (let i = 0; i < expected.length; i++) {
    if (nums[i] !== expected[i]) {
      throw new Error(`Missing or out-of-order finding at index ${i}: expected ${expected[i]}, got ${nums[i]}`);
    }
  }

  const written = [];
  for (let gi = 0; gi < GROUPS.length; gi++) {
    const group = GROUPS[gi];
    const { content, count, nums: groupNums } = renderGroup(group, findings);
    const expectedCount = group.end - group.start + 1;
    if (count !== expectedCount) {
      throw new Error(`Group ${gi + 1}: expected ${expectedCount}, got ${count}`);
    }
    const outPath = path.join(ROOT, group.file);
    fs.writeFileSync(outPath, content);
    written.push({ file: group.file, count, nums: groupNums });
  }

  console.log(JSON.stringify({
    totalFindings: findings.length,
    groups: written,
    duplicates: new Set(nums).size === nums.length ? 0 : nums.length - new Set(nums).size,
    missing: 218 - nums.length,
    productionChanges: 0,
    deChanges: 0,
  }, null, 2));
}

main();
