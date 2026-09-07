#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const {
  CROWDIN_TARGET_LOCALE_IDS,
  crowdinLocaleToRepo,
  parseCrowdinJson,
  exportG2LevelFlat,
  getLvG2SourceKeySet,
} = require("../content-crowdin-bridge");
const { assertLvSourceExportIdentity } = require("../content-crowdin-bridge/import-staging");
const {
  CROWDIN_PROJECT_ID,
  CROWDIN_FILE_ID,
  EXPECTED_KEY_COUNT,
  EXPECTED_LANG_COUNT,
  EXPECTED_VALUE_COUNT,
  EXPECTED_LV_SHA256,
  STAGING_ROOT,
} = require("./constants");

function sha256Buffer(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

async function crowdinApi(method, endpoint, body) {
  const token = process.env.CROWDIN_PERSONAL_TOKEN?.trim();
  if (!token) {
    const err = new Error("CROWDIN_PERSONAL_TOKEN is not configured");
    err.code = "CROWDIN_TOKEN_MISSING";
    throw err;
  }
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

async function exportLanguage(crowdinLocaleId, stagingRoot) {
  const { status, payload } = await crowdinApi(
    "POST",
    `/projects/${CROWDIN_PROJECT_ID}/translations/builds/files/${CROWDIN_FILE_ID}`,
    { targetLanguageId: crowdinLocaleId },
  );
  if (status < 200 || status >= 300) {
    throw new Error(`Crowdin export failed for ${crowdinLocaleId}: ${status} ${JSON.stringify(payload)}`);
  }
  const downloadUrl = payload?.data?.url;
  if (!downloadUrl) {
    throw new Error(`Crowdin export missing download URL for ${crowdinLocaleId}`);
  }
  const fileRes = await fetch(downloadUrl);
  const buf = Buffer.from(await fileRes.arrayBuffer());
  const repoLang = crowdinLocaleToRepo(crowdinLocaleId);
  fs.mkdirSync(stagingRoot, { recursive: true });
  const outPath = path.join(stagingRoot, `${repoLang}-a1.json`);
  fs.writeFileSync(outPath, buf);
  return { crowdinLocaleId, repoLang, outPath, sha256: sha256Buffer(buf), bytes: buf.length };
}

function verifyStagingExport(stagingRoot = STAGING_ROOT) {
  const lvSha = assertLvSourceExportIdentity();
  const sourceKeySet = getLvG2SourceKeySet("a1");
  const languages = [];
  let totalValues = 0;
  const issues = [];

  for (const crowdinLocaleId of CROWDIN_TARGET_LOCALE_IDS) {
    const repoLang = crowdinLocaleToRepo(crowdinLocaleId);
    const filePath = path.join(stagingRoot, `${repoLang}-a1.json`);
    if (!fs.existsSync(filePath)) {
      issues.push(`${repoLang}:missing_file`);
      languages.push({ crowdinLocaleId, repoLang, keyCount: 0, pass: false });
      continue;
    }
    const raw = fs.readFileSync(filePath, "utf8");
    let flat;
    try {
      flat = parseCrowdinJson(raw);
    } catch (err) {
      issues.push(`${repoLang}:parse_error:${err.message}`);
      languages.push({ crowdinLocaleId, repoLang, keyCount: 0, pass: false });
      continue;
    }
    const keys = Object.keys(flat);
    const missing = [];
    for (const key of sourceKeySet) {
      if (!(key in flat)) missing.push(key);
      else if (typeof flat[key] !== "string" || flat[key].trim().length === 0) {
        issues.push(`${repoLang}:empty:${key}`);
      }
    }
    const extra = keys.filter((k) => !sourceKeySet.has(k));
    if (missing.length) issues.push(`${repoLang}:missing_keys:${missing.length}`);
    if (extra.length) issues.push(`${repoLang}:extra_keys:${extra.length}`);
    if (keys.length !== EXPECTED_KEY_COUNT) issues.push(`${repoLang}:key_count:${keys.length}`);

    const filled = keys.filter((k) => typeof flat[k] === "string" && flat[k].trim().length > 0).length;
    totalValues += filled;
    languages.push({
      crowdinLocaleId,
      repoLang,
      keyCount: keys.length,
      filled,
      missing: missing.length,
      extra: extra.length,
      sha256: sha256Buffer(Buffer.from(raw, "utf8")),
      pass: missing.length === 0 && extra.length === 0 && keys.length === EXPECTED_KEY_COUNT,
    });
  }

  const langPassCount = languages.filter((l) => l.pass).length;
  return {
    pass:
      langPassCount === EXPECTED_LANG_COUNT &&
      totalValues === EXPECTED_VALUE_COUNT &&
      issues.length === 0,
    lvSha256: lvSha,
    languages,
    langPassCount,
    expectedLangCount: EXPECTED_LANG_COUNT,
    totalValues,
    expectedValueCount: EXPECTED_VALUE_COUNT,
    issues,
    stagingRoot,
  };
}

async function exportAllCrowdinStaging(options = {}) {
  const stagingRoot = options.stagingRoot || STAGING_ROOT;
  fs.mkdirSync(stagingRoot, { recursive: true });
  const exports = [];
  for (const crowdinLocaleId of CROWDIN_TARGET_LOCALE_IDS) {
    const repoLang = crowdinLocaleToRepo(crowdinLocaleId);
    const outPath = path.join(stagingRoot, `${repoLang}-a1.json`);
    if (!options.force && fs.existsSync(outPath)) {
      const raw = fs.readFileSync(outPath, "utf8");
      exports.push({
        crowdinLocaleId,
        repoLang,
        outPath,
        sha256: sha256Buffer(Buffer.from(raw, "utf8")),
        skipped: true,
      });
      continue;
    }
    const result = await exportLanguage(crowdinLocaleId, stagingRoot);
    exports.push({ ...result, skipped: false });
  }
  const verification = verifyStagingExport(stagingRoot);
  const manifestPath = path.join(ROOT, "reports", "g2-a1-phase3-staging-export-proof.json");
  const manifest = {
    generatedAt: new Date().toISOString(),
    stagingRoot: path.relative(ROOT, stagingRoot).replace(/\\/g, "/"),
    exports,
    verification,
    crowdinApiWrites: 0,
  };
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return { exports, verification, manifestPath };
}

module.exports = {
  exportLanguage,
  exportAllCrowdinStaging,
  verifyStagingExport,
};
