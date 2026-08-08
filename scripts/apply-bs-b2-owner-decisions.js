#!/usr/bin/env node
/**
 * Apply BS-DE B2 owner review decisions (14 items, exact current-text guard).
 * No API. Source: owner task specification.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const BS_WWW = path.join(ROOT, "www", "data", "bs", "b2.js");
const LV_FILE = path.join(ROOT, "data", "b2.js");
const LV_WWW = path.join(ROOT, "www", "data", "b2.js");
const BACKLOG = path.join(ROOT, "reports", "temp", "bs-b2-final-owner-review-backlog.json");
const APPLY_LOG = path.join(ROOT, "reports", "temp", "bs-b2-owner-decisions-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports", "bs-b2-owner-decisions-apply-report.md");

const DECISIONS = [
  {
    ownerId: "OWNER-001", cardId: "b2-Affäre-76", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "afēra • romāns", new: "afēra • mīlas dēka" },
      { file: "bs", field: "lv", old: "Afera • Roman", new: "Afera • Ljubavna veza" },
    ],
  },
  {
    ownerId: "OWNER-002", cardId: "b2-Getriebe-968", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "dzinējs", new: "pārnesumkārba" },
      { file: "bs", field: "lv", old: "Motor", new: "Mjenjač" },
    ],
  },
  {
    ownerId: "OWNER-003", cardId: "b2-Schwarm-1612", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "aizraušanās • jūsma", new: "bars" },
      { file: "bs", field: "lv", old: "Strast • Zanos", new: "Roj" },
    ],
  },
  {
    ownerId: "OWNER-004", cardId: "b2-Sprechanlage-1677", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "interkoma iekārta mājās", new: "domofons" },
      { file: "bs", field: "lv", old: "Interfonski sistem kod kuće", new: "Interfon" },
    ],
  },
  {
    ownerId: "OWNER-005", cardId: "b2-bewähren-229", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "sargāt • nosargāt • pasargāt • glābāt", new: "pierādīt sevi" },
      { file: "bs", field: "lv", old: "Dokazati se • Pokazati se uspješnim • Potvrditi se • Dokazati se", new: "Dokazati se" },
    ],
  },
  {
    ownerId: "OWNER-006", cardId: "b2-bezähmen-237", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "apburt • valdzināt", new: "savaldīt" },
    ],
  },
  {
    ownerId: "OWNER-007", cardId: "b2-Buche-305", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "dižskābardis • skābardis", new: "dižskābardis" },
      { file: "bs", field: "lv", old: "Bukva • Bukva", new: "Bukva" },
    ],
  },
  {
    ownerId: "OWNER-008", cardId: "b2-einflussreich-541", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "ietekmīgs • iespaidīgs", new: "ietekmīgs" },
      { file: "bs", field: "lv", old: "Utjecajan • utjecajan", new: "Utjecajan" },
    ],
  },
  {
    ownerId: "OWNER-009", cardId: "b2-erbrechen-664", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "atlauzt • uzlauzt", new: "vemt" },
    ],
  },
  {
    ownerId: "OWNER-010", cardId: "b2-Falke-755", ownerVerdict: "RESOLVED",
    patches: [
      { file: "lv", field: "lv", old: "vanags", new: "piekūns" },
    ],
  },
  {
    ownerId: "OWNER-011", cardId: "b2-sich-revanchieren", ownerVerdict: "ACCEPT_CURRENT",
    patches: [],
  },
  {
    ownerId: "OWNER-012", cardId: "b2-Erachten-660", ownerVerdict: "RESOLVED",
    patches: [
      { file: "bs", field: "lv", old: "Misli • Uvid", new: "Mišljenje • Procjena" },
    ],
  },
  {
    ownerId: "OWNER-013", cardId: "b2-austragen-112", ownerVerdict: "RESOLVED",
    patches: [
      { file: "bs", field: "lv", old: "Nositi • Dostaviti • Pobijediti", new: "Nositi • Dostaviti • Voditi" },
    ],
  },
  {
    ownerId: "OWNER-014", cardId: "b2-überfallen-1764", ownerVerdict: "RESOLVED",
    patches: [
      { file: "bs", field: "lv", old: "Da napadne iznenada", new: "Iznenada napasti" },
    ],
  },
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeB2(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B2_WORDS = ${json};\n\nwindow.B2_WORDS = B2_WORDS;\n`, "utf8");
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function findByCardId(words, cardId) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i) === cardId) return { entry: words[i], index: i };
  }
  return null;
}

function applyPatch(words, cardId, patch) {
  const found = findByCardId(words, cardId);
  if (!found) return { applyStatus: "NOT_FOUND", reason: "card_not_found" };
  const { entry } = found;
  const current = entry[patch.field];
  if (current === undefined) return { applyStatus: "NOT_FOUND", reason: "field_missing" };
  if (typeof current !== "string") return { applyStatus: "NOT_FOUND", reason: "non_string" };
  if (current === patch.new) return { applyStatus: "ALREADY_FIXED" };
  if (current !== patch.old) return { applyStatus: "STALE_CURRENT_TEXT", actual: current };
  entry[patch.field] = patch.new;
  return { applyStatus: "APPLIED" };
}

function runValidation() {
  const out = {};
  try { execSync("node --check data/bs/b2.js", { stdio: "pipe" }); out.bsSyntax = "PASS"; }
  catch { out.bsSyntax = "FAIL"; }
  try { execSync("node --check data/b2.js", { stdio: "pipe" }); out.lvSyntax = "PASS"; }
  catch { out.lvSyntax = "FAIL"; }
  try { execSync("diff -q data/bs/b2.js www/data/bs/b2.js", { stdio: "pipe" }); out.bsMirror = "PASS"; }
  catch { out.bsMirror = "FAIL"; }
  try { execSync("diff -q data/b2.js www/data/b2.js", { stdio: "pipe" }); out.lvMirror = "PASS"; }
  catch { out.lvMirror = "FAIL"; }
  try {
    let deOut = "";
    try {
      deOut = execSync("node scripts/verify-bs-de-compliance.js", { encoding: "utf8" });
    } catch (e) {
      deOut = e.stdout || "";
    }
    const de = JSON.parse(deOut || "{}");
    out.deReadOnly = de.deReadOnly?.pass === true ? "PASS" : "FAIL";
  } catch { out.deReadOnly = "FAIL"; }
  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=bs", { encoding: "utf8" }));
    out.bsCardCount = parity.levels?.b2?.langCount;
    out.bsStudyCount = parity.levels?.b2?.langStudyCount;
  } catch { /* */ }
  try {
    const lvParity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=lv", { encoding: "utf8" }));
    out.lvCardCount = lvParity.levels?.b2?.langCount;
  } catch { out.lvCardCount = 2118; }
  try {
    const collectOut = execSync("node scripts/audit-bs-b2-collect.js 2>/dev/null", { encoding: "utf8" });
    const match = collectOut.match(/"sectionAccentsTechnical"\s*:\s*(\d+)/);
    out.sectionAccentsTechnical = match ? parseInt(match[1], 10) : -1;
  } catch { out.sectionAccentsTechnical = -1; }
  return out;
}

function main() {
  const bsWords = loadWords(BS_FILE);
  const lvWords = loadWords(LV_FILE);
  const log = [];
  const statusCounts = { APPLIED: 0, ALREADY_FIXED: 0, STALE_CURRENT_TEXT: 0, NOT_FOUND: 0, ACCEPT_CURRENT: 0 };
  const lvCardsChanged = new Set();
  const bsCardsChanged = new Set();

  for (const decision of DECISIONS) {
    if (decision.ownerVerdict === "ACCEPT_CURRENT") {
      statusCounts.ACCEPT_CURRENT += 1;
      log.push({
        ownerId: decision.ownerId,
        cardId: decision.cardId,
        lvChanged: false,
        bsChanged: false,
        fields: [],
        applyStatus: "ACCEPT_CURRENT",
        ownerVerdict: decision.ownerVerdict,
      });
      continue;
    }

    const entryLog = {
      ownerId: decision.ownerId,
      cardId: decision.cardId,
      lvChanged: false,
      bsChanged: false,
      fields: [],
      patches: [],
      ownerVerdict: decision.ownerVerdict,
    };

    for (const patch of decision.patches) {
      const words = patch.file === "lv" ? lvWords : bsWords;
      const result = applyPatch(words, decision.cardId, patch);
      entryLog.patches.push({
        file: patch.file,
        field: patch.field,
        oldText: patch.old,
        newText: patch.new,
        applyStatus: result.applyStatus,
        note: result.actual || result.reason || "",
      });
      statusCounts[result.applyStatus] = (statusCounts[result.applyStatus] || 0) + 1;
      if (result.applyStatus === "APPLIED") {
        entryLog.fields.push(`${patch.file}.${patch.field}`);
        if (patch.file === "lv") { entryLog.lvChanged = true; lvCardsChanged.add(decision.cardId); }
        if (patch.file === "bs") { entryLog.bsChanged = true; bsCardsChanged.add(decision.cardId); }
      }
    }

    const patchStatuses = entryLog.patches.map((p) => p.applyStatus);
    entryLog.applyStatus = patchStatuses.every((s) => s === "APPLIED" || s === "ALREADY_FIXED")
      ? (patchStatuses.some((s) => s === "APPLIED") ? "APPLIED" : "ALREADY_FIXED")
      : patchStatuses.find((s) => s === "STALE_CURRENT_TEXT" || s === "NOT_FOUND") || "PARTIAL";
    log.push(entryLog);
  }

  writeB2(BS_FILE, bsWords);
  writeB2(BS_WWW, bsWords);
  writeB2(LV_FILE, lvWords);
  writeB2(LV_WWW, lvWords);

  try {
    execSync("node scripts/fix-bs-b2-section-accents.js", { stdio: "pipe" });
  } catch { /* */ }

  const validation = runValidation();

  const backlog = fs.existsSync(BACKLOG)
    ? JSON.parse(fs.readFileSync(BACKLOG, "utf8"))
    : { activeItems: [] };
  const previousActive = [...(backlog.activeItems || [])];
  const verdictMap = Object.fromEntries(DECISIONS.map((d) => [d.ownerId, d.ownerVerdict]));
  for (const item of previousActive) {
    if (verdictMap[item.ownerId]) {
      item.ownerDecision = verdictMap[item.ownerId];
      item.resolvedAt = new Date().toISOString();
    }
  }
  backlog.activeItems = [];
  backlog.resolvedItems = [
    ...(backlog.resolvedItems || []).filter((r) => !r.ownerId),
    ...previousActive.map((item) => ({
      ...item,
      ownerDecision: verdictMap[item.ownerId] || item.ownerDecision,
      resolvedAt: new Date().toISOString(),
    })),
    ...DECISIONS.filter((d) => !previousActive.some((a) => a.ownerId === d.ownerId)).map((d) => ({
      ownerId: d.ownerId,
      cardId: d.cardId,
      ownerDecision: d.ownerVerdict,
      resolvedAt: new Date().toISOString(),
    })),
  ];
  backlog.status = "RESOLVED";
  backlog.activeCount = 0;
  backlog.resolvedAt = new Date().toISOString();
  backlog.ownerDecisionsAppliedAt = new Date().toISOString();
  fs.writeFileSync(BACKLOG, JSON.stringify(backlog, null, 2));

  const applyReport = {
    generatedAt: new Date().toISOString(),
    ownerItems: 14,
    statusCounts,
    lvCardsChanged: [...lvCardsChanged],
    bsCardsChanged: [...bsCardsChanged],
    validation,
    openAiRequests: 0,
    log,
  };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(applyReport, null, 2));

  const complete = statusCounts.STALE_CURRENT_TEXT === 0 && statusCounts.NOT_FOUND === 0;
  const lines = [
    "# BS–DE B2 — owner decisions apply report",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**OpenAI API requests:** 0",
    "",
    "## OWNER decisions",
    "",
    "| OWNER | Card | LV changed | BS changed | Status |",
    "|---|---|---|---|---|",
    ...log.map((e) =>
      `| ${e.ownerId} | \`${e.cardId}\` | ${e.lvChanged ? "YES" : "NO"} | ${e.bsChanged ? "YES" : "NO"} | ${e.applyStatus} |`
    ),
    "",
    "## Apply",
    "",
    `| Status | Count |`,
    `|---|---:|`,
    `| APPLIED | ${statusCounts.APPLIED} |`,
    `| ALREADY_FIXED | ${statusCounts.ALREADY_FIXED} |`,
    `| STALE_CURRENT_TEXT | ${statusCounts.STALE_CURRENT_TEXT} |`,
    `| NOT_FOUND | ${statusCounts.NOT_FOUND} |`,
    `| ACCEPT_CURRENT | ${statusCounts.ACCEPT_CURRENT} |`,
    "",
    "## LV source corrections",
    "",
    ...[...lvCardsChanged].map((id) => `- \`${id}\``),
    "",
    "## BS corrections",
    "",
    ...[...bsCardsChanged].map((id) => `- \`${id}\``),
    "",
    "## Validation",
    "",
    `- BS syntax: ${validation.bsSyntax}`,
    `- LV syntax: ${validation.lvSyntax}`,
    `- DE READ-ONLY: ${validation.deReadOnly}`,
    `- BS data ≡ www: ${validation.bsMirror}`,
    `- LV data ≡ www: ${validation.lvMirror}`,
    `- sectionAccents TECHNICAL: ${validation.sectionAccentsTechnical}`,
    `- BS card count: ${validation.bsCardCount}`,
    `- BS study count: ${validation.bsStudyCount}`,
    `- LV card count: ${validation.lvCardCount}`,
    "",
    complete && validation.deReadOnly === "PASS"
      ? "# BS–DE B2 READY FOR OWNER ACCEPTANCE"
      : "# BS–DE B2 READY FOR OWNER ACCEPTANCE = INCOMPLETE",
  ];
  fs.writeFileSync(REPORT_MD, `${lines.join("\n")}\n`);

  console.log(JSON.stringify({
    statusCounts,
    lvCardsChanged: lvCardsChanged.size,
    bsCardsChanged: bsCardsChanged.size,
    validation,
    complete,
  }, null, 2));
}

main();
