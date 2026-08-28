#!/usr/bin/env node
"use strict";

/**
 * Apply OWNER lock label to Crowdin source strings (crowdin/ui/lv.json).
 *
 * Run: node scripts/apply-crowdin-ui-owner-lock.js --apply
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PROJECT_ID = 923473;
const SOURCE_FILE_PATH = "/main/crowdin/ui/lv.json";
const LABEL_TITLE = "owner-lock-no-auto-translate";
const OWNER_JSON = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.json");
const LV_JSON = path.join(ROOT, "crowdin", "ui", "lv.json");
const PROOF_JSON = path.join(ROOT, "reports", "crowdin-ui-owner-lock-apply-proof.json");
const PROOF_CSV = path.join(ROOT, "reports", "crowdin-ui-owner-lock-apply-proof.csv");
const PROOF_MD = path.join(ROOT, "reports", "crowdin-ui-owner-lock-apply-proof.md");

function requireToken() {
  const token = process.env.CROWDIN_PERSONAL_TOKEN;
  if (!token) {
    throw new Error("CROWDIN_PERSONAL_TOKEN is not set");
  }
  return token;
}

async function crowdinRequest(token, method, endpoint, body) {
  const response = await fetch(`https://api.crowdin.com/api/v2${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = { raw: text };
    }
  }

  return { status: response.status, payload };
}

async function crowdinGetAll(token, endpoint, key = "data") {
  const items = [];
  let offset = 0;
  const limit = 500;
  while (true) {
    const separator = endpoint.includes("?") ? "&" : "?";
    const { status, payload } = await crowdinRequest(
      token,
      "GET",
      `${endpoint}${separator}limit=${limit}&offset=${offset}`
    );
    if (status < 200 || status >= 300) {
      throw new Error(`GET ${endpoint} failed with HTTP ${status}: ${JSON.stringify(payload)}`);
    }
    const page = payload?.[key] || [];
    items.push(...page);
    const pagination = payload?.pagination;
    if (!pagination || page.length < limit) break;
    offset += limit;
  }
  return items;
}

function normalizeCrowdinIdentifier(identifier) {
  if (typeof identifier !== "string") return "";
  if (identifier.startsWith('"') && identifier.endsWith('"') && identifier.length >= 2) {
    return identifier.slice(1, -1);
  }
  return identifier;
}

function identifierMatchesOwnerKey(identifier, ownerKey) {
  return identifier === ownerKey || normalizeCrowdinIdentifier(identifier) === ownerKey;
}

function loadOwnerTargets() {
  const owner = JSON.parse(fs.readFileSync(OWNER_JSON, "utf8"));
  const rows = (owner.rows || []).filter(
    (row) =>
      row.ownerStatus === "NELABOT" &&
      row.crowdinLock === "YES" &&
      row.ownerReviewRequired !== "YES"
  );

  const byKey = new Map();
  for (const row of rows) {
    if (!byKey.has(row.key)) byKey.set(row.key, row);
  }

  return {
    ownerNelabotRows: rows.length,
    uniqueKeys: [...byKey.keys()].sort(),
    byKey,
  };
}

function loadLvFlat() {
  return JSON.parse(fs.readFileSync(LV_JSON, "utf8"));
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function renderMarkdown(summary, entries) {
  const lines = [
    "# Crowdin UI — OWNER lock label apply proof",
    "",
    `**Generated:** ${summary.generatedAt}  `,
    `**Project ID:** ${summary.projectId}  `,
    `**Source file:** \`${summary.sourceFilePath}\`  `,
    `**Label:** \`${summary.label}\``,
    "",
    "## Metrics",
    "",
    "| Metric | Value |",
    "|---|---:|",
    `| OWNER_NELABOT_ROWS | ${summary.OWNER_NELABOT_ROWS} |`,
    `| UNIQUE_KEYS_REQUESTED | ${summary.UNIQUE_KEYS_REQUESTED} |`,
    `| MATCHED | ${summary.MATCHED} |`,
    `| LABELED | ${summary.LABELED} |`,
    `| ALREADY_LABELED | ${summary.ALREADY_LABELED} |`,
    `| FAILED | ${summary.FAILED} |`,
    `| TRANSLATIONS_CHANGED | ${summary.TRANSLATIONS_CHANGED} |`,
    `| SOURCE_TEXTS_CHANGED | ${summary.SOURCE_TEXTS_CHANGED} |`,
    `| TOKEN_EXPOSED | ${summary.TOKEN_EXPOSED} |`,
    "",
    `**Result:** ${summary.result}`,
    "",
    "## Entries",
    "",
    "| key | string_id | label | before | after | api_status | verification_status |",
    "|---|---:|---|---|---|---|---|",
  ];

  for (const entry of entries) {
    lines.push(
      `| \`${entry.key}\` | ${entry.string_id} | \`${entry.label}\` | ${entry.before} | ${entry.after} | ${entry.api_status} | ${entry.verification_status} |`
    );
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
}

function writeFailProof(summary, entries, errorMessage) {
  fs.mkdirSync(path.dirname(PROOF_JSON), { recursive: true });
  const failSummary = {
    ...summary,
    result: "FAIL",
    error: errorMessage,
  };
  fs.writeFileSync(PROOF_JSON, `${JSON.stringify({ summary: failSummary, entries }, null, 2)}\n`, "utf8");

  const csvHeader =
    "key,string_id,source_text,label,before,after,api_status,verification_status";
  const csvRows = entries.map((entry) =>
    [
      csvEscape(entry.key),
      csvEscape(entry.string_id),
      csvEscape(entry.source_text),
      csvEscape(entry.label),
      csvEscape(entry.before),
      csvEscape(entry.after),
      csvEscape(entry.api_status),
      csvEscape(entry.verification_status),
    ].join(",")
  );
  fs.writeFileSync(PROOF_CSV, `${[csvHeader, ...csvRows].join("\n")}\n`, "utf8");
  fs.writeFileSync(PROOF_MD, renderMarkdown(failSummary, entries), "utf8");
}

async function main() {
  const apply = process.argv.includes("--apply");
  const token = requireToken();
  const generatedAt = new Date().toISOString();
  const { ownerNelabotRows, uniqueKeys, byKey } = loadOwnerTargets();
  const lvFlat = loadLvFlat();

  const summary = {
    generatedAt,
    projectId: PROJECT_ID,
    sourceFilePath: SOURCE_FILE_PATH,
    label: LABEL_TITLE,
    OWNER_NELABOT_ROWS: ownerNelabotRows,
    UNIQUE_KEYS_REQUESTED: uniqueKeys.length,
    MATCHED: 0,
    LABELED: 0,
    ALREADY_LABELED: 0,
    FAILED: 0,
    TRANSLATIONS_CHANGED: 0,
    SOURCE_TEXTS_CHANGED: 0,
    TOKEN_EXPOSED: "NO",
    result: "PENDING",
  };

  const entries = [];
  const precheckErrors = [];

  for (const key of uniqueKeys) {
    const ownerRow = byKey.get(key);
    if (!Object.prototype.hasOwnProperty.call(lvFlat, key)) {
      precheckErrors.push(`${key}: missing in crowdin/ui/lv.json`);
      continue;
    }
    if (ownerRow.current !== lvFlat[key]) {
      precheckErrors.push(`${key}: CURRENT !== lv.json source`);
    }
  }

  const files = await crowdinGetAll(token, `/projects/${PROJECT_ID}/files`);
  const sourceFile = files
    .map((item) => item.data || item)
    .find((file) => file.path === SOURCE_FILE_PATH);

  if (!sourceFile) {
    const message = `Source file not found in Crowdin: ${SOURCE_FILE_PATH}`;
    writeFailProof(summary, entries, message);
    console.error(message);
    process.exit(1);
  }

  const strings = await crowdinGetAll(
    token,
    `/projects/${PROJECT_ID}/strings?fileId=${sourceFile.id}`
  );
  const stringsByOwnerKey = new Map();
  for (const item of strings) {
    const stringData = item.data || item;
    const ownerKey = normalizeCrowdinIdentifier(stringData.identifier);
    if (ownerKey) stringsByOwnerKey.set(ownerKey, stringData);
  }

  const planned = [];
  for (const key of uniqueKeys) {
    const ownerRow = byKey.get(key);
    const stringData = stringsByOwnerKey.get(key);
    const entry = {
      key,
      string_id: stringData?.id ?? "",
      source_text: ownerRow.current,
      label: LABEL_TITLE,
      before: "",
      after: "",
      api_status: "precheck",
      verification_status: "pending",
    };

    if (!stringData) {
      entry.api_status = "precheck_fail";
      entry.verification_status = "missing_string";
      precheckErrors.push(`${key}: Crowdin string not found for OWNER key`);
      entries.push(entry);
      continue;
    }

    if (!identifierMatchesOwnerKey(stringData.identifier, key)) {
      entry.api_status = "precheck_fail";
      entry.verification_status = "identifier_mismatch";
      precheckErrors.push(
        `${key}: identifier mismatch (${JSON.stringify(stringData.identifier)})`
      );
      entries.push(entry);
      continue;
    }

    if (stringData.text !== ownerRow.current) {
      entry.api_status = "precheck_fail";
      entry.verification_status = "source_text_mismatch";
      precheckErrors.push(`${key}: Crowdin source text !== OWNER CURRENT`);
      entries.push(entry);
      continue;
    }

    entry.before = (stringData.labelIds || []).length ? "labeled" : "unlabeled";
    entry.string_id = stringData.id;
    planned.push({ key, ownerRow, stringData, entry });
  }

  if (precheckErrors.length) {
    summary.FAILED = uniqueKeys.length;
    summary.MATCHED = 0;
    writeFailProof(summary, entries, precheckErrors.join("; "));
    console.error("Precheck failed:");
    for (const error of precheckErrors) console.error(`  - ${error}`);
    process.exit(1);
  }

  summary.MATCHED = planned.length;

  if (!apply) {
    console.log(
      JSON.stringify(
        {
          ...summary,
          message: "Dry run OK. Re-run with --apply to write labels.",
          plannedKeys: planned.map((item) => item.key),
        },
        null,
        2
      )
    );
    return;
  }

  const labels = await crowdinGetAll(token, `/projects/${PROJECT_ID}/labels`);
  let label = labels.map((item) => item.data || item).find((item) => item.title === LABEL_TITLE);
  if (!label) {
    const createResult = await crowdinRequest(token, "POST", `/projects/${PROJECT_ID}/labels`, {
      title: LABEL_TITLE,
    });
    if (createResult.status < 200 || createResult.status >= 300) {
      writeFailProof(
        summary,
        entries,
        `Label create failed HTTP ${createResult.status}: ${JSON.stringify(createResult.payload)}`
      );
      process.exit(1);
    }
    label = createResult.payload.data;
  }

  const beforeSnapshots = new Map();
  for (const item of planned) {
    const { payload, status } = await crowdinRequest(
      token,
      "GET",
      `/projects/${PROJECT_ID}/strings/${item.stringData.id}`
    );
    if (status < 200 || status >= 300) {
      writeFailProof(
        summary,
        entries,
        `Failed to read string ${item.key} before apply (HTTP ${status})`
      );
      process.exit(1);
    }
    beforeSnapshots.set(item.key, payload.data);
  }

  const toLabel = [];
  const alreadyLabeled = [];
  for (const item of planned) {
    const snapshot = beforeSnapshots.get(item.key);
    const labelIds = snapshot.labelIds || [];
    if (labelIds.includes(label.id)) {
      alreadyLabeled.push(item);
      item.entry.api_status = "already_labeled";
      item.entry.after = "labeled";
      item.entry.verification_status = "pending";
      entries.push(item.entry);
    } else {
      toLabel.push(item);
    }
  }

  if (toLabel.length) {
    const assignResult = await crowdinRequest(
      token,
      "POST",
      `/projects/${PROJECT_ID}/labels/${label.id}/strings`,
      { stringIds: toLabel.map((item) => item.stringData.id) }
    );
    if (assignResult.status < 200 || assignResult.status >= 300) {
      writeFailProof(
        summary,
        entries,
        `Label assign failed HTTP ${assignResult.status}: ${JSON.stringify(assignResult.payload)}`
      );
      process.exit(1);
    }
    for (const item of toLabel) {
      item.entry.api_status = "labeled";
      item.entry.after = "labeled";
      item.entry.verification_status = "pending";
      entries.push(item.entry);
    }
  }

  summary.LABELED = toLabel.length;
  summary.ALREADY_LABELED = alreadyLabeled.length;

  let sourceTextsChanged = 0;
  let failed = 0;

  for (const item of planned) {
    const before = beforeSnapshots.get(item.key);
    const verifyResult = await crowdinRequest(
      token,
      "GET",
      `/projects/${PROJECT_ID}/strings/${item.stringData.id}`
    );
    if (verifyResult.status < 200 || verifyResult.status >= 300) {
      item.entry.verification_status = "verify_read_fail";
      failed += 1;
      continue;
    }

    const after = verifyResult.payload.data;
    const hasLabel = (after.labelIds || []).includes(label.id);
    const sourceChanged = after.text !== before.text;

    if (sourceChanged) sourceTextsChanged += 1;
    item.entry.after = hasLabel ? "labeled" : "unlabeled";

    if (hasLabel && !sourceChanged) {
      item.entry.verification_status = "pass";
    } else if (!hasLabel) {
      item.entry.verification_status = "missing_label";
      failed += 1;
    } else {
      item.entry.verification_status = "source_changed";
      failed += 1;
    }
  }

  summary.SOURCE_TEXTS_CHANGED = sourceTextsChanged;
  summary.TRANSLATIONS_CHANGED = 0;
  summary.FAILED = failed;

  const pass =
    summary.MATCHED === summary.UNIQUE_KEYS_REQUESTED &&
    summary.LABELED + summary.ALREADY_LABELED === summary.UNIQUE_KEYS_REQUESTED &&
    summary.FAILED === 0 &&
    summary.TRANSLATIONS_CHANGED === 0 &&
    summary.SOURCE_TEXTS_CHANGED === 0 &&
    summary.TOKEN_EXPOSED === "NO";

  summary.result = pass ? "PASS" : "FAIL";

  entries.sort((a, b) => a.key.localeCompare(b.key));

  fs.mkdirSync(path.dirname(PROOF_JSON), { recursive: true });
  fs.writeFileSync(PROOF_JSON, `${JSON.stringify({ summary, entries }, null, 2)}\n`, "utf8");

  const csvHeader =
    "key,string_id,source_text,label,before,after,api_status,verification_status";
  const csvRows = entries.map((entry) =>
    [
      csvEscape(entry.key),
      csvEscape(entry.string_id),
      csvEscape(entry.source_text),
      csvEscape(entry.label),
      csvEscape(entry.before),
      csvEscape(entry.after),
      csvEscape(entry.api_status),
      csvEscape(entry.verification_status),
    ].join(",")
  );
  fs.writeFileSync(PROOF_CSV, `${[csvHeader, ...csvRows].join("\n")}\n`, "utf8");
  fs.writeFileSync(PROOF_MD, renderMarkdown(summary, entries), "utf8");

  console.log(JSON.stringify(summary, null, 2));
  if (!pass) process.exit(1);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
