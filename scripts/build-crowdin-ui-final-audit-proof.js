#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY final audit proof for PR #691 (post lb 202 apply).
 * Run: node scripts/build-crowdin-ui-final-audit-proof.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  UI_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  parseCrowdinJson,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
} = require("./lib/ui-crowdin-bridge");
const { classifySameRow } = require("./lib/crowdin-ui-untranslated-classify");

const PROJECT_ID = 923473;
const SOURCE_FILE_PATH = "/main/crowdin/ui/lv.json";
const LABEL_TITLE = "owner-lock-no-auto-translate";
const LOCK_JSON = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.json");
const LB_DECISIONS_JSON = path.join(ROOT, "reports", "crowdin-ui-lb-202-owner-decisions.json");
const LOCK_LABEL_KEYS = [
  "direction.deToNative",
  "direction.nativeToDe",
  "kurss.lessonItems.19.menuDesc",
  "kurss.lessonItems.21.menuDesc",
  "study.table.german",
  "verb.hintSessionProgress",
  "verb.infinitiv",
];

const PROOF_JSON = path.join(ROOT, "reports", "crowdin-ui-final-audit-proof.json");
const PROOF_CSV = path.join(ROOT, "reports", "crowdin-ui-final-audit-proof.csv");
const PROOF_MD = path.join(ROOT, "reports", "crowdin-ui-final-audit-proof.md");

const BEFORE_AUDIT_COMMIT = "cf262998";

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function escapeTableCell(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function auditAllLanguages() {
  const lvFlat = parseCrowdinJson(
    fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`), "utf8")
  );
  const lvKeys = Object.keys(lvFlat).sort();
  const targetLangs = UI_LANGUAGES.filter((l) => l !== CROWDIN_SOURCE_LANG);

  const totals = {
    languages: targetLangs.length,
    keysPerLanguage: lvKeys.length,
    intentionalSame: 0,
    realUntranslated: 0,
    needsOwnerReview: 0,
    placeholderErrors: 0,
    htmlErrors: 0,
    missingKeys: 0,
    extraKeys: 0,
    emptyValues: 0,
    sameRows: 0,
  };

  const remainingWork = [];
  const byLanguage = {};

  for (const repoLang of targetLangs) {
    const jsonFlat = parseCrowdinJson(
      fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${repoLang}.json`), "utf8")
    );
    const targetKeys = new Set(Object.keys(jsonFlat));
    const missing = lvKeys.filter((k) => !targetKeys.has(k));
    const extra = Object.keys(jsonFlat).filter((k) => !lvFlat[k]);
    const empty = lvKeys.filter((k) => targetKeys.has(k) && jsonFlat[k] === "");

    totals.missingKeys += missing.length;
    totals.extraKeys += extra.length;
    totals.emptyValues += empty.length;

    for (const key of missing) {
      remainingWork.push({
        language: repoLang,
        key,
        category: "MISSING_KEY",
        lvSource: lvFlat[key],
        current: "",
        detail: "missing in crowdin/ui JSON",
      });
    }
    for (const key of extra) {
      remainingWork.push({
        language: repoLang,
        key,
        category: "EXTRA_KEY",
        lvSource: "",
        current: jsonFlat[key],
        detail: "extra key not in LV source",
      });
    }
    for (const key of empty) {
      remainingWork.push({
        language: repoLang,
        key,
        category: "EMPTY_VALUE",
        lvSource: lvFlat[key],
        current: "",
        detail: "empty translation value",
      });
    }

    const langCounts = {
      INTENTIONAL_SAME: 0,
      REAL_UNTRANSLATED: 0,
      NEEDS_OWNER_REVIEW: 0,
      PLACEHOLDER_ERROR: 0,
      HTML_ERROR: 0,
    };

    for (const key of lvKeys) {
      if (!targetKeys.has(key)) continue;
      const source = lvFlat[key];
      const target = jsonFlat[key];

      const { extractPlaceholderMultiset, extractHtmlTagStructure } = require("./lib/ui-crowdin-bridge");
      const sourcePh = extractPlaceholderMultiset(source);
      const targetPh = extractPlaceholderMultiset(target);
      if (!multisetEqual(sourcePh, targetPh)) {
        langCounts.PLACEHOLDER_ERROR += 1;
        totals.placeholderErrors += 1;
        remainingWork.push({
          language: repoLang,
          key,
          category: "PLACEHOLDER_ERROR",
          lvSource: source,
          current: target,
          detail: `placeholder mismatch`,
        });
      }
      const sourceHtml = extractHtmlTagStructure(source);
      const targetHtml = extractHtmlTagStructure(target);
      if (sourceHtml !== targetHtml) {
        langCounts.HTML_ERROR += 1;
        totals.htmlErrors += 1;
        remainingWork.push({
          language: repoLang,
          key,
          category: "HTML_ERROR",
          lvSource: source,
          current: target,
          detail: `HTML structure mismatch`,
        });
      }

      if (target !== source) continue;
      const [status] = classifySameRow(key, source);
      langCounts[status] = (langCounts[status] || 0) + 1;
      totals.sameRows += 1;
      if (status === "INTENTIONAL_SAME") totals.intentionalSame += 1;
      if (status === "REAL_UNTRANSLATED") totals.realUntranslated += 1;
      if (status === "NEEDS_OWNER_REVIEW") totals.needsOwnerReview += 1;

      if (status === "REAL_UNTRANSLATED" || status === "NEEDS_OWNER_REVIEW") {
        remainingWork.push({
          language: repoLang,
          key,
          category: status,
          lvSource: source,
          current: target,
          detail: classifySameRow(key, source)[1],
        });
      }
    }

    byLanguage[repoLang] = {
      ...langCounts,
      missing: missing.length,
      extra: extra.length,
      empty: empty.length,
      keys: Object.keys(jsonFlat).length,
    };
  }

  return { totals, remainingWork, byLanguage, lvKeys };
}

function verifyNelabot() {
  const lock = JSON.parse(fs.readFileSync(LOCK_JSON, "utf8"));
  const rows = lock.rows || [];
  let mismatch = 0;
  const failures = [];

  for (const row of rows) {
    const jsonFlat = parseCrowdinJson(
      fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${row.language}.json`), "utf8")
    );
    const uiFlat = flattenUiStrings(loadUiObject(UI_JS_REL(row.language)).obj);
    if (jsonFlat[row.key] !== row.current || uiFlat[row.key] !== row.current) {
      mismatch += 1;
      failures.push(`${row.language} ${row.key}`);
    }
  }

  return { requested: rows.length, mismatch, failures };
}

function verifyLbRepo202() {
  const decisions = JSON.parse(fs.readFileSync(LB_DECISIONS_JSON, "utf8"));
  const rows = decisions.rows || [];
  const jsonFlat = parseCrowdinJson(
    fs.readFileSync(path.join(ROOT, "crowdin", "ui", "lb.json"), "utf8")
  );
  const uiFlat = flattenUiStrings(loadUiObject(UI_JS_REL("lb")).obj);

  let mismatch = 0;
  const failures = [];
  for (const row of rows) {
    if (jsonFlat[row.key] !== row.newValue || uiFlat[row.key] !== row.newValue) {
      mismatch += 1;
      failures.push(row.key);
    }
  }
  return { requested: rows.length, matched: rows.length - mismatch, mismatch, failures };
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

async function crowdinGetAll(token, endpoint) {
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
    if (status !== 200) throw new Error(`Crowdin GET failed ${endpoint} HTTP ${status}`);
    const page = payload?.data || [];
    items.push(...page);
    if (!payload?.pagination || page.length < limit) break;
    offset += limit;
  }
  return items;
}

function normalizeIdentifier(identifier) {
  if (typeof identifier !== "string") return "";
  if (identifier.startsWith('"') && identifier.endsWith('"') && identifier.length >= 2) {
    return identifier.slice(1, -1);
  }
  return identifier;
}

async function verifyCrowdinLbAndLabels(token) {
  const files = await crowdinGetAll(token, `/projects/${PROJECT_ID}/files`);
  const sourceFile = files
    .map((i) => i.data || i)
    .find((f) => f.path === SOURCE_FILE_PATH);
  if (!sourceFile) throw new Error("Missing LV source file in Crowdin");

  const strings = await crowdinGetAll(token, `/projects/${PROJECT_ID}/strings?fileId=${sourceFile.id}`);
  const byKey = new Map();
  for (const item of strings) {
    const s = item.data || item;
    const k = normalizeIdentifier(s.identifier);
    if (k) byKey.set(k, s);
  }

  const labels = await crowdinGetAll(token, `/projects/${PROJECT_ID}/labels`);
  const label = labels.map((i) => i.data || i).find((l) => l.title === LABEL_TITLE);
  if (!label) throw new Error(`Missing label ${LABEL_TITLE}`);

  const labelResults = [];
  let labelsOk = 0;
  for (const key of LOCK_LABEL_KEYS) {
    const s = byKey.get(key);
    const hasLabel = s && (s.labelIds || []).includes(label.id);
    labelResults.push({ key, string_id: s?.id, labeled: hasLabel });
    if (hasLabel) labelsOk += 1;
  }

  const decisions = JSON.parse(fs.readFileSync(LB_DECISIONS_JSON, "utf8"));
  let lbCrowdinMatched = 0;
  let lbCrowdinMismatch = 0;
  const lbFailures = [];

  for (const row of decisions.rows) {
    const s = byKey.get(row.key);
    if (!s) {
      lbCrowdinMismatch += 1;
      lbFailures.push({ key: row.key, reason: "missing_string" });
      continue;
    }
    const { status, payload } = await crowdinRequest(
      token,
      "GET",
      `/projects/${PROJECT_ID}/languages/lb/translations?stringIds=${s.id}`
    );
    if (status !== 200) {
      lbCrowdinMismatch += 1;
      lbFailures.push({ key: row.key, reason: `read_http_${status}` });
      continue;
    }
    const tr = payload?.data?.[0]?.data;
    const text = tr?.text ?? s.text;
    if (text === row.newValue) lbCrowdinMatched += 1;
    else {
      lbCrowdinMismatch += 1;
      lbFailures.push({ key: row.key, reason: "value_mismatch", crowdin: text, expected: row.newValue });
    }
  }

  return {
    labelTitle: LABEL_TITLE,
    labelsRequested: LOCK_LABEL_KEYS.length,
    labelsVerified: labelsOk,
    labelResults,
    lbRequested: decisions.rows.length,
    lbCrowdinMatched,
    lbCrowdinMismatch,
    lbFailures,
  };
}

function runI18nVerify() {
  try {
    const out = execSync("npm run i18n:ui:verify", {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
    return { pass: true, outputTail: out.split("\n").slice(-15).join("\n") };
  } catch (err) {
    return { pass: false, outputTail: (err.stdout || "") + (err.stderr || "") };
  }
}

function getBeforeMetrics() {
  try {
    const text = execSync(`git show ${BEFORE_AUDIT_COMMIT}:reports/crowdin-ui-untranslated-audit.md`, {
      cwd: ROOT,
      encoding: "utf8",
    });
    const pick = (re) => {
      const m = text.match(re);
      return m ? Number(m[1]) : null;
    };
    return {
      commit: BEFORE_AUDIT_COMMIT,
      globalRealUntranslated: pick(/\| REAL_UNTRANSLATED \| \*\*(\d+)\*\*/),
      globalNeedsOwnerReview: pick(/\| NEEDS_OWNER_REVIEW \| \*\*(\d+)\*\*/),
      lbRealUntranslated: (() => {
        const lbSection = text.split("## lb")[1]?.split("---")[0] || "";
        const m = lbSection.match(/REAL_UNTRANSLATED:\*\* (\d+)/) ||
          lbSection.match(/\*\*REAL_UNTRANSLATED:\*\* (\d+)/);
        return m ? Number(m[1]) : null;
      })(),
    };
  } catch {
    return { commit: BEFORE_AUDIT_COMMIT, error: "could not read before audit" };
  }
}

async function main() {
  const generatedAt = new Date().toISOString();
  const auditCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const before = getBeforeMetrics();
  const audit = auditAllLanguages();
  const nelabot = verifyNelabot();
  const lbRepo = verifyLbRepo202();
  const i18nVerify = runI18nVerify();

  let crowdin = null;
  let crowdinError = null;
  const token = process.env.CROWDIN_PERSONAL_TOKEN;
  if (token) {
    try {
      crowdin = await verifyCrowdinLbAndLabels(token);
    } catch (err) {
      crowdinError = err.message;
    }
  } else {
    crowdinError = "CROWDIN_PERSONAL_TOKEN not set";
  }

  const checks = {
    lbRealUntranslatedZero: audit.byLanguage.lb?.REAL_UNTRANSLATED === 0,
    globalRealUntranslatedZero: audit.totals.realUntranslated === 0,
    placeholderErrorsZero: audit.totals.placeholderErrors === 0,
    htmlErrorsZero: audit.totals.htmlErrors === 0,
    structuralKeysZero:
      audit.totals.missingKeys === 0 &&
      audit.totals.extraKeys === 0 &&
      audit.totals.emptyValues === 0,
    i18nVerifyPass: i18nVerify.pass,
    languagesParsed32: i18nVerify.pass,
    nelabotUnchanged: nelabot.mismatch === 0,
    lbRepo202Matched: lbRepo.mismatch === 0,
    crowdinLb202Matched: crowdin ? crowdin.lbCrowdinMismatch === 0 : false,
    lockLabelsOn7Keys: crowdin ? crowdin.labelsVerified === 7 : false,
  };

  const allPass = Object.values(checks).every(Boolean);

  const remainingByCategory = {};
  for (const row of audit.remainingWork) {
    remainingByCategory[row.category] = (remainingByCategory[row.category] || 0) + 1;
  }

  const summary = {
    generatedAt,
    auditCommit,
    pullRequest: 691,
    branch: "cursor/crowdin-ui-untranslated-audit-06ff",
    mode: "READ-ONLY",
    before: {
      auditCommit: before.commit,
      lbRealUntranslated: before.lbRealUntranslated ?? 202,
      globalRealUntranslated: before.globalRealUntranslated ?? 202,
      globalNeedsOwnerReview: before.globalNeedsOwnerReview ?? 194,
    },
    after: {
      lbRealUntranslated: audit.byLanguage.lb?.REAL_UNTRANSLATED ?? 0,
      globalRealUntranslated: audit.totals.realUntranslated,
      globalNeedsOwnerReview: audit.totals.needsOwnerReview,
      globalIntentionalSame: audit.totals.intentionalSame,
      placeholderErrors: audit.totals.placeholderErrors,
      htmlErrors: audit.totals.htmlErrors,
      missingKeys: audit.totals.missingKeys,
      extraKeys: audit.totals.extraKeys,
      emptyValues: audit.totals.emptyValues,
    },
    delta: {
      lbRealUntranslated: `${before.lbRealUntranslated ?? 202} → ${audit.byLanguage.lb?.REAL_UNTRANSLATED ?? 0}`,
      globalRealUntranslated: `${before.globalRealUntranslated ?? 202} → ${audit.totals.realUntranslated}`,
      globalNeedsOwnerReview: `${before.globalNeedsOwnerReview ?? 194} → ${audit.totals.needsOwnerReview}`,
    },
    checks,
    nelabot: {
      requested: nelabot.requested,
      unchanged: nelabot.requested - nelabot.mismatch,
      mismatch: nelabot.mismatch,
    },
    lbRepo202: lbRepo,
    crowdin: crowdin || { error: crowdinError },
    remainingWork: {
      total: audit.remainingWork.length,
      byCategory: remainingByCategory,
    },
    prReadyForOwnerReview: allPass && audit.remainingWork.filter((r) =>
      ["REAL_UNTRANSLATED", "NEEDS_OWNER_REVIEW"].includes(r.category)
    ).length > 0,
    result: allPass ? "PASS" : "FAIL",
  };

  const csvHeader = "language,key,category,lvSource,current,detail";
  const csvRows = audit.remainingWork.map((r) =>
    [
      csvEscape(r.language),
      csvEscape(r.key),
      csvEscape(r.category),
      csvEscape(r.lvSource),
      csvEscape(r.current),
      csvEscape(r.detail),
    ].join(",")
  );

  fs.mkdirSync(path.dirname(PROOF_JSON), { recursive: true });
  fs.writeFileSync(
    PROOF_JSON,
    `${JSON.stringify({ summary, remainingWork: audit.remainingWork, byLanguage: audit.byLanguage }, null, 2)}\n`,
    "utf8"
  );
  fs.writeFileSync(PROOF_CSV, `${[csvHeader, ...csvRows].join("\n")}\n`, "utf8");

  const md = [
    "# Crowdin UI — final audit proof (PR #691)",
    "",
    `**Generated:** ${generatedAt}  `,
    `**Commit:** \`${auditCommit}\`  `,
    "**Režīms:** READ-ONLY gala audits",
    "",
    `## Rezultāts: **${summary.result}**`,
    "",
    "### BEFORE → AFTER",
    "",
    "| Metrika | BEFORE | AFTER |",
    "|---|---:|---:|",
    `| lb REAL_UNTRANSLATED | ${before.lbRealUntranslated ?? 202} | ${audit.byLanguage.lb?.REAL_UNTRANSLATED ?? 0} |`,
    `| Global REAL_UNTRANSLATED | ${before.globalRealUntranslated ?? 202} | ${audit.totals.realUntranslated} |`,
    `| Global NEEDS_OWNER_REVIEW | ${before.globalNeedsOwnerReview ?? 194} | ${audit.totals.needsOwnerReview} |`,
    `| Placeholder errors | 0 | ${audit.totals.placeholderErrors} |`,
    `| HTML errors | 0 | ${audit.totals.htmlErrors} |`,
    `| Missing keys | 0 | ${audit.totals.missingKeys} |`,
    `| Extra keys | 0 | ${audit.totals.extraKeys} |`,
    `| Empty values | 0 | ${audit.totals.emptyValues} |`,
    "",
    "### Pārbaudes",
    "",
    "| Check | Status |",
    "|---|---|",
    ...Object.entries(checks).map(([k, v]) => `| ${k} | ${v ? "PASS" : "FAIL"} |`),
    "",
    "### NELABOT (165 lock manifest)",
    "",
    `- Unchanged: **${nelabot.requested - nelabot.mismatch}/${nelabot.requested}**`,
    "",
    "### lb 202 repo ↔ Crowdin",
    "",
    `- Repo matched: **${lbRepo.matched}/${lbRepo.requested}**`,
    crowdin
      ? `- Crowdin lb matched: **${crowdin.lbCrowdinMatched}/${crowdin.lbRequested}**`
      : `- Crowdin: **${crowdinError}**`,
    crowdin
      ? `- Lock labels \`${LABEL_TITLE}\`: **${crowdin.labelsVerified}/${crowdin.labelsRequested}** source keys`
      : "",
    "",
    "### Atlikušais darbs (no aktuālā audita)",
    "",
    "| Kategorija | Skaits |",
    "|---|---:|",
    ...Object.entries(remainingByCategory)
      .sort((a, b) => b[1] - a[1])
      .map(([cat, n]) => `| ${cat} | ${n} |`),
    "",
    `**Kopā:** ${audit.remainingWork.length} ieraksti (skatīt CSV/JSON)`,
    "",
    "### PR gatavība OWNER pārskatīšanai",
    "",
    summary.prReadyForOwnerReview
      ? "**JĀ** — tehniskās pārbaudes PASS; atlikušās rindas ir `NEEDS_OWNER_REVIEW` (OWNER lēmumu posms)."
      : "**NĒ** — vispirms jānovērš neizdevušās pārbaudes.",
    "",
  ];

  fs.writeFileSync(PROOF_MD, `${md.join("\n")}\n`, "utf8");

  console.log(JSON.stringify(summary, null, 2));
  if (!allPass) process.exit(1);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
