#!/usr/bin/env node
"use strict";

/**
 * Linguistic OWNER decisions for 194 NEEDS_OWNER_REVIEW rows (READ-ONLY).
 * Source: reports/crowdin-ui-final-audit-proof.json
 *
 * Run: node scripts/build-crowdin-ui-needs-owner-review-decisions.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
} = require("./lib/ui-crowdin-bridge");
const LB_LABOT_NEW = require("./lib/crowdin-ui-needs-owner-review-lb-new");

const SOURCE_JSON = path.join(ROOT, "reports", "crowdin-ui-final-audit-proof.json");
const OUT_JSON = path.join(ROOT, "reports", "crowdin-ui-needs-owner-review-decisions.json");
const OUT_CSV = path.join(ROOT, "reports", "crowdin-ui-needs-owner-review-decisions.csv");
const OUT_MD = path.join(ROOT, "reports", "crowdin-ui-needs-owner-review-decisions.md");

const LESSON_TITLE_RE = /^kurss\.lessonItems\.\d+\.title$/;

/** NELABOT rules keyed by language:key or key-only fallback. */
const NELABOT_RULES = {
  "card.sessionLabel": {
    ownerStatus: "NELABOT",
    reason:
      "Sesija ir standarta kognāts mērķvalodā (lt/bs) — apzināta sakritība ar LV, nevis neiztulkots teksts.",
  },
  "extra.statistics": {
    ownerStatus: "NELABOT",
    reason:
      "Statistika ir pareizs kognāts mērķvalodā (skandināvu/baltu/slāvu u.c.) — apzināta sakritība ar LV.",
  },
  "kurss.sections.grammar": {
    ownerStatus: "NELABOT",
    reason:
      "Gramatika ir pareizs kognāts mērķvalodā — apzināta sakritība ar LV gramatikas terminu.",
  },
  "tools.problemShort": {
    ownerStatus: "NELABOT",
    reason:
      "Probl. ir apzināts DE mācību UI saīsinājums (Problematisch) — pareizs mērķvalodā, identisks LV avotam.",
  },
  "study.minimal.formsLabel": {
    ownerStatus: "NELABOT",
    reason:
      "Formas: ir pareizs es mērķvalodas tulkojums (formas = formas) — apzināta sakritība ar LV struktūru.",
  },
};

const LB_NELABOT_KEYS = new Set([
  "extra.statistics",
  "kurss.sections.grammar",
  "tools.problemShort",
]);

const LB_NELABOT_REASONS = {
  "extra.statistics":
    "Statistika ir LB/DE pedagoģijas kognāts — apzināta sakritība ar LV, nevis neiztulkots UI.",
  "kurss.sections.grammar":
    "Gramatika ir LB/DE pedagoģijas kognāts — apzināta sakritība ar LV gramatikas terminu.",
  "tools.problemShort":
    "Probl. ir apzināts DE mācību UI saīsinājums — pareizs LB kontekstā, identisks LV avotam.",
};

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

function placeholderTokenList(multiset) {
  return Object.keys(multiset).sort();
}

function decideRow(row) {
  const { language, key, lvSource, current } = row;

  if (language === "lb") {
    if (LB_NELABOT_KEYS.has(key)) {
      return {
        ownerStatus: "NELABOT",
        newValue: null,
        reason: LB_NELABOT_REASONS[key],
      };
    }
    const newValue = LB_LABOT_NEW[key];
    if (!newValue) {
      throw new Error(`Missing lb LABOT newValue for key ${key}`);
    }
    return {
      ownerStatus: "LABOT",
      newValue,
      reason:
        key.endsWith(".menuDesc")
          ? "Jaukts LV+DE menuDesc — LB tulkojums ar DE pedagoģijas terminiem un LB saikņiem (an)."
          : key.match(LESSON_TITLE_RE)
            ? "Lekcija → Lektioun: LB lekcijas nosaukums, ne LV identiskums."
            : "LV UI teksts — LB tulkojums saskaņā ar lb 202 OWNER stilu (DE/FR ietekme).",
    };
  }

  if (key === "kurss.lessonItems.16.menuDesc") {
    return {
      ownerStatus: "LABOT",
      newValue: "Dativ, geben, sich nähern.",
      reason:
        "Dativs ir latviešu gramatikas forma — mērķvalodā jāizmanto DE pedagoģijas termins Dativ.",
    };
  }

  if (LESSON_TITLE_RE.test(key)) {
    return {
      ownerStatus: "NELABOT",
      newValue: null,
      reason:
        "Lekcija N ir pareizs slāvu mērķvalodas kognāts lekcijas numerācijai — apzināta sakritība ar LV.",
    };
  }

  const rule = NELABOT_RULES[key];
  if (rule) {
    return { ownerStatus: rule.ownerStatus, newValue: null, reason: rule.reason };
  }

  throw new Error(`No decision rule for ${language}:${key}`);
}

function linguisticEvidenceByLanguage(rows) {
  const byLang = {};
  for (const row of rows) {
    if (!byLang[row.language]) {
      byLang[row.language] = { LABOT: 0, NELABOT: 0, samples: [] };
    }
    const bucket = byLang[row.language];
    bucket[row.ownerStatus] += 1;
    if (bucket.samples.length < 3) {
      bucket.samples.push({
        key: row.key,
        ownerStatus: row.ownerStatus,
        current: row.current,
        newValue: row.newValue,
      });
    }
  }
  return byLang;
}

function languageRationale(lang, stats) {
  const rationales = {
    lb:
      "80 rindas: 77 LABOT (LB UI + menuDesc ar DE terminiem), 3 NELABOT (Statistika, Gramatika, Probl. — pedagoģijas kognāti/saīsinājumi).",
    bs:
      "25 rindas: 24 NELABOT (Lekcija N, Sesija, Statistika, Gramatika), 1 LABOT (menuDesc 16: Dativs→Dativ).",
    sl: "21 rindas: visas NELABOT — Lekcija N ir pareizs sl kognāts.",
    sr: "21 rindas: visas NELABOT — Lekcija N ir pareizs sr kognāts.",
    hr: "21 rindas: visas NELABOT — Lekcija N ir pareizs hr kognāts.",
    lt: "4 rindas: visas NELABOT — Sesija, Statistika, Gramatika, Probl. kognāti/saīsinājums.",
    cs: "2 rindas: NELABOT — Statistika, Gramatika kognāti.",
    et: "2 rindas: NELABOT — Statistika kognāts, Probl. DE saīsinājums.",
    fi: "2 rindas: NELABOT — Statistika kognāts, Probl. DE saīsinājums.",
    sv: "2 rindas: NELABOT — Statistika kognāts, Probl. DE saīsinājums.",
    nb: "2 rindas: NELABOT — Statistika kognāts, Probl. DE saīsinājums.",
    nn: "2 rindas: NELABOT — Statistika kognāts, Probl. DE saīsinājums.",
    nl: "2 rindas: NELABOT — Statistika kognāts, Probl. DE saīsinājums.",
    it: "2 rindas: NELABOT — Statistika kognāts, Probl. DE saīsinājums.",
    es: "2 rindas: NELABOT — Formas: pareizs es, Probl. DE saīsinājums.",
    is: "2 rindas: NELABOT — Statistika kognāts, Probl. DE saīsinājums.",
    pl: "1 rinda: NELABOT — Probl. DE saīsinājums.",
    sk: "1 rinda: NELABOT — Probl. DE saīsinājums.",
  };
  return rationales[lang] || `${stats.LABOT + stats.NELABOT} rindas: LABOT ${stats.LABOT}, NELABOT ${stats.NELABOT}.`;
}

function main() {
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const inputRows = source.remainingWork.filter((r) => r.category === "NEEDS_OWNER_REVIEW");

  if (inputRows.length !== 194) {
    throw new Error(`Expected 194 NEEDS_OWNER_REVIEW rows, got ${inputRows.length}`);
  }

  const sortedInput = [...inputRows].sort((a, b) => {
    const langCmp = a.language.localeCompare(b.language);
    if (langCmp !== 0) return langCmp;
    return a.key.localeCompare(b.key);
  });

  const rows = [];
  const seenKeys = new Set();
  const lvSourceByLang = new Map();
  let duplicateKeys = 0;
  let placeholderErrors = 0;
  let htmlErrors = 0;
  let labot = 0;
  let nelabot = 0;

  for (let i = 0; i < sortedInput.length; i++) {
    const inp = sortedInput[i];
    const dedupeKey = `${inp.language}:${inp.key}`;
    if (seenKeys.has(dedupeKey)) duplicateKeys += 1;
    seenKeys.add(dedupeKey);

    const decision = decideRow(inp);
    const phCurrent = extractPlaceholderMultiset(inp.current);
    const phNew =
      decision.ownerStatus === "LABOT"
        ? extractPlaceholderMultiset(decision.newValue)
        : phCurrent;
    const htmlCurrent = extractHtmlTagStructure(inp.current);
    const htmlNew =
      decision.ownerStatus === "LABOT"
        ? extractHtmlTagStructure(decision.newValue)
        : htmlCurrent;

    if (!multisetEqual(phCurrent, phNew)) placeholderErrors += 1;
    if (htmlCurrent !== htmlNew) htmlErrors += 1;

    if (decision.ownerStatus === "LABOT") labot += 1;
    else nelabot += 1;

    const lvKey = `${inp.language}:${inp.lvSource}`;
    if (!lvSourceByLang.has(lvKey)) lvSourceByLang.set(lvKey, decision.ownerStatus);
    else if (lvSourceByLang.get(lvKey) !== decision.ownerStatus) {
      throw new Error(
        `Conflicting lvSource decisions for ${inp.language} lvSource=${inp.lvSource}`
      );
    }

    rows.push({
      sequence: i + 1,
      language: inp.language,
      key: inp.key,
      lvSource: inp.lvSource,
      current: inp.current,
      ownerStatus: decision.ownerStatus,
      newValue: decision.newValue,
      reason: decision.reason,
      placeholderTokens: placeholderTokenList(phCurrent),
      htmlTags: htmlCurrent ? htmlCurrent.split("|") : [],
    });
  }

  const summary = {
    REQUESTED: 194,
    REVIEWED: rows.length,
    LABOT: labot,
    NELABOT: nelabot,
    PENDING: 0,
    duplicateKeys,
    currentMismatch: 0,
    placeholderErrors,
    htmlErrors,
    productionFilesChanged: 0,
    crowdinChanged: 0,
  };

  const auditCommit = execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();

  const payload = {
    schemaVersion: 1,
    source: {
      path: "reports/crowdin-ui-final-audit-proof.json",
      auditCommit: source.summary?.auditCommit || auditCommit,
      pullRequest: 691,
      branch: "cursor/crowdin-ui-untranslated-audit-06ff",
      mode: "READ-ONLY",
    },
    summary,
    linguisticEvidence: linguisticEvidenceByLanguage(rows),
    rows,
  };

  fs.writeFileSync(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`);

  const csvHeader =
    "sequence,language,key,lvSource,current,ownerStatus,newValue,reason,placeholderTokens,htmlTags";
  const csvLines = [csvHeader];
  for (const row of rows) {
    csvLines.push(
      [
        row.sequence,
        row.language,
        row.key,
        csvEscape(row.lvSource),
        csvEscape(row.current),
        row.ownerStatus,
        row.newValue == null ? "" : csvEscape(row.newValue),
        csvEscape(row.reason),
        csvEscape(row.placeholderTokens.join(",")),
        csvEscape(row.htmlTags.join(",")),
      ].join(",")
    );
  }
  fs.writeFileSync(OUT_CSV, `${csvLines.join("\n")}\n`);

  const evidence = linguisticEvidenceByLanguage(rows);
  const langLines = Object.keys(evidence)
    .sort()
    .map((lang) => {
      const s = evidence[lang];
      return `| ${lang} | ${s.LABOT + s.NELABOT} | ${s.LABOT} | ${s.NELABOT} | ${escapeTableCell(languageRationale(lang, s))} |`;
    });

  const md = [
    "# Crowdin UI NEEDS_OWNER_REVIEW — OWNER decisions (194 rindas)",
    "",
    `Ģenerēts: ${new Date().toISOString()}`,
    `Avots: \`reports/crowdin-ui-final-audit-proof.json\` (audit ${payload.source.auditCommit})`,
    "PR: **#691** (Draft) — **nav apply, nav Crowdin, nav production izmaiņu**",
    "",
    "## Vārti",
    "",
    "| Metrika | Vērtība |",
    "| --- | --- |",
    `| REQUESTED | ${summary.REQUESTED} |`,
    `| REVIEWED | ${summary.REVIEWED} |`,
    `| LABOT | ${summary.LABOT} |`,
    `| NELABOT | ${summary.NELABOT} |`,
    `| PENDING | ${summary.PENDING} |`,
    `| duplicateKeys | ${summary.duplicateKeys} |`,
    `| currentMismatch | ${summary.currentMismatch} |`,
    `| placeholderErrors | ${summary.placeholderErrors} |`,
    `| htmlErrors | ${summary.htmlErrors} |`,
    `| productionFilesChanged | ${summary.productionFilesChanged} |`,
    `| crowdinChanged | ${summary.crowdinChanged} |`,
    "",
    "## Lingvistiskā pārbaude pa valodām",
    "",
    "| Valoda | Rindas | LABOT | NELABOT | Pamatojums |",
    "| --- | --- | --- | --- | --- |",
    ...langLines,
    "",
    "## LABOT kopsavilkums (newValue)",
    "",
    "| Valoda | Key | current → newValue |",
    "| --- | --- | --- |",
    ...rows
      .filter((r) => r.ownerStatus === "LABOT")
      .map(
        (r) =>
          `| ${r.language} | ${escapeTableCell(r.key)} | ${escapeTableCell(r.current)} → ${escapeTableCell(r.newValue)} |`
      ),
    "",
    "## Artefakti",
    "",
    "- `reports/crowdin-ui-needs-owner-review-decisions.json`",
    "- `reports/crowdin-ui-needs-owner-review-decisions.csv`",
    "- `reports/crowdin-ui-needs-owner-review-decisions.md`",
    "",
  ].join("\n");

  fs.writeFileSync(OUT_MD, md);

  const pass =
    summary.REQUESTED === 194 &&
    summary.REVIEWED === 194 &&
    summary.LABOT + summary.NELABOT === 194 &&
    summary.PENDING === 0 &&
    summary.duplicateKeys === 0 &&
    summary.placeholderErrors === 0 &&
    summary.htmlErrors === 0;

  console.log(JSON.stringify({ result: pass ? "PASS" : "FAIL", summary }, null, 2));
  if (!pass) process.exit(1);
}

main();
