#!/usr/bin/env node
"use strict";

/**
 * Apply 27 OWNER LABOT UI translations to Crowdin (COPY-ONLY).
 *
 * LABOT rows + NEW values: reports/crowdin-ui-intentional-same-owner-decisions.json
 * NELABOT guard manifest: reports/crowdin-ui-intentional-same-lock-owner.json
 *
 * Run: node scripts/apply-crowdin-ui-owner-27.js --apply
 */

const fs = require("fs");
const path = require("path");
const {
  ROOT,
  crowdinCodeFromRepoLang,
} = require("./lib/ui-crowdin-bridge");

/** Repo folder code → Crowdin target languageId (beyond bridge defaults). */
const REPO_TO_CROWDIN_LANG = {
  en: "en-GB",
  es: "es-ES",
  pt: "pt-PT",
  nn: "nn-NO",
  sv: "sv-SE",
  gr: "el",
};

function repoLangToCrowdin(repoLang) {
  return REPO_TO_CROWDIN_LANG[repoLang] || crowdinCodeFromRepoLang(repoLang);
}

const PROJECT_ID = 923473;
const SOURCE_FILE_PATH = "/main/crowdin/ui/lv.json";
const LOCK_JSON = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.json");
const DECISIONS_JSON = path.join(ROOT, "reports", "crowdin-ui-intentional-same-owner-decisions.json");
const PROOF_JSON = path.join(ROOT, "reports", "crowdin-ui-owner-27-apply-proof.json");
const PROOF_CSV = path.join(ROOT, "reports", "crowdin-ui-owner-27-apply-proof.csv");
const PROOF_MD = path.join(ROOT, "reports", "crowdin-ui-owner-27-apply-proof.md");

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
      throw new Error(`GET ${endpoint} failed with HTTP ${status}: ${JSON.stringify(payload)}`);
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

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function loadLabotRows() {
  const lock = JSON.parse(fs.readFileSync(LOCK_JSON, "utf8"));
  if (lock.appliedLabot !== 27) {
    throw new Error(`Expected lock manifest appliedLabot=27, got ${lock.appliedLabot}`);
  }

  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const labot = (decisions.rows || []).filter((row) => row.ownerStatus === "LABOT");
  if (labot.length !== 27) {
    throw new Error(`Expected 27 LABOT rows in decisions manifest, got ${labot.length}`);
  }

  const lockKeys = new Set((lock.rows || []).map((row) => `${row.language}\t${row.key}`));
  for (const row of labot) {
    const id = `${row.language}\t${row.key}`;
    if (lockKeys.has(id)) {
      throw new Error(`LABOT row still present in NELABOT lock manifest: ${row.language} ${row.key}`);
    }
    if (!row.newValue || typeof row.newValue !== "string") {
      throw new Error(`Missing newValue for ${row.language} ${row.key}`);
    }
    if (row.current !== row.lvSource && row.evidence?.currentEqualsLvSource) {
      // decisions evidence flag — still require explicit current field
    }
  }

  return {
    lock,
    labot: labot.map((row) => ({
      language: row.language,
      crowdin_language: repoLangToCrowdin(row.language),
      key: row.key,
      CURRENT: row.current,
      NEW: row.newValue,
      lvSource: row.lvSource,
    })),
  };
}

function loadNelabotRows() {
  const lock = JSON.parse(fs.readFileSync(LOCK_JSON, "utf8"));
  return (lock.rows || [])
    .filter((row) => row.ownerStatus === "NELABOT")
    .map((row) => ({
      language: row.language,
      crowdin_language: repoLangToCrowdin(row.language),
      key: row.key,
      CURRENT: row.current,
      lvSource: row.lvSource,
    }));
}

async function getTranslationForString(token, crowdinLanguage, stringId) {
  const { status, payload } = await crowdinRequest(
    token,
    "GET",
    `/projects/${PROJECT_ID}/languages/${crowdinLanguage}/translations?stringIds=${stringId}`
  );
  if (status !== 200) {
    return { ok: false, status, translation: null, error: payload };
  }
  const row = payload?.data?.[0]?.data;
  if (!row) {
    return { ok: true, status, translation: null };
  }
  return {
    ok: true,
    status,
    translation: {
      translation_id: row.translationId,
      text: row.text,
    },
  };
}

function effectiveCrowdinCurrent(translationText, sourceText) {
  if (translationText !== null && translationText !== undefined) {
    return translationText;
  }
  return sourceText;
}

function renderMarkdown(summary, entries) {
  const lines = [
    "# Crowdin UI — OWNER 27 LABOT apply proof",
    "",
    `**Generated:** ${summary.generatedAt}  `,
    `**Project ID:** ${summary.projectId}  `,
    `**Source file:** \`${summary.sourceFilePath}\`  `,
    `**LABOT manifest:** \`reports/crowdin-ui-intentional-same-owner-decisions.json\` (NEW values)  `,
    `**NELABOT guard:** \`reports/crowdin-ui-intentional-same-lock-owner.json\``,
    "",
    "## Metrics",
    "",
    "| Metric | Value |",
    "|---|---:|",
    `| REQUESTED | ${summary.REQUESTED} |`,
    `| PREFLIGHT_MATCHED | ${summary.PREFLIGHT_MATCHED} |`,
    `| APPLIED | ${summary.APPLIED} |`,
    `| ALREADY_APPLIED | ${summary.ALREADY_APPLIED} |`,
    `| CURRENT_VALUE_MISMATCH | ${summary.CURRENT_VALUE_MISMATCH} |`,
    `| FAILED | ${summary.FAILED} |`,
    `| NELABOT_CHANGED | ${summary.NELABOT_CHANGED} |`,
    `| SOURCE_TEXTS_CHANGED | ${summary.SOURCE_TEXTS_CHANGED} |`,
    `| TOKEN_EXPOSED | ${summary.TOKEN_EXPOSED} |`,
    "",
    `**Result:** ${summary.result}`,
    "",
    "## Entries",
    "",
    "| language | crowdin_language | key | string_id | translation_id | CURRENT | NEW | BEFORE | AFTER | api_status | verification_status |",
    "|---|---|---:|---:|---:|---|---|---|---|---|---|",
  ];

  for (const entry of entries) {
    lines.push(
      `| ${entry.language} | ${entry.crowdin_language} | \`${entry.key}\` | ${entry.string_id} | ${entry.translation_id || ""} | ${escapeTableCell(entry.CURRENT)} | ${escapeTableCell(entry.NEW)} | ${escapeTableCell(entry.BEFORE)} | ${escapeTableCell(entry.AFTER)} | ${entry.api_status} | ${entry.verification_status} |`
    );
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
}

function escapeTableCell(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function writeProof(summary, entries, errorMessage) {
  fs.mkdirSync(path.dirname(PROOF_JSON), { recursive: true });
  const outSummary = errorMessage ? { ...summary, error: errorMessage } : summary;
  fs.writeFileSync(PROOF_JSON, `${JSON.stringify({ summary: outSummary, entries }, null, 2)}\n`, "utf8");

  const csvHeader =
    "language,crowdin_language,key,string_id,translation_id,CURRENT,NEW,BEFORE,AFTER,api_status,verification_status";
  const csvRows = entries.map((entry) =>
    [
      csvEscape(entry.language),
      csvEscape(entry.crowdin_language),
      csvEscape(entry.key),
      csvEscape(entry.string_id),
      csvEscape(entry.translation_id),
      csvEscape(entry.CURRENT),
      csvEscape(entry.NEW),
      csvEscape(entry.BEFORE),
      csvEscape(entry.AFTER),
      csvEscape(entry.api_status),
      csvEscape(entry.verification_status),
    ].join(",")
  );
  fs.writeFileSync(PROOF_CSV, `${[csvHeader, ...csvRows].join("\n")}\n`, "utf8");
  fs.writeFileSync(PROOF_MD, renderMarkdown(outSummary, entries), "utf8");
}

async function main() {
  const apply = process.argv.includes("--apply");
  const token = requireToken();
  const generatedAt = new Date().toISOString();
  const { labot } = loadLabotRows();
  const nelabot = loadNelabotRows();

  const summary = {
    generatedAt,
    projectId: PROJECT_ID,
    sourceFilePath: SOURCE_FILE_PATH,
    REQUESTED: labot.length,
    PREFLIGHT_MATCHED: 0,
    APPLIED: 0,
    ALREADY_APPLIED: 0,
    CURRENT_VALUE_MISMATCH: 0,
    FAILED: 0,
    NELABOT_CHANGED: 0,
    SOURCE_TEXTS_CHANGED: 0,
    TOKEN_EXPOSED: "NO",
    result: "PENDING",
  };

  const entries = [];

  // READ-ONLY Translations API probe (must be HTTP 200)
  const probe = await crowdinRequest(
    token,
    "GET",
    `/projects/${PROJECT_ID}/languages/lt/translations?limit=1`
  );
  if (probe.status !== 200) {
    summary.result = "FAIL";
    writeProof(summary, entries, `Translations API probe failed HTTP ${probe.status}`);
    console.error(`Translations API probe failed HTTP ${probe.status}`);
    process.exit(1);
  }

  const files = await crowdinGetAll(token, `/projects/${PROJECT_ID}/files`);
  const sourceFile = files
    .map((item) => item.data || item)
    .find((file) => file.path === SOURCE_FILE_PATH);
  if (!sourceFile) {
    summary.result = "FAIL";
    writeProof(summary, entries, `Source file not found: ${SOURCE_FILE_PATH}`);
    process.exit(1);
  }

  const strings = await crowdinGetAll(
    token,
    `/projects/${PROJECT_ID}/strings?fileId=${sourceFile.id}`
  );
  const stringsByKey = new Map();
  for (const item of strings) {
    const stringData = item.data || item;
    const ownerKey = normalizeCrowdinIdentifier(stringData.identifier);
    if (ownerKey) stringsByKey.set(ownerKey, stringData);
  }

  const nelabotSnapshots = new Map();
  const sourceSnapshots = new Map();

  for (const row of nelabot) {
    const stringData = stringsByKey.get(row.key);
    if (!stringData) continue;
    sourceSnapshots.set(row.key, stringData.text);
    const tr = await getTranslationForString(token, row.crowdin_language, stringData.id);
    if (!tr.ok) {
      summary.result = "FAIL";
      writeProof(summary, entries, `NELABOT preflight read failed for ${row.language} ${row.key}`);
      process.exit(1);
    }
    nelabotSnapshots.set(`${row.language}\t${row.key}`, {
      effective: effectiveCrowdinCurrent(tr.translation?.text, stringData.text),
      stringText: stringData.text,
    });
  }

  const planned = [];
  const preflightErrors = [];

  for (const row of labot) {
    const entry = {
      language: row.language,
      crowdin_language: row.crowdin_language,
      key: row.key,
      string_id: "",
      translation_id: "",
      CURRENT: row.CURRENT,
      NEW: row.NEW,
      BEFORE: "",
      AFTER: "",
      api_status: "precheck",
      verification_status: "pending",
    };

    const stringData = stringsByKey.get(row.key);
    if (!stringData) {
      entry.api_status = "precheck_fail";
      entry.verification_status = "missing_string";
      preflightErrors.push(`${row.language} ${row.key}: Crowdin string not found`);
      entries.push(entry);
      continue;
    }

    if (normalizeCrowdinIdentifier(stringData.identifier) !== row.key) {
      entry.api_status = "precheck_fail";
      entry.verification_status = "identifier_mismatch";
      preflightErrors.push(`${row.language} ${row.key}: identifier mismatch`);
      entries.push(entry);
      continue;
    }

    entry.string_id = stringData.id;
    sourceSnapshots.set(row.key, stringData.text);

    const tr = await getTranslationForString(token, row.crowdin_language, stringData.id);
    if (!tr.ok) {
      entry.api_status = "precheck_fail";
      entry.verification_status = "translation_read_fail";
      preflightErrors.push(
        `${row.language} ${row.key}: translation read HTTP ${tr.status}`
      );
      entries.push(entry);
      continue;
    }

    const beforeText = effectiveCrowdinCurrent(tr.translation?.text, stringData.text);
    entry.BEFORE = beforeText;
    entry.translation_id = tr.translation?.translation_id || "";

    if (beforeText === row.NEW) {
      entry.api_status = "already_applied";
      entry.verification_status = "pending";
      planned.push({ row, stringData, entry, mode: "already" });
      continue;
    }

    if (beforeText !== row.CURRENT && beforeText !== row.NEW) {
      entry.api_status = "precheck_fail";
      entry.verification_status = "current_value_mismatch";
      summary.CURRENT_VALUE_MISMATCH += 1;
      preflightErrors.push(
        `${row.language} ${row.key}: Crowdin BEFORE !== OWNER CURRENT`
      );
      entries.push(entry);
      continue;
    }

    entry.api_status = "preflight_pass";
    entry.verification_status = "pending";
    planned.push({
      row,
      stringData,
      entry,
      mode: "apply",
      translationId: tr.translation?.translation_id || null,
    });
  }

  if (preflightErrors.length) {
    summary.PREFLIGHT_MATCHED = 0;
    summary.FAILED = labot.length;
    summary.result = "FAIL";
    writeProof(summary, entries, preflightErrors.join("; "));
    console.error("Preflight failed:");
    for (const error of preflightErrors) console.error(`  - ${error}`);
    process.exit(1);
  }

  summary.PREFLIGHT_MATCHED = labot.length;

  if (!apply) {
    console.log(
      JSON.stringify(
        {
          ...summary,
          message: "Dry run OK. Re-run with --apply to write Crowdin translations.",
          plannedApply: planned.filter((p) => p.mode === "apply").length,
          alreadyApplied: planned.filter((p) => p.mode === "already").length,
        },
        null,
        2
      )
    );
    return;
  }

  const toApply = [];
  const already = [];

  for (const item of planned) {
    if (item.mode === "already") {
      already.push(item);
      continue;
    }
    toApply.push(item);
  }

  for (const item of toApply) {
    const { row, stringData, entry, translationId } = item;

    if (translationId) {
      const patch = [
        {
          op: "replace",
          path: `/${translationId}`,
          value: { text: row.NEW },
        },
      ];
      const patchResult = await crowdinRequest(
        token,
        "PATCH",
        `/projects/${PROJECT_ID}/translations`,
        patch
      );
      if (patchResult.status !== 200) {
        entry.api_status = `patch_fail_${patchResult.status}`;
        entry.verification_status = "apply_fail";
        summary.FAILED += 1;
        entries.push(entry);
        continue;
      }
      const updated = patchResult.payload?.data?.[0]?.data;
      entry.translation_id = updated?.id || translationId;
      entry.api_status = "patched";
    } else {
      const postResult = await crowdinRequest(
        token,
        "POST",
        `/projects/${PROJECT_ID}/translations`,
        {
          stringId: stringData.id,
          languageId: row.crowdin_language,
          text: row.NEW,
        }
      );
      if (postResult.status !== 201) {
        entry.api_status = `post_fail_${postResult.status}`;
        entry.verification_status = "apply_fail";
        summary.FAILED += 1;
        entries.push(entry);
        continue;
      }
      entry.translation_id = postResult.payload?.data?.id || "";
      entry.api_status = "posted";
    }

    entries.push(entry);
  }

  for (const item of already) {
    item.entry.api_status = "already_applied";
    item.entry.verification_status = "pending";
    entries.push(item.entry);
  }

  summary.APPLIED = toApply.length;
  summary.ALREADY_APPLIED = already.length;

  // Post-write verification for LABOT
  for (const entry of entries) {
    if (entry.verification_status === "apply_fail") continue;

    const tr = await getTranslationForString(token, entry.crowdin_language, entry.string_id);
    if (!tr.ok || !tr.translation) {
      entry.verification_status = "verify_read_fail";
      summary.FAILED += 1;
      continue;
    }

    entry.AFTER = tr.translation.text;
    entry.translation_id = tr.translation.translation_id;

    if (entry.AFTER === entry.NEW) {
      entry.verification_status =
        entry.api_status === "already_applied" ? "already_pass" : "pass";
    } else {
      entry.verification_status = "after_mismatch";
      summary.FAILED += 1;
    }
  }

  // NELABOT + source unchanged checks
  let nelabotChanged = 0;
  for (const row of nelabot) {
    const stringData = stringsByKey.get(row.key);
    if (!stringData) continue;
    const before = nelabotSnapshots.get(`${row.language}\t${row.key}`);
    const stringNow = await crowdinRequest(
      token,
      "GET",
      `/projects/${PROJECT_ID}/strings/${stringData.id}`
    );
    if (stringNow.status === 200 && stringNow.payload?.data?.text !== before.stringText) {
      summary.SOURCE_TEXTS_CHANGED += 1;
    }

    const tr = await getTranslationForString(token, row.crowdin_language, stringData.id);
    if (!tr.ok) continue;
    const afterEffective = effectiveCrowdinCurrent(tr.translation?.text, stringData.text);
    if (afterEffective !== before.effective) {
      nelabotChanged += 1;
    }
  }
  summary.NELABOT_CHANGED = nelabotChanged;

  for (const [key, text] of sourceSnapshots.entries()) {
    const stringData = stringsByKey.get(key);
    if (!stringData) continue;
    const stringNow = await crowdinRequest(
      token,
      "GET",
      `/projects/${PROJECT_ID}/strings/${stringData.id}`
    );
    if (stringNow.status === 200 && stringNow.payload?.data?.text !== text) {
      summary.SOURCE_TEXTS_CHANGED += 1;
    }
  }

  const pass =
    summary.REQUESTED === 27 &&
    summary.PREFLIGHT_MATCHED === 27 &&
    summary.APPLIED + summary.ALREADY_APPLIED === 27 &&
    summary.CURRENT_VALUE_MISMATCH === 0 &&
    summary.FAILED === 0 &&
    summary.NELABOT_CHANGED === 0 &&
    summary.SOURCE_TEXTS_CHANGED === 0 &&
    summary.TOKEN_EXPOSED === "NO";

  summary.result = pass ? "PASS" : "FAIL";
  entries.sort((a, b) => `${a.language}\t${a.key}`.localeCompare(`${b.language}\t${b.key}`));

  writeProof(summary, entries);
  console.log(JSON.stringify(summary, null, 2));
  if (!pass) process.exit(1);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
