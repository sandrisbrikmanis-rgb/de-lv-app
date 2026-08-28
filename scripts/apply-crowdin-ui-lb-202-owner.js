#!/usr/bin/env node
"use strict";

/**
 * COPY-ONLY apply lb 202 OWNER decisions → repo + Crowdin.
 *
 * Authority: reports/crowdin-ui-lb-202-owner-decisions.json only
 * Run: node scripts/apply-crowdin-ui-lb-202-owner.js --apply
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const {
  ROOT,
  parseCrowdinJson,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
  applySurgicalCrowdinPatch,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
} = require("./lib/ui-crowdin-bridge");

const REPO_LANG = "lb";
const CROWDIN_LANG = "lb";
const PROJECT_ID = 923473;
const SOURCE_FILE_PATH = "/main/crowdin/ui/lv.json";
const EXPECTED = 202;

const DECISIONS_JSON = path.join(ROOT, "reports", "crowdin-ui-lb-202-owner-decisions.json");
const PROOF_JSON = path.join(ROOT, "reports", "crowdin-ui-lb-202-apply-proof.json");
const PROOF_CSV = path.join(ROOT, "reports", "crowdin-ui-lb-202-apply-proof.csv");
const PROOF_MD = path.join(ROOT, "reports", "crowdin-ui-lb-202-apply-proof.md");

const JSON_PATH = path.join(ROOT, "crowdin", "ui", `${REPO_LANG}.json`);
const UI_REL = UI_JS_REL(REPO_LANG);

function requireToken() {
  const token = process.env.CROWDIN_PERSONAL_TOKEN;
  if (!token) throw new Error("CROWDIN_PERSONAL_TOKEN is not set");
  return token;
}

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function escapeTableCell(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
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
  return { status: response.status, payload, text };
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
    if (status !== 200) {
      throw new Error(`GET ${endpoint} failed HTTP ${status}`);
    }
    const page = payload?.[key] || [];
    items.push(...page);
    if (!payload?.pagination || page.length < limit) break;
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

function effectiveCrowdinCurrent(translationText, sourceText) {
  if (translationText !== null && translationText !== undefined) return translationText;
  return sourceText;
}

async function getTranslationForString(token, languageId, stringId) {
  const { status, payload } = await crowdinRequest(
    token,
    "GET",
    `/projects/${PROJECT_ID}/languages/${languageId}/translations?stringIds=${stringId}`
  );
  if (status !== 200) return { ok: false, status, translation: null };
  const row = payload?.data?.[0]?.data;
  if (!row) return { ok: true, status, translation: null };
  return {
    ok: true,
    status,
    translation: { translation_id: row.translationId, text: row.text },
  };
}

function loadDecisions() {
  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const rows = (decisions.rows || []).filter((r) => r.ownerStatus === "LABOT");
  if (rows.length !== EXPECTED) {
    throw new Error(`Expected ${EXPECTED} LABOT rows, got ${rows.length}`);
  }
  return rows;
}

function verifyUiJsSyntax(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  if (!ctx.window.LANGUAGE_UI_STRINGS) {
    throw new Error(`Syntax/structure error: missing LANGUAGE_UI_STRINGS in ${filePath}`);
  }
}

function writeProof(summary, entries) {
  fs.mkdirSync(path.dirname(PROOF_JSON), { recursive: true });
  fs.writeFileSync(PROOF_JSON, `${JSON.stringify({ summary, entries }, null, 2)}\n`, "utf8");

  const csvHeader =
    "sequence,key,current,newValue,before_json,before_ui,after_json,after_ui,repo_status,crowdin_status,crowdin_verified,verification_status";
  const csvRows = entries.map((e) =>
    [
      e.sequence,
      csvEscape(e.key),
      csvEscape(e.current),
      csvEscape(e.newValue),
      csvEscape(e.before_json),
      csvEscape(e.before_ui),
      csvEscape(e.after_json),
      csvEscape(e.after_ui),
      csvEscape(e.repo_status),
      csvEscape(e.crowdin_status),
      csvEscape(e.crowdin_verified),
      csvEscape(e.verification_status),
    ].join(",")
  );
  fs.writeFileSync(PROOF_CSV, `${[csvHeader, ...csvRows].join("\n")}\n`, "utf8");

  const md = [
    "# Crowdin UI — lb 202 OWNER COPY-ONLY apply proof",
    "",
    `**Generated:** ${summary.generatedAt}  `,
    `**Authority:** \`reports/crowdin-ui-lb-202-owner-decisions.json\`  `,
    `**Project ID:** ${PROJECT_ID}  `,
    `**Crowdin language:** ${CROWDIN_LANG}`,
    "",
    "## Metrics",
    "",
    "| Metric | Value |",
    "|---|---:|",
    `| REQUESTED | ${summary.REQUESTED} |`,
    `| APPLIED_VERIFIED | ${summary.APPLIED_VERIFIED} |`,
    `| CURRENT_VALUE_MISMATCH | ${summary.CURRENT_VALUE_MISMATCH} |`,
    `| FAILED | ${summary.FAILED} |`,
    `| UNEXPECTED_CHANGES | ${summary.UNEXPECTED_CHANGES} |`,
    `| CROWDIN_VERIFIED | ${summary.CROWDIN_VERIFIED} |`,
    `| idempotentRerunVerified | ${summary.idempotentRerunVerified ? "YES" : "NO"} |`,
  ];

  if (summary.TOKEN_EXPOSED) {
    md.push(`| TOKEN_EXPOSED | ${summary.TOKEN_EXPOSED} |`);
  }

  md.push(
    "",
    `**Result:** ${summary.result}`,
    "",
    "## Changed files",
    "",
    `- \`crowdin/ui/lb.json\``,
    `- \`languages/lb/ui.js\``,
    ""
  );

  fs.writeFileSync(PROOF_MD, `${md.join("\n")}\n`, "utf8");
}

function applyRepo(rows) {
  const jsonFlat = parseCrowdinJson(fs.readFileSync(JSON_PATH, "utf8"));
  const { filePath, code, obj } = loadUiObject(UI_REL);
  const uiFlat = flattenUiStrings(obj);

  const beforeJson = { ...jsonFlat };
  const beforeUi = { ...uiFlat };

  const entries = [];
  let currentValueMismatch = 0;
  let failed = 0;
  const toApply = [];

  for (const row of rows) {
    const entry = {
      sequence: row.sequence,
      key: row.key,
      current: row.current,
      newValue: row.newValue,
      before_json: jsonFlat[row.key],
      before_ui: uiFlat[row.key],
      after_json: "",
      after_ui: "",
      repo_status: "pending",
      crowdin_status: "pending",
      crowdin_verified: "NO",
      verification_status: "pending",
      string_id: "",
      translation_id: "",
    };

    if (jsonFlat[row.key] !== row.current || uiFlat[row.key] !== row.current) {
      if (jsonFlat[row.key] === row.newValue && uiFlat[row.key] === row.newValue) {
        entry.repo_status = "already_applied";
        entry.after_json = row.newValue;
        entry.after_ui = row.newValue;
        entry.verification_status = "already_pass";
        entries.push(entry);
        continue;
      }
      entry.repo_status = "skipped_current_mismatch";
      entry.verification_status = "current_value_mismatch";
      currentValueMismatch += 1;
      entries.push(entry);
      continue;
    }

    if (row.newValue === row.current) {
      entry.repo_status = "already_correct";
      entry.after_json = row.newValue;
      entry.after_ui = row.newValue;
      entry.verification_status = "already_pass";
      entries.push(entry);
      continue;
    }

    toApply.push({ row, entry });
  }

  for (const { row } of toApply) {
    jsonFlat[row.key] = row.newValue;
  }

  if (toApply.length) {
    const sortedJson = {};
    for (const key of Object.keys(jsonFlat).sort()) sortedJson[key] = jsonFlat[key];
    fs.writeFileSync(JSON_PATH, `${JSON.stringify(sortedJson, null, 2)}\n`, "utf8");

    const patchFlat = {};
    for (const { row } of toApply) patchFlat[row.key] = row.newValue;
    const patch = applySurgicalCrowdinPatch(code, uiFlat, patchFlat);
    if (patch.changed) {
      fs.writeFileSync(filePath, patch.content, "utf8");
    }
  }

  verifyUiJsSyntax(filePath);

  const afterJsonFlat = parseCrowdinJson(fs.readFileSync(JSON_PATH, "utf8"));
  const afterUiFlat = flattenUiStrings(loadUiObject(UI_REL).obj);

  let unexpectedChanges = 0;
  for (const key of Object.keys(beforeJson)) {
    if (rows.some((r) => r.key === key)) continue;
    if (afterJsonFlat[key] !== beforeJson[key] || afterUiFlat[key] !== beforeUi[key]) {
      unexpectedChanges += 1;
    }
  }

  let appliedVerified = 0;

  for (const entry of entries) {
    if (entry.verification_status === "already_pass") {
      if (
        !multisetEqual(
          extractPlaceholderMultiset(entry.current),
          extractPlaceholderMultiset(entry.after_json || entry.newValue)
        )
      ) {
        entry.verification_status = "placeholder_mismatch";
        failed += 1;
        continue;
      }
      if (
        extractHtmlTagStructure(entry.current) !==
        extractHtmlTagStructure(entry.after_json || entry.newValue)
      ) {
        entry.verification_status = "html_mismatch";
        failed += 1;
        continue;
      }
      appliedVerified += 1;
    }
  }

  for (const { row, entry } of toApply) {
    entry.after_json = afterJsonFlat[row.key];
    entry.after_ui = afterUiFlat[row.key];

    if (entry.after_json !== row.newValue || entry.after_ui !== row.newValue) {
      entry.repo_status = "verify_fail";
      entry.verification_status = "after_mismatch";
      failed += 1;
      entries.push(entry);
      continue;
    }

    if (
      !multisetEqual(
        extractPlaceholderMultiset(row.lvSource || row.current),
        extractPlaceholderMultiset(entry.after_json)
      )
    ) {
      entry.repo_status = "placeholder_fail";
      entry.verification_status = "placeholder_mismatch";
      failed += 1;
      entries.push(entry);
      continue;
    }

    if (
      extractHtmlTagStructure(row.lvSource || row.current) !==
      extractHtmlTagStructure(entry.after_json)
    ) {
      entry.repo_status = "html_fail";
      entry.verification_status = "html_mismatch";
      failed += 1;
      entries.push(entry);
      continue;
    }

    entry.repo_status = "applied";
    entry.verification_status = "repo_pass";
    appliedVerified += 1;
    entries.push(entry);
  }

  return {
    entries,
    beforeJson,
    beforeUi,
    afterJsonFlat,
    afterUiFlat,
    appliedVerified,
    currentValueMismatch,
    failed,
    unexpectedChanges,
    toApplyCount: toApply.length,
  };
}

async function applyCrowdin(token, entries, stringsByKey) {
  const probe = await crowdinRequest(
    token,
    "GET",
    `/projects/${PROJECT_ID}/languages/${CROWDIN_LANG}/translations?limit=1`
  );
  if (probe.status !== 200) {
    throw new Error(`Translations API probe failed HTTP ${probe.status}`);
  }

  let crowdinVerified = 0;
  let crowdinFailed = 0;

  for (const entry of entries) {
    if (entry.verification_status === "current_value_mismatch") {
      entry.crowdin_status = "skipped";
      continue;
    }
    if (entry.verification_status !== "repo_pass" && entry.verification_status !== "already_pass") {
      entry.crowdin_status = "skipped_repo_fail";
      continue;
    }

    const stringData = stringsByKey.get(entry.key);
    if (!stringData) {
      entry.crowdin_status = "missing_string";
      entry.crowdin_verified = "NO";
      crowdinFailed += 1;
      continue;
    }

    entry.string_id = stringData.id;
    const tr = await getTranslationForString(token, CROWDIN_LANG, stringData.id);
    const beforeText = effectiveCrowdinCurrent(tr.translation?.text, stringData.text);

    if (beforeText === entry.newValue) {
      entry.crowdin_status = "already_applied";
      entry.translation_id = tr.translation?.translation_id || "";
      entry.crowdin_verified = "YES";
      crowdinVerified += 1;
      continue;
    }

    if (beforeText !== entry.current) {
      entry.crowdin_status = "crowdin_current_mismatch";
      entry.crowdin_verified = "NO";
      crowdinFailed += 1;
      continue;
    }

    if (tr.translation?.translation_id) {
      const patchResult = await crowdinRequest(token, "PATCH", `/projects/${PROJECT_ID}/translations`, [
        { op: "replace", path: `/${tr.translation.translation_id}`, value: { text: entry.newValue } },
      ]);
      if (patchResult.status !== 200) {
        entry.crowdin_status = `patch_fail_${patchResult.status}`;
        entry.crowdin_verified = "NO";
        crowdinFailed += 1;
        continue;
      }
      entry.translation_id = patchResult.payload?.data?.[0]?.data?.id || tr.translation.translation_id;
      entry.crowdin_status = "patched";
    } else {
      const postResult = await crowdinRequest(
        token,
        "POST",
        `/projects/${PROJECT_ID}/translations`,
        { stringId: stringData.id, languageId: CROWDIN_LANG, text: entry.newValue }
      );
      if (postResult.status !== 201) {
        entry.crowdin_status = `post_fail_${postResult.status}`;
        entry.crowdin_verified = "NO";
        crowdinFailed += 1;
        continue;
      }
      entry.translation_id = postResult.payload?.data?.id || "";
      entry.crowdin_status = "posted";
    }

    const verify = await getTranslationForString(token, CROWDIN_LANG, stringData.id);
    if (verify.translation?.text === entry.newValue) {
      entry.crowdin_verified = "YES";
      entry.verification_status =
        entry.verification_status === "already_pass" ? "already_pass" : "pass";
      crowdinVerified += 1;
    } else {
      entry.crowdin_verified = "NO";
      entry.crowdin_status += "_verify_fail";
      crowdinFailed += 1;
    }
  }

  return { crowdinVerified, crowdinFailed };
}

async function verifyCrowdinOnly(token, entries, stringsByKey) {
  let verified = 0;
  for (const entry of entries) {
    if (entry.verification_status === "current_value_mismatch") continue;
    const stringData = stringsByKey.get(entry.key);
    if (!stringData) return { verified, ok: false };
    const tr = await getTranslationForString(token, CROWDIN_LANG, stringData.id);
    const text = tr.translation?.text ?? stringData.text;
    if (text === entry.newValue) verified += 1;
    else return { verified, ok: false };
  }
  return { verified, ok: verified === entries.filter((e) => e.verification_status !== "current_value_mismatch").length };
}

async function main() {
  const apply = process.argv.includes("--apply");
  const generatedAt = new Date().toISOString();
  const rows = loadDecisions();

  const summary = {
    generatedAt,
    projectId: PROJECT_ID,
    authority: DECISIONS_JSON.replace(`${ROOT}/`, ""),
    REQUESTED: EXPECTED,
    APPLIED_VERIFIED: 0,
    CURRENT_VALUE_MISMATCH: 0,
    FAILED: 0,
    UNEXPECTED_CHANGES: 0,
    CROWDIN_VERIFIED: 0,
    TOKEN_EXPOSED: "NO",
    idempotentRerunVerified: false,
    result: "PENDING",
  };

  if (!apply) {
    const jsonFlat = parseCrowdinJson(fs.readFileSync(JSON_PATH, "utf8"));
    const uiFlat = flattenUiStrings(loadUiObject(UI_REL).obj);
    let mismatch = 0;
    for (const row of rows) {
      if (jsonFlat[row.key] !== row.current || uiFlat[row.key] !== row.current) mismatch += 1;
    }
    console.log(
      JSON.stringify({
        ...summary,
        message: "Dry run. Re-run with --apply.",
        preflightCurrentMismatch: mismatch,
        readyToApply: mismatch === 0,
      }, null, 2)
    );
    return;
  }

  const repoResult = applyRepo(rows);
  summary.APPLIED_VERIFIED = repoResult.appliedVerified;
  summary.CURRENT_VALUE_MISMATCH = repoResult.currentValueMismatch;
  summary.FAILED = repoResult.failed;
  summary.UNEXPECTED_CHANGES = repoResult.unexpectedChanges;

  if (
    repoResult.failed > 0 ||
    repoResult.currentValueMismatch > 0 ||
    repoResult.unexpectedChanges > 0 ||
    repoResult.appliedVerified !== EXPECTED
  ) {
    summary.result = "FAIL";
    writeProof(summary, repoResult.entries.sort((a, b) => a.sequence - b.sequence));
    console.log(JSON.stringify(summary, null, 2));
    process.exit(1);
  }

  const token = requireToken();
  const files = await crowdinGetAll(token, `/projects/${PROJECT_ID}/files`);
  const sourceFile = files
    .map((item) => item.data || item)
    .find((f) => f.path === SOURCE_FILE_PATH);
  if (!sourceFile) throw new Error(`Missing source file ${SOURCE_FILE_PATH}`);

  const strings = await crowdinGetAll(
    token,
    `/projects/${PROJECT_ID}/strings?fileId=${sourceFile.id}`
  );
  const stringsByKey = new Map();
  for (const item of strings) {
    const s = item.data || item;
    const k = normalizeCrowdinIdentifier(s.identifier);
    if (k) stringsByKey.set(k, s);
  }

  const crowdinResult = await applyCrowdin(token, repoResult.entries, stringsByKey);
  summary.CROWDIN_VERIFIED = crowdinResult.crowdinVerified;
  summary.FAILED += crowdinResult.crowdinFailed;

  const idempotentCheck = await verifyCrowdinOnly(token, repoResult.entries, stringsByKey);
  summary.idempotentRerunVerified = idempotentCheck.ok && idempotentCheck.verified === EXPECTED;

  const pass =
    summary.REQUESTED === EXPECTED &&
    summary.APPLIED_VERIFIED === EXPECTED &&
    summary.CURRENT_VALUE_MISMATCH === 0 &&
    summary.FAILED === 0 &&
    summary.UNEXPECTED_CHANGES === 0 &&
    summary.CROWDIN_VERIFIED === EXPECTED &&
    summary.TOKEN_EXPOSED === "NO";

  summary.result = pass ? "PASS" : "FAIL";

  const sortedEntries = repoResult.entries.sort((a, b) => a.sequence - b.sequence);
  writeProof(summary, sortedEntries);
  console.log(JSON.stringify(summary, null, 2));

  if (!pass) process.exit(1);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
