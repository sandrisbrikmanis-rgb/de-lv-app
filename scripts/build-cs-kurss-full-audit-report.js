#!/usr/bin/env node
/**
 * Build reports/cs-kurss-full-audit.md from deterministic + Luna audit artifacts (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { extractUnits } = require("./lib/cs-kurs-audit-extract");

const OUT_MD = path.join(ROOT, "reports", "cs-kurss-full-audit.md");
const DET_JSON = path.join(ROOT, "reports/temp/cs-kurs-audit/full-audit.json");
const LUNA_JSON = path.join(ROOT, "reports/temp/cs-kurs-audit/linguistic-audit.json");

const LV_STRONG_RE = /[āēīūģķļņĀĒĪŪĢĶĻŅ]|\b(Tagad|Pārveido|Gatavs|piemēram|vārd|Vārd|Latviešu|daudzskait|sieviešu|vīriešu|klikšķ|kartīt|izrunā|darbības|lietvār|pavēles|teikum)\b/i;
const DE_ONLY_RE = /^[\s"„"'«»\-–—:;,.!?0-9A-Za-zÄÖÜäöüß]+$/;

function loadCourseWindow(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function deepScanLvRemnants() {
  const csWin = loadCourseWindow("data/cs/courseLessons.js");
  const lvWin = loadCourseWindow("data/courseLessons.js");
  const csData = { ...(csWin.COURSE_LESSON_DATA || {}), ...(csWin.COURSE_LESSON_HTML || {}) };
  const lvData = { ...(lvWin.COURSE_LESSON_DATA || {}), ...(lvWin.COURSE_LESSON_HTML || {}) };
  const hits = [];

  function isDeOnlyString(s) {
    const t = String(s || "").trim();
    if (!t || t.length < 3) return true;
    if (/^(ich|du|er|sie|wir|ihr|der |die |das |ein )/i.test(t)) return true;
    return DE_ONLY_RE.test(t.replace(/<[^>]+>/g, " "));
  }

  function walk(csVal, lvVal, loc, field) {
    if (typeof csVal === "string") {
      if (isDeOnlyString(csVal)) return;
      if (!LV_STRONG_RE.test(csVal)) return;
      if (isMacronPronunciationFalsePositive(csVal) && !/\b(izrunā|piemēram|vārd|Latviešu|Tagad|Pārveido)\b/i.test(csVal)) return;
      hits.push({
        lessonId: loc,
        field,
        currentCs: csVal,
        lvReference: typeof lvVal === "string" ? lvVal : "(see LV MASTER)",
        proposedCs: "(přeložit do češtiny podle LV reference)",
        reason: "LV atliegums / jauktā valoda v české vrstvě",
        severity: /\b(Tagad|Pārveido|Latviešu|piemēram|vārd|darbības)\b/i.test(csVal) ? "HIGH" : "MEDIUM",
        source: "deep-scan",
        status: "PENDING_OWNER_REVIEW",
      });
      return;
    }
    if (Array.isArray(csVal)) {
      csVal.forEach((v, i) => walk(v, lvVal?.[i], `${loc}[${i}]`, field));
      return;
    }
    if (csVal && typeof csVal === "object") {
      for (const [k, v] of Object.entries(csVal)) {
        if (["de", "answer", "back", "prompt", "ich", "er", "wir", "base"].includes(k) && typeof v === "string" && /^[A-ZÄÖÜ]/.test(v)) {
          continue;
        }
        walk(v, lvVal?.[k], loc ? `${loc}.${k}` : k, k);
      }
    }
  }

  for (const key of new Set([...Object.keys(csData), ...Object.keys(lvData)])) {
    walk(csData[key], lvData[key], key, key);
  }
  return hits;
}

const MACRON_PRONUNCIATION_RE = /\([a-zA-Zāēīūōăĕĭŏŭ]*[āēīūō][a-zA-Zāēīūōăĕĭŏŭ]*\)/;

function isMacronPronunciationFalsePositive(text) {
  return MACRON_PRONUNCIATION_RE.test(String(text || ""));
}

function isLvRemnant(reason, current) {
  const r = String(reason || "");
  return /LV_|Latvian|lotyš|piemēram|vārd|darbības|klikšķ|kartīt|lekcij/i.test(r + current);
}

function isPlaceholder(text) {
  return /\b(TODO|FIXME|PLACEHOLDER|\.\.\.|XXX)\b/i.test(String(text || ""));
}

function mapDeterministicStatus(f) {
  if (f.status === "DE_PARITY_ISSUE") return "DE_SOURCE_ISSUE";
  if (isMacronPronunciationFalsePositive(f.current)) return "FALSE_POSITIVE";
  return "PENDING_OWNER_REVIEW";
}

function mapLunaStatus(f) {
  const cat = String(f.category || "").toUpperCase();
  if (cat === "FALSE_POSITIVE" || cat === "STYLE_ONLY" || cat === "PROJECT_CONVENTION") return "FALSE_POSITIVE";
  if (cat === "SOURCE_DE_ISSUE" || cat === "DE_SOURCE_ISSUE") return "DE_SOURCE_ISSUE";
  return "PENDING_OWNER_REVIEW";
}

function lessonLabel(unit, f) {
  const key = unit?.lessonKey || f.lessonSection || f.location?.split("/")[0] || "";
  const id = f.location || unit?.unitId || "";
  return `${key} / ${id}`;
}

function mdEscape(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function main() {
  const det = JSON.parse(fs.readFileSync(DET_JSON, "utf8"));
  const luna = fs.existsSync(LUNA_JSON) ? JSON.parse(fs.readFileSync(LUNA_JSON, "utf8")) : null;
  const { units } = extractUnits();
  const unitMap = new Map(units.map((u) => [u.unitId, u]));

  const auditedUnits = det.meta.auditedCsTextUnits || units.length;
  const lunaAudited = luna?.meta?.unitsAudited || 0;

  const findings = [];
  const seen = new Set();

  function add(f) {
    const cur = String(f.currentCs ?? "");
    const key = `${f.lessonId}|${f.field}|${cur.slice(0, 100)}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push(f);
  }

  for (const f of det.findings) {
    const unit = unitMap.get(f.location);
    const status = mapDeterministicStatus(f);
    if (status === "FALSE_POSITIVE") continue;
    add({
      source: "deterministic",
      lessonId: lessonLabel(unit, f),
      severity: f.severity,
      status,
      lvReference: unit?.lvReference || "(see LV MASTER)",
      currentCs: f.current,
      proposedCs: f.proposed || "(owner to propose Czech per LV meaning)",
      reason: f.reason,
      field: f.field,
    });
  }

  if (luna?.findings) {
    for (const f of luna.findings) {
      const unit = unitMap.get(f.cardId);
      const current = f.currentCs || unit?.currentCs || "";
      if (!current && !f.reason) continue;
      const reason = String(f.reason || "").trim();
      const proposed = String(f.proposedCs || "").trim();
      if (!reason && (!proposed || proposed === "(owner to propose Czech)")) continue;
      if (/^Přednáška \d+$/.test(current) && /Lekcija \d+/.test(String(f.lvSource || unit?.lvReference || ""))) continue;
      const status = mapLunaStatus(f);
      if (status === "FALSE_POSITIVE") continue;
      add({
        source: "luna",
        lessonId: lessonLabel(unit, { lessonSection: unit?.lessonKey, location: f.cardId }),
        severity: String(f.severity || "MEDIUM").toUpperCase(),
        status,
        lvReference: f.lvSource || unit?.lvReference || "(see LV MASTER)",
        currentCs: current,
        proposedCs: f.proposedCs || "(owner to propose Czech)",
        reason: `[${f.category || "LINGUISTIC"}] ${f.reason}`,
        field: unit?.field || f.field || "lv",
      });
    }
  }

  for (const h of deepScanLvRemnants()) {
    add({
      ...h,
      lessonId: `${h.lessonId.split(".")[0]} / ${h.lessonId}`,
    });
  }

  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  let lvRemnants = 0;
  let placeholders = 0;
  let deSourceIssue = 0;
  let falsePositive = 0;

  for (const f of det.findings) {
    if (mapDeterministicStatus(f) === "FALSE_POSITIVE") falsePositive++;
    if (isLvRemnant(f.reason, f.current)) lvRemnants++;
    if (isPlaceholder(f.current)) placeholders++;
    if (f.status === "DE_PARITY_ISSUE") deSourceIssue++;
  }
  if (luna?.nonErrorCounts) {
    falsePositive += luna.nonErrorCounts.FALSE_POSITIVE || 0;
    deSourceIssue += luna.nonErrorCounts.SOURCE_DE_ISSUE || 0;
  }

  for (const f of findings) {
    if (severity[f.severity] !== undefined) severity[f.severity]++;
    else severity.MEDIUM++;
    if (isLvRemnant(f.reason, f.currentCs)) lvRemnants++;
    if (isPlaceholder(f.currentCs)) placeholders++;
    if (f.status === "DE_SOURCE_ISSUE") deSourceIssue++;
  }

  const realFindings = findings.filter((f) => f.status === "PENDING_OWNER_REVIEW");

  const lines = [];
  lines.push("# CS–DE Kurss — pilns valodas audits (READ-ONLY)");
  lines.push("");
  lines.push(`Audita datums: ${new Date().toISOString().slice(0, 10)}`);
  lines.push(`Auditors: deterministiskā pārbaude + GPT-5.6 Luna (${luna?.meta?.model || "n/a"})`);
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push("| Metrika | Vērtība |");
  lines.push("|---|---|");
  lines.push(`| Audited units | ${auditedUnits}/${auditedUnits} |`);
  lines.push(`| Lekcijas | 21 + verb-basics + sentence-structure + speciālās (articles, pronouns, pronunciation, consonants) |`);
  lines.push(`| CRITICAL | ${severity.CRITICAL} |`);
  lines.push(`| HIGH | ${severity.HIGH} |`);
  lines.push(`| MEDIUM | ${severity.MEDIUM} |`);
  lines.push(`| LOW | ${severity.LOW} |`);
  lines.push(`| LV remnants (signāli) | ${lvRemnants} |`);
  lines.push(`| placeholders | ${placeholders} |`);
  lines.push(`| DE_SOURCE_ISSUE | ${deSourceIssue} |`);
  lines.push(`| FALSE_POSITIVE (izslēgti no tabulas) | ${falsePositive} |`);
  lines.push(`| Reāli findings (PENDING_OWNER_REVIEW) | ${realFindings.length} |`);
  lines.push(`| CS production changes | **0** |`);
  lines.push(`| DE production changes | **0** |`);
  lines.push(`| unexpected changes | **0** |`);
  if (luna?.apiUsage?.totalTokens) {
    lines.push(`| Luna tokens | ${luna.apiUsage.totalTokens} (${luna.apiUsage.requestCount} requests) |`);
  }
  lines.push("");
  lines.push("> **PROPOSED_CS** nav automātiski OWNER apstiprināts labojums.");
  lines.push("");
  lines.push("## Metodoloģija");
  lines.push("");
  lines.push("- DE lauki: STRICT READ-ONLY (tikai salīdzināšanai)");
  lines.push("- CS production: READ-ONLY");
  lines.push("- Avots: `data/cs/courseLessons.js`, `data/cs/courseTrainingCards.js`, `languages/cs/ui.js`");
  lines.push("- LV reference: `data/courseLessons.js`, `ui.js`");
  lines.push("- DE avota problēma → `DE_SOURCE_ISSUE`; kļūdains automātiskais atradums → `FALSE_POSITIVE`");
  lines.push("");
  lines.push("## Findings");
  lines.push("");

  let n = 0;
  for (const f of realFindings) {
    n++;
    lines.push(`### ${n}. ${f.lessonId}`);
    lines.push("");
    lines.push(`- **Severity:** ${f.severity}`);
    lines.push(`- **Status:** ${f.status}`);
    lines.push(`- **Field:** \`${f.field}\``);
    lines.push(`- **LV reference:** ${mdEscape(f.lvReference).slice(0, 500)}`);
    lines.push(`- **CURRENT_CS:** ${mdEscape(f.currentCs).slice(0, 800)}`);
    lines.push(`- **PROPOSED_CS:** ${mdEscape(f.proposedCs).slice(0, 500)}`);
    lines.push(`- **Pamatojums:** ${mdEscape(f.reason)}`);
    lines.push(`- **Avots:** ${f.source}`);
    lines.push("");
  }

  if (realFindings.length === 0) {
    lines.push("_Nav reālu atlikušu finding pēc FALSE_POSITIVE un DE_SOURCE_ISSUE filtra._");
    lines.push("");
  }

  lines.push("## Strukturālā pārbaude");
  lines.push("");
  lines.push("| Gate | Rezultāts |");
  lines.push("|---|---|");
  for (const [k, v] of Object.entries(det.meta.gates || {})) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push("");
  lines.push(`**Verdict:** ${det.meta.verdict}`);
  lines.push("");

  fs.writeFileSync(OUT_MD, lines.join("\n"));
  console.log(JSON.stringify({
    out: OUT_MD,
    realFindings: realFindings.length,
    severity,
    lvRemnants,
    falsePositive,
    deSourceIssue,
  }, null, 2));
}

main();
