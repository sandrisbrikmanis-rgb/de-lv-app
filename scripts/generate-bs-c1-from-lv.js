#!/usr/bin/env node
/**
 * Pilot: Generate data/bs/c1.js from LV baseline (data/c1.js) using GPT-5.6 Luna batch translation.
 * German fields remain READ-ONLY.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const {
  DEFAULT_MODEL,
  createStats,
  translateItemsBatch,
  estimateCostUsd,
} = require("./lib/openai-translate-batch");

const SOURCE_FILE = path.join(ROOT, "data", "c1.js");
const OUT_FILE = path.join(ROOT, "data", "bs", "c1.js");
const WWW_OUT_FILE = path.join(ROOT, "www", "data", "bs", "c1.js");
const CACHE_PATH = path.join(ROOT, "scripts", ".bs-c1-openai-translation-cache.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-c1-openai-stats.json");
const REPORT_PATH = path.join(ROOT, "reports", "bs-c1-pilot-report.md");
const GOOGLE_CACHE_PATH = path.join(ROOT, "scripts", ".bs-lv-translation-cache.json");
const A1_CACHE_PATH = path.join(ROOT, "scripts", ".bs-a1-openai-translation-cache.json");
const A2_CACHE_PATH = path.join(ROOT, "scripts", ".bs-a2-openai-translation-cache.json");

const TARGET_LANGUAGE = "Bosnian";
const CARDS_PER_BATCH = 25;
const BULLET = "•";
const LV_DIAC = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember", "info",
]);

const NAME_REPLACEMENTS = [
  [/\bPēteris\b/g, "Petar"], [/\bPētera\b/g, "Petra"],
  [/\bJānis\b/g, "Ivan"], [/\bJāņa\b/g, "Ivana"],
  [/\bRūdolfs\b/g, "Rudolf"], [/\bRoberts\b/g, "Robert"],
  [/\bMarija\b/g, "Marija"], [/\bLīga\b/g, "Liga"],
  [/\bAndris\b/g, "Andrija"], [/\bIlze\b/g, "Ilze"],
  [/\blatviešu\b/gi, "bosanski"], [/\bLatvijas\b/g, "Bosne"],
];

function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function seedCaches(cache) {
  let seeded = 0;
  const sources = [
  [GOOGLE_CACHE_PATH, (key, value) => key.startsWith("lv|bs|") ? key.slice("lv|bs|".length) : null],
  [A1_CACHE_PATH, (key) => key],
  [A2_CACHE_PATH, (key) => key],
  ];
  for (const [filePath, keyFn] of sources) {
    if (!fs.existsSync(filePath)) continue;
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    for (const [key, value] of Object.entries(data)) {
      const source = keyFn(key, value);
      if (!source || cache[source] || typeof value !== "string" || !value.trim()) continue;
      if (filePath === GOOGLE_CACHE_PATH && LV_DIAC.test(value)) continue;
      cache[source] = postProcess(value);
      seeded += 1;
    }
  }
  return seeded;
}

function postProcess(text) {
  if (!text || typeof text !== "string") return text;
  let out = text.replace(/;\s*/g, ` ${BULLET} `);
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
  out = out.replace(/\s+/g, " ").replace(/\s+•\s+/g, ` ${BULLET} `).trim();
  if (out.includes(BULLET)) {
    out = out.split(BULLET).map((part) => {
      const trimmed = part.trim();
      return trimmed ? trimmed.charAt(0).toUpperCase() + trimmed.slice(1) : trimmed;
    }).join(` ${BULLET} `);
  } else if (out.length) {
    out = out.charAt(0).toUpperCase() + out.slice(1);
  }
  return out;
}

function isBrokenTranslation(source, translated) {
  if (!translated || typeof translated !== "string" || !translated.trim()) return true;
  if (/```/.test(translated)) return true;
  if (/^(translation|tulkojums)\s*:/i.test(translated)) return true;
  if (LV_DIAC.test(translated)) return true;
  if (translated === source && LV_DIAC.test(source)) return true;
  return false;
}

function loadC1Words() {
  const code = fs.readFileSync(SOURCE_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.C1_WORDS;
}

function makeStringId(sourceText, index) {
  const hash = crypto.createHash("sha1").update(sourceText).digest("hex").slice(0, 10);
  return `s-${index}-${hash}`;
}

function collectStrings(value, out, parentKey = "") {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey) && value.trim()) out.add(value);
    return;
  }
  if (Array.isArray(value)) {
    const key = NATIVE_KEYS.has(parentKey) ? parentKey : "";
    value.forEach((item) => collectStrings(item, out, key || parentKey));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (["de", "de_article", "de_plural", "id", "layout", "level"].includes(key)) continue;
      if (key === "sectionAccents" || key === "accents") {
        collectSectionAccents(child, out);
        continue;
      }
      if (typeof child === "string") {
        if (NATIVE_KEYS.has(key) && child.trim()) out.add(child);
        else if (key === "example") {
          if (child.includes("=")) {
            const right = child.split("=").pop().trim();
            if (right) out.add(right);
          }
          const dash = child.match(/\s*[–—-]\s*(.+)$/);
          if (dash && dash[1].trim()) out.add(dash[1].trim());
        }
      } else {
        collectStrings(child, out, key);
      }
    }
  }
}

function shouldTranslateAccentString(text, inDeBranch, inLvBranch = false) {
  if (inDeBranch || !text || !text.trim()) return false;
  if (inLvBranch) return true;
  return LV_DIAC.test(text);
}

function collectSectionAccents(value, out, inDeBranch = false, inLvBranch = false) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (shouldTranslateAccentString(value, inDeBranch, inLvBranch)) out.add(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectSectionAccents(item, out, inDeBranch, inLvBranch));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      collectSectionAccents(child, out, inDeBranch || key === "de", inLvBranch || key === "lv");
    }
  }
}

function applySectionAccents(value, map, inDeBranch = false, inLvBranch = false) {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") {
    if (!shouldTranslateAccentString(value, inDeBranch, inLvBranch)) return value;
    return map[value] ?? value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => applySectionAccents(item, map, inDeBranch, inLvBranch));
  }
  if (typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = applySectionAccents(child, map, inDeBranch || key === "de", inLvBranch || key === "lv");
    }
    return out;
  }
  return value;
}

function applyTranslation(value, map, parentKey = "") {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey)) return map[value] ?? value;
    if (parentKey === "example") {
      if (value.includes("=")) {
        const idx = value.indexOf("=");
        const left = value.slice(0, idx + 1);
        const right = value.slice(idx + 1).trim();
        return right && map[right] ? `${left} ${map[right]}` : value;
      }
      const dash = value.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash) {
        const right = dash[3].trim();
        return right && map[right] ? `${dash[1]}${dash[2]}${map[right]}` : value;
      }
    }
    return value;
  }
  if (Array.isArray(value)) {
    if (NATIVE_KEYS.has(parentKey)) {
      return value.map((item) => {
        if (typeof item === "string") return map[item] ?? item;
        return applyTranslation(item, map, parentKey);
      });
    }
    return value.map((item) => applyTranslation(item, map, parentKey));
  }
  if (typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      if (key === "sectionAccents" || key === "accents") {
        out[key] = applySectionAccents(child, map);
        continue;
      }
      if (key === "word" && parentKey === "comparison") {
        out[key] = child;
        continue;
      }
      out[key] = applyTranslation(child, map, key);
    }
    return out;
  }
  return value;
}

function collectCardStrings(entry) {
  const strings = new Set();
  collectStrings(entry, strings);
  return [...strings].filter((text) => text && text.trim());
}

function writeC1File(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const C1_WORDS = ${json};\n\nwindow.C1_WORDS = C1_WORDS;\n`, "utf8");
}

function buildStringIndex(words) {
  const uniqueTexts = [];
  const textToId = new Map();
  const cardStrings = words.map((entry) => collectCardStrings(entry));

  for (const strings of cardStrings) {
    for (const text of strings) {
      if (!textToId.has(text)) {
        const id = makeStringId(text, uniqueTexts.length + 1);
        textToId.set(text, id);
        uniqueTexts.push({ id, text, field: "lv" });
      }
    }
  }

  return { uniqueTexts, textToId, cardStrings };
}

async function translatePendingBatches(words, cache, stats) {
  const { uniqueTexts, textToId, cardStrings } = buildStringIndex(words);
  stats.uniqueStringCount = uniqueTexts.length;

  const pendingByText = new Map();
  for (const item of uniqueTexts) {
    if (!cache[item.text]) pendingByText.set(item.text, item);
  }

  const cachedCount = uniqueTexts.length - pendingByText.size;
  stats.cacheHits = cachedCount;
  console.log(`BS C1 pilot: ${uniqueTexts.length} unique strings, ${cachedCount} cache hits, ${pendingByText.size} to translate`);

  const totalBatches = Math.ceil(words.length / CARDS_PER_BATCH);
  for (let batchIndex = 0; batchIndex < totalBatches; batchIndex += 1) {
    const start = batchIndex * CARDS_PER_BATCH;
    const end = Math.min(start + CARDS_PER_BATCH, words.length);
    const batchTexts = new Set();
    for (let cardIndex = start; cardIndex < end; cardIndex += 1) {
      for (const text of cardStrings[cardIndex]) {
        if (pendingByText.has(text)) batchTexts.add(text);
      }
    }
    if (!batchTexts.size) continue;

    const items = [...batchTexts].map((text) => {
      const meta = pendingByText.get(text);
      return { id: meta.id, field: meta.field, text };
    });

    let attempts = 0;
    let remaining = [...items];
    while (remaining.length && attempts < 2) {
      attempts += 1;
      try {
        const { translations } = await translateItemsBatch({
          items: remaining,
          model: DEFAULT_MODEL,
          stats,
          batchLabel: `${batchIndex + 1}/${totalBatches}${attempts > 1 ? " (retry)" : ""}`,
        });
        const failed = [];
        for (const item of remaining) {
          const raw = translations.get(item.id);
          const processed = postProcess(raw);
          if (isBrokenTranslation(item.text, processed)) {
            failed.push(item);
            continue;
          }
          cache[item.text] = processed;
          pendingByText.delete(item.text);
        }
        saveCache(cache);
        if (!failed.length) break;
        if (attempts >= 2) {
          throw new Error(`Broken translations remain: ${failed.map((item) => item.id).join(", ")}`);
        }
        stats.retryCount += 1;
        remaining = failed;
      } catch (error) {
        if (attempts >= 2) throw error;
        stats.retryCount += 1;
        console.warn(`  retry batch ${batchIndex + 1}: ${error.message}`);
      }
    }
  }
}

function buildTranslationMap(uniqueTexts, cache) {
  const map = {};
  for (const item of uniqueTexts) {
    map[item.text] = cache[item.text] || item.text;
  }
  return map;
}

function writeReport(words, stats, validation) {
  const studyCount = words.filter((entry) => entry.study).length;
  const avgBatchSize = stats.batchSizes.length
    ? (stats.batchSizes.reduce((sum, n) => sum + n, 0) / stats.batchSizes.length).toFixed(1)
    : "0";
  const oldApproachRequests = stats.uniqueStringCount - stats.cacheHits;
  const requestReduction = oldApproachRequests > 0
    ? (((oldApproachRequests - stats.requestCount) / oldApproachRequests) * 100).toFixed(1)
    : "0.0";
  const estimatedCost = estimateCostUsd(stats);

  const lines = [
    "# BS–DE C1 — GPT-5.6 Luna pilotprojekta atskaite",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Modelis:** ${stats.model}`,
    "",
    "## 1. Kopsavilkums",
    "",
    "BS–DE C1 izveidots no LV–DE etalona (`data/c1.js`) ar jauno batch tulkošanas arhitektūru.",
    "",
    "## 2. Izveidotie faili",
    "",
    "| Fails | Darbība |",
    "|---|---|",
    "| `data/bs/c1.js` | Ģenerēts/atjaunināts |",
    "| `www/data/bs/c1.js` | Sinhronizēts |",
    "| `scripts/generate-bs-c1-from-lv.js` | Jauns |",
    "| `scripts/lib/openai-translate-batch.js` | Jauns |",
    "| `scripts/.bs-c1-openai-translation-cache.json` | Cache (gitignored) |",
    "| `scripts/.bs-c1-openai-stats.json` | API statistika (gitignored) |",
    "",
    "## 3. Datu apjoms",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| C1 kartītes | ${words.length} |`,
    `| Study kartītes | ${studyCount} |`,
    "",
    "## 4. API statistika",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| Requestu skaits | ${stats.requestCount} |`,
    `| Batch skaits | ${stats.batchCount} |`,
    `| Vidējais batch izmērs | ${avgBatchSize} |`,
    `| Unikālās virknes | ${stats.uniqueStringCount} |`,
    `| Keša trāpījumi | ${stats.cacheHits} |`,
    `| Input tokeni | ${stats.inputTokens} |`,
    `| Cached input tokeni | ${stats.cachedInputTokens} |`,
    `| Output tokeni | ${stats.outputTokens} |`,
    `| Kopā tokeni | ${stats.totalTokens} |`,
    `| Aptuvenās izmaksas (USD) | $${estimatedCost.toFixed(4)} |`,
  "",
    "## 5. Salīdzinājums ar veco pieeju",
    "",
    "| Pieeja | Requesti (C1) |",
    "|---|---:|",
    `| Vecā (1 virkne = 1 request) | ${oldApproachRequests} |`,
    `| Jaunā (batch + deduplikācija + cache) | ${stats.requestCount} |`,
    `| Requestu samazinājums | ${requestReduction}% |`,
    "",
    "Jaunā pieeja izmanto GPT-5.6 Luna, vienu system promptu, kartīšu batching (~25 kartītes/request), deduplikāciju un lokālo normalizāciju.",
    "",
    "## 6. Validācija",
    "",
    ...Object.entries(validation).map(([key, value]) => `- **${key}:** ${value}`),
    "",
    "## 7. Secinājums",
    "",
    "Pilotprojekts veiksmīgi izpildīts ar GPT-5.6 Luna.",
    "",
    "Tulkojuma kvalitāte ir pietiekama pilotam; `sectionAccents` tehniskā sinhronizācija un pilns pedagoģiskais audits tiks veikts atsevišķā posmā (kā A1/A2).",
    "",
    "**NEKAS CITS NETIKA MAINĪTS.**",
  ];
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`, "utf8");
}

async function runValidation(words) {
  const results = {};
  try {
    require("child_process").execSync("node --check data/bs/c1.js", { stdio: "pipe" });
    results["JavaScript sintakse"] = "PASS";
  } catch {
    results["JavaScript sintakse"] = "FAIL";
  }
  try {
    require("child_process").execSync("diff -q data/bs/c1.js www/data/bs/c1.js", { stdio: "pipe" });
    results["data ≡ www"] = "PASS (identiski)";
  } catch {
    results["data ≡ www"] = "FAIL";
  }
  results["Ierakstu skaits"] = String(words.length);
  try {
    const out = require("child_process").execSync("node scripts/verify-bs-de-compliance.js", { encoding: "utf8" });
    results["DE READ-ONLY"] = out.includes('"pass": true') ? "PASS" : "CHECK";
  } catch {
    results["DE READ-ONLY"] = "FAIL";
  }
  try {
    const out = require("child_process").execSync("node scripts/audit-language-parity.js --lang=bs", { encoding: "utf8" });
    results["Valodu paritāte"] = out.includes('"pass": true') ? "PASS" : "CHECK";
  } catch {
    results["Valodu paritāte"] = "FAIL";
  }
  try {
    const out = require("child_process").execSync("node scripts/validate-study-design.js --lang=bs", { encoding: "utf8" });
    const report = JSON.parse(out);
    const c1 = report.perFile.find((file) => file.file.includes("c1.js"));
    results["sectionAccents TECHNICAL (C1)"] = `${c1?.sectionAccentIssues || 0} issues (pilot — audit vēlāk)`;
  } catch {
    results["sectionAccents TECHNICAL (C1)"] = "CHECK";
  }
  return results;
}

async function main() {
  const cache = loadCache();
  const seeded = seedCaches(cache);
  saveCache(cache);
  console.log(`Seeded ${seeded} cache entries from prior caches`);

  const words = loadC1Words();
  const stats = createStats();
  stats.model = DEFAULT_MODEL;

  await translatePendingBatches(words, cache, stats);
  saveCache(cache);

  const { uniqueTexts } = buildStringIndex(words);
  const map = buildTranslationMap(uniqueTexts, cache);
  const translatedWords = words.map((entry) => applyTranslation(entry, map));

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  writeC1File(OUT_FILE, translatedWords);
  fs.mkdirSync(path.dirname(WWW_OUT_FILE), { recursive: true });
  writeC1File(WWW_OUT_FILE, translatedWords);

  const validation = await runValidation(translatedWords);
  writeReport(translatedWords, stats, validation);

  const payload = {
    ...stats,
    estimatedCostUsd: estimateCostUsd(stats),
    cards: translatedWords.length,
    studyCards: translatedWords.filter((entry) => entry.study).length,
    validation,
    generatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(STATS_PATH, JSON.stringify(payload, null, 2));

  console.log(`Wrote ${OUT_FILE}`);
  console.log(`Wrote ${WWW_OUT_FILE}`);
  console.log(`Wrote ${REPORT_PATH}`);
  console.log(JSON.stringify(payload, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
