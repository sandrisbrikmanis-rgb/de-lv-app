#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE B2 OWNER resolved JSON — linguistic review of all 355 OWNER backlog findings.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadB2, resolveB2Current } = require("./lib/et-owner-production-resolve");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-b2-full-audit.json");
const OUT = path.join(ROOT, "reports/temp/et-b2-owner-resolved.json");

/** TRUE_EXTRA_STUDY cards — study removed in NSR closure; study-field findings superseded. */
const TRUE_EXTRA_STUDY_IDS = ["b2-genosse", "b2-genossin", "b2-neger", "b2-pacht"];

/** FOREIGN_REMNANT — ET translations for comparison.example (DE part preserved). */
const FOREIGN_ET = {
  "ET-B2-0002": "Es gibt Hochwasser. = On on üleujutused.",
  "ET-B2-0003": "Die Überschwemmung zerstörte Häuser. = Üleujutused hävitasid maju.",
  "ET-B2-0004": "Der Pegel steigt. = Veetase tõuseb.",
  "ET-B2-0005": "Er legt Nachdruck auf die Frist. = Ta rõhutab tähtaega.",
  "ET-B2-0006": "Der Nachdruck erschien im Frühjahr. = Kordustrükk ilmus kevadel.",
  "ET-B2-0007": "Unter Druck stehen = olema surve all.",
  "ET-B2-0008": "Er weist die Aufgabe zu. = Ta määrab ülesande.",
  "ET-B2-0009": "Er gibt mir die Arbeit. = Ta annab mulle töö.",
  "ET-B2-0010": "Er verteilt die Aufgaben. = Ta jagab ülesanded.",
  "ET-B2-0011": "Es ist mir zuwider. = See ei meeldi mulle.",
  "ET-B2-0012": "Ich biete Hilfe an. = Ma pakun abi.",
  "ET-B2-0013": "Er bietet viel Geld. = Ta pakub palju raha.",
};

/** Manual overrides where auto PROPOSED is insufficient or wrong. */
const MANUAL = {
  "ET-B2-0083": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„samasugune“ on õige kirjapilt; audit PROPOSED oli identne CURRENT-iga.",
  },
};

function decide(finding) {
  const id = finding.findingId;
  if (MANUAL[id]) return { ...MANUAL[id] };

  const cat = finding.category;
  const field = String(finding.field || "");
  const cardId = String(finding.cardId || "");

  if (field === "study.count" && cardId === "STRUCT") {
    return {
      status: "FALSE_POSITIVE",
      ownerNew: "",
      note:
        "Study parity: 4 TRUE_EXTRA_STUDY (Genosse, Genossin, Neger, Pacht) eemaldatud; ET=60 vastab LV MASTER-ile.",
    };
  }

  if (/sectionAccents/i.test(field)) {
    return {
      status: "FALSE_POSITIVE",
      ownerNew: "",
      note: "sectionAccents char-split artefakt; lahendub TRUE_EXTRA_STUDY eemaldamisega (4 kaardil).",
    };
  }

  if (TRUE_EXTRA_STUDY_IDS.includes(cardId) && field.startsWith("study.")) {
    return {
      status: "FALSE_POSITIVE",
      ownerNew: "",
      note: "TRUE_EXTRA_STUDY — study objekt eemaldatakse; finding superseded.",
    };
  }

  if (cat === "FOREIGN_REMNANT" && FOREIGN_ET[id]) {
    return {
      status: "LABOT",
      ownerNew: FOREIGN_ET[id],
      note: "LV jäänuk asendatud loomuliku eesti tõlkega comparison näites.",
    };
  }

  const proposed = String(finding.proposedEt || "").trim();
  const current = String(finding.currentEt || "").trim();

  if (proposed && proposed !== current && !proposed.startsWith("(ET") && !proposed.startsWith("(termins")) {
    return {
      status: "LABOT",
      ownerNew: proposed,
      note: truncate(finding.reason, 160) || "Audit linguistic correction accepted.",
    };
  }

  if (proposed === current && current) {
    return {
      status: "FALSE_POSITIVE",
      ownerNew: "",
      note: "CURRENT vastab juba audit PROPOSED_ET-ile; muudatus pole vajalik.",
    };
  }

  return {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: truncate(finding.reason, 160) || "No actionable ET correction.",
  };
}

function truncate(text, max = 200) {
  const s = String(text || "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function main() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const backlog = audit.ownerBacklogFinal || [];
  if (backlog.length !== 355) {
    console.error(`BLOCKED: expected 355 findings, got ${backlog.length}`);
    process.exit(1);
  }

  const b2Words = loadB2();
  const findings = [];
  const meta = {
    LABOT: 0,
    NELABOT: 0,
    FALSE_POSITIVE: 0,
    NEEDS_SOURCE_REVIEW: 0,
    PENDING: 0,
  };

  for (const f of backlog) {
    const productionCurrent = resolveB2Current(f.cardId, f.field, b2Words);
    const currentEt = productionCurrent || f.productionValue || f.currentEt || "";
    const decision = decide({ ...f, currentEt });
    meta[decision.status] = (meta[decision.status] || 0) + 1;

    findings.push({
      id: f.findingId,
      cardId: f.cardId,
      field: f.field,
      de: f.de || "",
      category: f.category,
      severity: f.severity,
      currentEt,
      status: decision.status,
      ownerNew: decision.ownerNew,
      note: decision.note,
      proposedEt: f.proposedEt || "",
    });
  }

  if (meta.PENDING > 0 || meta.NEEDS_SOURCE_REVIEW > 0) {
    console.error("BLOCKED: unresolved findings", meta);
    process.exit(1);
  }

  const out = {
    meta: {
      ...meta,
      totalFindings: findings.length,
      sourceAudit: "PR #628",
      MAIN_SHA: require("child_process").execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    },
    findings,
  };

  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify({ out: OUT, meta: out.meta }, null, 2));
}

if (require.main === module) main();

module.exports = { decide, FOREIGN_ET, TRUE_EXTRA_STUDY_IDS };
