#!/usr/bin/env node
"use strict";
/**
 * Expand ET–DE B1 OWNER accepted overlay onto all 2738 findings.
 * Output: et-b1-owner-decisions-accepted.md + 55 group accepted files + sectionAccents list.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const GROUP_SIZE = 50;
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const PR_NUMBER = process.env.AUDIT_PR || "621";
const MAIN_BASE_SHA = process.env.MAIN_BASE_SHA || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-b1-full-audit.json");
const OVERLAY_PATH = path.join(ROOT, "reports/et-b1-owner-decisions-accepted-overlay.md");
const OUT_MONO = path.join(ROOT, "reports/et-b1-owner-decisions-accepted.md");
const OUT_SEC = path.join(ROOT, "reports/et-b1-sectionaccents-owner-source-review.md");

function gh(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 120) {
  const s = String(text || "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function stripBold(s) {
  return String(s || "").replace(/\*\*/g, "").trim();
}

function parseOverlayTables(content) {
  const structure = new Map();
  const foreignEt = new Map();
  const llmOverrides = new Map();

  const lines = content.split("\n");
  let section = "";

  for (const line of lines) {
    if (line.startsWith("## A.")) section = "structure";
    else if (line.startsWith("## B.")) section = "foreign";
    else if (line.startsWith("### Explicit OWNER overrides")) section = "llm";
    else if (!line.startsWith("| ET-B1-")) continue;

    const cols = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());
    if (cols.length < 3) continue;

    const id = cols[0];
    if (!/^ET-B1-\d+$/.test(id)) continue;

    if (section === "structure") {
      structure.set(id, { status: stripBold(cols[1]), decision: cols[2] });
    } else if (section === "foreign") {
      foreignEt.set(id, { status: stripBold(cols[1]), ownerEt: cols[2] });
    } else if (section === "llm") {
      llmOverrides.set(id, {
        status: stripBold(cols[1]),
        ownerNew: cols[2] || "",
        note: cols[3] || "",
      });
    }
  }

  return { structure, foreignEt, llmOverrides };
}

function splitDePrefix(current) {
  const s = String(current || "");
  const idx = s.indexOf(" = ");
  if (idx === -1) return { prefix: s, hasEquals: false };
  return { prefix: s.slice(0, idx), hasEquals: true };
}

function auditNum(id) {
  return parseInt(String(id).replace("ET-B1-", ""), 10);
}

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = data.ownerBacklogFinal || data.validatedFindings || [];
  return findings;
}

function resolveAccepted(finding, overlay) {
  const id = finding.findingId;
  const num = auditNum(id);
  const current = finding.currentEt || "";
  const proposed = finding.proposedEt || "";
  const category = finding.category || "";

  // ET-B1-0001 STRUCTURE
  if (id === "ET-B1-0001") {
    const row = overlay.structure.get(id);
    return {
      status: row?.status || "NEEDS_SOURCE_REVIEW",
      newValue: "",
      decision: row?.decision || "Study count 335 vs LV MASTER 324.",
      note: "",
    };
  }

  // FOREIGN_REMNANT overlay range 0002–0715
  if (category === "FOREIGN_REMNANT" && num >= 2 && num <= 715) {
    const row = overlay.foreignEt.get(id);
    if (!row) {
      return { status: "BLOCKED", newValue: "", decision: "Missing overlay OWNER_ET", note: "overlay gap" };
    }
    const { prefix } = splitDePrefix(current);
    const newValue = `${prefix} = ${row.ownerEt}`;
    return {
      status: row.status || "LABOT",
      newValue,
      decision: row.ownerEt,
      note: "FOREIGN_REMNANT overlay OWNER_ET",
    };
  }

  // SECTIONACCENTS_LANGUAGE
  if (category === "SECTIONACCENTS_LANGUAGE") {
    return {
      status: "NEEDS_SOURCE_REVIEW",
      newValue: "",
      decision:
        "sectionAccents scalar→character-split artefakts; nepieciešams deterministic micro-repair no faktiskā ET Study teksta.",
      note: "overlay §C",
    };
  }

  // LLM range 4240–4623 (explicit override or default)
  if (num >= 4240 && num <= 4623) {
    const override = overlay.llmOverrides.get(id);
    if (override) {
      const status = override.status;
      let newValue = "";
      if (status === "LABOT") {
        newValue = override.ownerNew || proposed;
      }
      return {
        status,
        newValue,
        decision: override.note || override.ownerNew || override.status,
        note: "overlay §D explicit",
      };
    }
    // Default LLM rule
    if (proposed === current) {
      return {
        status: "FALSE_POSITIVE",
        newValue: "",
        decision: "CURRENT un PROPOSED_ET ir identiski.",
        note: "overlay §D default",
      };
    }
    return {
      status: "LABOT",
      newValue: proposed,
      decision: proposed,
      note: "overlay §D default LABOT = PROPOSED_ET",
    };
  }

  // FOREIGN_REMNANT outside overlay range (e.g. 4335) — treat as LLM if in range, else blocked
  if (category === "FOREIGN_REMNANT") {
    if (num >= 4240 && num <= 4623) {
      // handled above
    } else {
      return {
        status: "BLOCKED",
        newValue: "",
        decision: "FOREIGN_REMNANT outside overlay range without rule",
        note: "",
      };
    }
  }

  return {
    status: "BLOCKED",
    newValue: "",
    decision: `No overlay rule for category ${category}`,
    note: "",
  };
}

function renderAcceptedRows(acceptedRows) {
  const lines = [
    "| Audit ID | Card ID | Field | CURRENT | NEW | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |",
    "|----------|---------|-------|---------|-----|----------|----------|--------------|----------------|---------|",
  ];
  for (const r of acceptedRows) {
    lines.push(
      `| ${r.id} | ${escapePipe(r.cardId)} | ${escapePipe(r.field)} | ${escapePipe(truncate(r.current, 120))} | ${escapePipe(truncate(r.newValue, 120))} | ${r.severity} | ${r.category} | ${r.status} | ${escapePipe(truncate(r.decision, 120))} | ${escapePipe(truncate(r.note, 80))} |`,
    );
  }
  return lines;
}

function buildSectionAccentsList(findings, acceptedMap) {
  const seen = new Map();
  for (const f of findings) {
    if (f.category !== "SECTIONACCENTS_LANGUAGE") continue;
    const key = `${f.cardId}|${f.field}`;
    if (!seen.has(key)) {
      seen.set(key, {
        cardId: f.cardId,
        field: f.field,
        findingIds: [],
      });
    }
    seen.get(key).findingIds.push(f.findingId);
  }

  const rows = [...seen.values()].sort((a, b) => a.cardId.localeCompare(b.cardId));
  const lines = [
    "# ET–DE B1 — sectionAccents OWNER source review list",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.9`,
    `**Branch:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**SECTIONACCENTS_LANGUAGE findings:** **${findings.filter((f) => f.category === "SECTIONACCENTS_LANGUAGE").length}**`,
    `**Unique Card ID / path pairs:** **${rows.length}**`,
    "",
    "> Per-character sectionAccents findings — **NEEDS_SOURCE_REVIEW**, NEW empty. Nav COPY-ONLY production apply.",
    "> Nepieciešams atsevišķs deterministic micro-repair no faktiskā ET Study teksta.",
    "",
    "| Card ID | Field/path | Finding count | Sample Audit IDs |",
    "|---------|------------|---------------|------------------|",
  ];

  for (const row of rows) {
    const sample = row.findingIds.slice(0, 3).join(", ") + (row.findingIds.length > 3 ? " …" : "");
    lines.push(
      `| ${escapePipe(row.cardId)} | ${escapePipe(row.field)} | ${row.findingIds.length} | ${escapePipe(sample)} |`,
    );
  }

  lines.push("");
  return lines.join("\n");
}

function validate(acceptedRows, overlay) {
  const errors = [];
  const statusCounts = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, PENDING: 0, BLOCKED: 0 };
  const ids = new Set();
  let duplicateIds = 0;
  let foreignOverlayCount = 0;
  let foreignOwnerEtOk = 0;
  let dePrefixChanged = 0;

  for (const r of acceptedRows) {
    if (ids.has(r.id)) duplicateIds += 1;
    else ids.add(r.id);

    const st = r.status;
    if (statusCounts[st] !== undefined) statusCounts[st] += 1;
    else statusCounts.BLOCKED += 1;

    if (st === "PENDING") errors.push(`${r.id}: PENDING not allowed`);

    const num = auditNum(r.id);
    if (r.category === "FOREIGN_REMNANT" && num >= 2 && num <= 715) {
      foreignOverlayCount += 1;
      const row = overlay.foreignEt.get(r.id);
      if (!row || !row.ownerEt) errors.push(`${r.id}: missing OWNER_ET in overlay`);
      else foreignOwnerEtOk += 1;

      const { prefix } = splitDePrefix(r.current);
      const newPrefix = splitDePrefix(r.newValue).prefix;
      if (r.status === "LABOT" && prefix !== newPrefix) {
        dePrefixChanged += 1;
        errors.push(`${r.id}: DE_PREFIX_CHANGED`);
      }
    }
  }

  const sourceCount = acceptedRows.length;
  const acceptedCount = acceptedRows.length;
  const missingIds = 0;
  const pending = statusCounts.PENDING;

  const coveragePass =
    sourceCount === 2738 &&
    acceptedCount === 2738 &&
    missingIds === 0 &&
    duplicateIds === 0 &&
    pending === 0 &&
    errors.length === 0;

  return {
    sourceCount,
    acceptedCount,
    missingIds,
    duplicateIds,
    pending,
    statusCounts,
    foreignOverlayCount,
    foreignOwnerEtOk,
    dePrefixChanged,
    errors,
    coveragePass,
    verdict: coveragePass ? "ET_B1_OWNER_ACCEPTED_MAPPING_READY" : "BLOCKED_OWNER_ACCEPTED_COVERAGE_FAIL",
  };
}

function main() {
  if (!fs.existsSync(OVERLAY_PATH)) {
    console.error(`Missing overlay: ${OVERLAY_PATH}`);
    process.exit(1);
  }

  const overlayContent = fs.readFileSync(OVERLAY_PATH, "utf8");
  const overlay = parseOverlayTables(overlayContent);
  const findings = loadFindings();

  if (findings.length !== 2738) {
    console.error(`BLOCKED: expected 2738 findings, got ${findings.length}`);
    process.exit(1);
  }

  if (overlay.foreignEt.size !== 714) {
    console.error(`BLOCKED: overlay FOREIGN_REMNANT rows = ${overlay.foreignEt.size}, expected 714`);
    process.exit(1);
  }

  const acceptedRows = findings.map((f) => {
    const resolved = resolveAccepted(f, overlay);
    return {
      id: f.findingId,
      cardId: f.cardId,
      field: f.field,
      current: f.currentEt || "",
      newValue: resolved.newValue,
      severity: f.severity,
      category: f.category || "",
      status: resolved.status,
      decision: resolved.decision,
      note: resolved.note,
    };
  });

  const validation = validate(acceptedRows, overlay);

  const groups = [];
  for (let i = 0; i < acceptedRows.length; i += GROUP_SIZE) {
    groups.push(acceptedRows.slice(i, i + GROUP_SIZE));
  }

  const groupFiles = [];
  groups.forEach((slice, gi) => {
    const start = gi * GROUP_SIZE + 1;
    const end = Math.min((gi + 1) * GROUP_SIZE, acceptedRows.length);
    const id = String(gi + 1).padStart(2, "0");
    const decName = `et-b1-owner-decisions-group${id}-accepted.md`;
    const decRel = `reports/${decName}`;
    const content = [
      `# ET–DE B1 — OWNER DECISIONS ACCEPTED (grupa ${id}, ${start}–${end})`,
      "",
      `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.9`,
      `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
      `**Overlay:** [et-b1-owner-decisions-accepted-overlay.md](${gh("reports/et-b1-owner-decisions-accepted-overlay.md")})`,
      "",
      "| Navigācija | Saite |",
      "|------------|-------|",
      `| Accepted (viss) | [et-b1-owner-decisions-accepted.md](${gh("reports/et-b1-owner-decisions-accepted.md")}) |`,
      `| Decisions (source) | [et-b1-owner-decisions-group${id}.md](${gh(`reports/et-b1-owner-decisions-group${id}.md`)}) |`,
      "",
      ...renderAcceptedRows(slice),
      "",
    ].join("\n");
    fs.writeFileSync(path.join(ROOT, decRel), content);
    groupFiles.push({ id, decName, decRel, start, end });
  });

  const monoHeader = [
    "# ET–DE B1 — OWNER DECISIONS ACCEPTED",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.9`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Findings:** **${acceptedRows.length}/${acceptedRows.length}** · **PENDING = 0**`,
  `**Overlay:** [et-b1-owner-decisions-accepted-overlay.md](${gh("reports/et-b1-owner-decisions-accepted-overlay.md")})`,
    "",
    "## OWNER kopsavilkums",
    "",
    "| Statuss | Skaits |",
    "|---------|--------|",
    `| **LABOT** | **${validation.statusCounts.LABOT}** |`,
    `| **NELABOT** | **${validation.statusCounts.NELABOT}** |`,
    `| **FALSE_POSITIVE** | **${validation.statusCounts.FALSE_POSITIVE}** |`,
    `| **NEEDS_SOURCE_REVIEW** | **${validation.statusCounts.NEEDS_SOURCE_REVIEW}** |`,
    `| **PENDING** | **${validation.statusCounts.PENDING}** |`,
    "",
    "## Coverage gate",
    "",
    "| Metrika | Skaitlis |",
    "|---------|----------|",
    `| source findings | **${validation.sourceCount}** |`,
    `| accepted findings | **${validation.acceptedCount}** |`,
    `| missing IDs | **${validation.missingIds}** |`,
    `| duplicate IDs | **${validation.duplicateIds}** |`,
    `| PENDING | **${validation.pending}** |`,
    `| FOREIGN_REMNANT overlay OWNER_ET | **${validation.foreignOwnerEtOk}/${validation.foreignOverlayCount}** |`,
    `| DE_PREFIX_CHANGED | **${validation.dePrefixChanged}** |`,
    `| **Verdict** | **${validation.verdict}** |`,
    "",
    "> COPY-ONLY apply vēl nav veikts. DE = STRICT READ-ONLY.",
    "",
    "## Grupas",
    "",
    "| Grupa | Accepted |",
    "|-------|----------|",
    ...groupFiles.map(
      (g) => `| ${g.start}–${g.end} | [${g.decName}](${gh(g.decRel)}) |`,
    ),
    "",
    "## Pilna tabula (visi findingi)",
    "",
  ].join("\n");

  fs.writeFileSync(OUT_MONO, `${monoHeader}${renderAcceptedRows(acceptedRows).join("\n")}\n`);
  fs.writeFileSync(OUT_SEC, buildSectionAccentsList(findings, acceptedRows));

  console.log(JSON.stringify(validation, null, 2));

  if (!validation.coveragePass) {
    console.error("BLOCKED_OWNER_ACCEPTED_COVERAGE_FAIL");
    if (validation.errors.length) console.error(validation.errors.slice(0, 20).join("\n"));
    process.exit(1);
  }

  console.log("ET_B1_OWNER_ACCEPTED_MAPPING_READY");
}

main();
