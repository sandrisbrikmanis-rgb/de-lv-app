"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-b1-full-audit.json");
const OVERLAY_PATH = path.join(ROOT, "reports/et-b1-owner-decisions-accepted-overlay.md");

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
    throw new Error(`Missing ${AUDIT_JSON}`);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  return data.ownerBacklogFinal || data.validatedFindings || [];
}

function loadOverlay() {
  if (!fs.existsSync(OVERLAY_PATH)) {
    throw new Error(`Missing ${OVERLAY_PATH}`);
  }
  return parseOverlayTables(fs.readFileSync(OVERLAY_PATH, "utf8"));
}

function resolveAccepted(finding, overlay) {
  const id = finding.findingId;
  const num = auditNum(id);
  const current = finding.currentEt || "";
  const proposed = finding.proposedEt || "";
  const category = finding.category || "";

  if (id === "ET-B1-0001") {
    const row = overlay.structure.get(id);
    return {
      status: row?.status || "NEEDS_SOURCE_REVIEW",
      newValue: "",
      decision: row?.decision || "Study count 335 vs LV MASTER 324.",
      note: "",
    };
  }

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

  if (category === "SECTIONACCENTS_LANGUAGE") {
    return {
      status: "NEEDS_SOURCE_REVIEW",
      newValue: "",
      decision:
        "sectionAccents scalar→character-split artefakts; nepieciešams deterministic micro-repair no faktiskā ET Study teksta.",
      note: "overlay §C",
    };
  }

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

  if (category === "FOREIGN_REMNANT" && num >= 4240 && num <= 4623) {
    return { status: "BLOCKED", newValue: "", decision: "unreachable", note: "" };
  }
  if (category === "FOREIGN_REMNANT") {
    return {
      status: "BLOCKED",
      newValue: "",
      decision: "FOREIGN_REMNANT outside overlay range without rule",
      note: "",
    };
  }

  return {
    status: "BLOCKED",
    newValue: "",
    decision: `No overlay rule for category ${category}`,
    note: "",
  };
}

function buildAcceptedRows(findings, overlay) {
  return findings.map((f) => {
    const resolved = resolveAccepted(f, overlay);
    return {
      auditId: f.findingId,
      cardId: f.cardId,
      field: f.field,
      rawField: f.field,
      current: f.currentEt || "",
      newValue: resolved.newValue,
      severity: f.severity,
      category: f.category || "",
      status: resolved.status,
      decision: resolved.decision,
      note: resolved.note,
    };
  });
}

function countStatuses(rows) {
  const counts = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, PENDING: 0, BLOCKED: 0 };
  const ids = new Set();
  let duplicateIds = 0;
  for (const r of rows) {
    if (ids.has(r.auditId)) duplicateIds += 1;
    else ids.add(r.auditId);
    const st = r.status;
    if (counts[st] !== undefined) counts[st] += 1;
    else counts.BLOCKED += 1;
  }
  return { counts, duplicateIds, total: rows.length };
}

function precheckAcceptedMapping() {
  const findings = loadFindings();
  const overlay = loadOverlay();
  const rows = buildAcceptedRows(findings, overlay);
  const { counts, duplicateIds, total } = countStatuses(rows);

  const expected = {
    SOURCE_FINDINGS: 2738,
    ACCEPTED_FINDINGS: 2738,
    LABOT: 1054,
    NELABOT: 8,
    FALSE_POSITIVE: 4,
    NEEDS_SOURCE_REVIEW: 1672,
    PENDING: 0,
    DUPLICATE_IDS: 0,
  };

  const pass =
    total === expected.SOURCE_FINDINGS &&
    total === expected.ACCEPTED_FINDINGS &&
    counts.LABOT === expected.LABOT &&
    counts.NELABOT === expected.NELABOT &&
    counts.FALSE_POSITIVE === expected.FALSE_POSITIVE &&
    counts.NEEDS_SOURCE_REVIEW === expected.NEEDS_SOURCE_REVIEW &&
    counts.PENDING === expected.PENDING &&
    duplicateIds === expected.DUPLICATE_IDS;

  return {
    pass,
    verdict: pass ? "PRECHECK_PASS" : "BLOCKED_OWNER_MAPPING_MISMATCH",
    expected,
    actual: {
      SOURCE_FINDINGS: total,
      ACCEPTED_FINDINGS: total,
      ...counts,
      DUPLICATE_IDS: duplicateIds,
    },
    rows,
    overlay,
    findings,
  };
}

module.exports = {
  AUDIT_JSON,
  OVERLAY_PATH,
  parseOverlayTables,
  splitDePrefix,
  auditNum,
  loadFindings,
  loadOverlay,
  resolveAccepted,
  buildAcceptedRows,
  precheckAcceptedMapping,
};
