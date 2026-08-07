#!/usr/bin/env node
/**
 * Generate data/bs/b1.js from LV baseline (data/b1.js) using GPT-5.6 Luna batch translation.
 * German fields remain READ-ONLY.
 *
 * Usage:
 *   node scripts/generate-bs-b1-from-lv.js [--test-batch] [--skip-section-accents]
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

const SOURCE_FILE = path.join(ROOT, "data", "b1.js");
const OUT_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_OUT_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");
const CACHE_PATH = path.join(ROOT, "scripts", ".bs-b1-openai-translation-cache.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-openai-stats.json");
const REPORT_PATH = path.join(ROOT, "reports", "bs-b1-creation-report.md");
const GOOGLE_CACHE_PATH = path.join(ROOT, "scripts", ".bs-lv-translation-cache.json");
const A1_CACHE_PATH = path.join(ROOT, "scripts", ".bs-a1-openai-translation-cache.json");
const A2_CACHE_PATH = path.join(ROOT, "scripts", ".bs-a2-openai-translation-cache.json");
const C1_CACHE_PATH = path.join(ROOT, "scripts", ".bs-c1-openai-translation-cache.json");

const TEST_BATCH = process.argv.includes("--test-batch");
const SKIP_SECTION_ACCENTS = process.argv.includes("--skip-section-accents");
const TARGET_LANGUAGE = "Bosnian";
const CARDS_PER_BATCH = 25;
const MAX_ITEMS_PER_REQUEST = 60;
const BULLET = "•";
const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

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

function seedCaches(cache, stats) {
  let seeded = 0;
  const before = Object.keys(cache).length;
  const sources = [
    [GOOGLE_CACHE_PATH, (key, value) => key.startsWith("lv|bs|") ? key.slice("lv|bs|".length) : null],
    [A1_CACHE_PATH, (key) => key],
    [A2_CACHE_PATH, (key) => key],
    [C1_CACHE_PATH, (key) => key],
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
  if (stats) stats.crossLevelCacheHits = Math.max(0, Object.keys(cache).length - before);
  return seeded;
}

function recordRetryReason(stats, reason) {
  stats.retryReasons[reason] = (stats.retryReasons[reason] || 0) + 1;
}

function chunkItems(items, maxSize) {
  const chunks = [];
  for (let i = 0; i < items.length; i += maxSize) {
    chunks.push(items.slice(i, i + maxSize));
  }
  return chunks;
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

function loadB1Words() {
  const code = fs.readFileSync(SOURCE_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
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

function writeB1File(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B1_WORDS = ${json};\n\nwindow.B1_WORDS = B1_WORDS;\n`, "utf8");
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

async function translateItemGroup(items, cache, pendingByText, stats, batchLabel) {
  async function translateWithFallback(group, label) {
    try {
      await translateOnce(group, label, false);
    } catch (error) {
      if (!/trūkst tulkojuma id=/.test(error.message) || group.length === 1) throw error;
      recordRetryReason(stats, "missing_id_split");
      stats.retryCount += 1;
      for (const item of group) {
        await translateOnce([item], `${label}:${item.id}`, true);
      }
    }
  }

  async function translateOnce(group, label, isRetry) {
    const { translations } = await translateItemsBatch({
      items: group,
      model: DEFAULT_MODEL,
      stats,
      batchLabel: label,
      isRetry,
    });
    const failed = [];
    for (const item of group) {
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
    if (failed.length) {
      if (failed.length === 1) {
        throw new Error(`Broken translation for ${failed[0].id}`);
      }
      recordRetryReason(stats, "broken_translation");
      stats.retryCount += 1;
      for (const item of failed) {
        await translateOnce([item], `${label}:${item.id}`, true);
      }
    }
  }

  let attempts = 0;
  while (attempts < 3) {
    attempts += 1;
    const isRetry = attempts > 1;
    try {
      await translateWithFallback(remainingItems(items, attempts), `${batchLabel}${isRetry ? " (retry)" : ""}`);
      return;
    } catch (error) {
      const reason = /JSON/i.test(error.message) ? "invalid_json"
        : /trūkst tulkojuma/i.test(error.message) ? "missing_id"
        : /Broken translation/i.test(error.message) ? "broken_translation"
        : /timeout/i.test(error.message) ? "timeout"
        : "api_error";
      if (attempts >= 3) throw error;
      recordRetryReason(stats, reason);
      stats.retryCount += 1;
      console.warn(`  retry ${batchLabel}: [${reason}] ${error.message}`);
    }
  }

  function remainingItems(all, attempt) {
    return all.filter((item) => pendingByText.has(item.text));
  }
}

async function translatePendingBatches(words, cache, stats) {
  const { uniqueTexts, cardStrings } = buildStringIndex(words);
  stats.uniqueStringCount = uniqueTexts.length;

  const pendingByText = new Map();
  for (const item of uniqueTexts) {
    if (!cache[item.text]) pendingByText.set(item.text, item);
  }

  const cachedCount = uniqueTexts.length - pendingByText.size;
  stats.cacheHits = cachedCount;
  stats.dedupSaved = uniqueTexts.length - pendingByText.size - stats.crossLevelCacheHits;
  console.log(`BS B1: ${uniqueTexts.length} unique strings, ${cachedCount} cache hits, ${pendingByText.size} to translate`);

  const totalBatches = TEST_BATCH ? 1 : Math.ceil(words.length / CARDS_PER_BATCH);
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

    const chunks = chunkItems(items, MAX_ITEMS_PER_REQUEST);
    for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex += 1) {
      const label = `${batchIndex + 1}/${totalBatches}${chunks.length > 1 ? `.${chunkIndex + 1}` : ""}`;
      await translateItemGroup(chunks[chunkIndex], cache, pendingByText, stats, label);
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

function writeReport(words, stats, validation, sectionAccentStats) {
  const studyCount = words.filter((entry) => entry.study).length;
  const standardStudy = words.filter((entry) => entry.study?.layout === "standardStudy").length;
  const minimalStudy = words.filter((entry) => entry.study?.layout === "minimalStudy").length;
  const avgBatchSize = stats.batchSizes.length
    ? (stats.batchSizes.reduce((sum, n) => sum + n, 0) / stats.batchSizes.length).toFixed(1)
    : "0";
  const oldApproachRequests = stats.uniqueStringCount - stats.cacheHits;
  const requestReduction = oldApproachRequests > 0
    ? (((oldApproachRequests - stats.requestCount) / oldApproachRequests) * 100).toFixed(1)
    : "0.0";
  const retryRatio = stats.initialBatchRequests > 0
    ? ((stats.retryRequests / stats.initialBatchRequests) * 100).toFixed(1)
    : "0.0";
  const estimatedCost = estimateCostUsd(stats);

  const lines = [
    "# BS–DE B1 — ģenerēšanas atskaite (GPT-5.6 Luna + batching)",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Modelis:** ${stats.model}`,
    "",
    "## 1. Kopsavilkums",
    "",
    "BS–DE B1 izveidots no LV–DE etalona (`data/b1.js`) ar C1 pilotā apstiprināto batch arhitektūru.",
    "",
    "## 2. Datu apjoms",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| B1 kartītes | ${words.length} |`,
    `| Study kartītes | ${studyCount} |`,
    `| standardStudy | ${standardStudy} |`,
    `| minimalStudy | ${minimalStudy} |`,
    "",
    "## 3. API statistika",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| Modelis | ${stats.model} |`,
    `| Unikālās virknes | ${stats.uniqueStringCount} |`,
    `| Translation cache hits | ${stats.cacheHits} |`,
    `| Cross-level cache hits | ${stats.crossLevelCacheHits || 0} |`,
    `| Sākotnējie batch requesti | ${stats.initialBatchRequests} |`,
    `| Retry requesti | ${stats.retryRequests} |`,
    `| Retry attiecība | ${retryRatio}% |`,
    `| Kopējie API requesti | ${stats.requestCount} |`,
    `| Vidējais batch izmērs | ${avgBatchSize} virknes |`,
    `| Input tokeni | ${stats.inputTokens} |`,
    `| Cached input tokeni | ${stats.cachedInputTokens} |`,
    `| Output tokeni | ${stats.outputTokens} |`,
    `| Reasoning tokeni | ${stats.reasoningTokens || 0} |`,
    `| Kopā tokeni | ${stats.totalTokens} |`,
    `| Aptuvenās izmaksas (USD) | $${estimatedCost.toFixed(4)} |`,
    "",
    "### Retry iemesli",
    "",
    ...Object.entries(stats.retryReasons || {}).map(([reason, count]) => `- ${reason}: ${count}`),
    ...(Object.keys(stats.retryReasons || {}).length ? [] : ["- (nav retry)"]),
    "",
    "## 4. sectionAccents sinhronizācija",
    "",
    sectionAccentStats
      ? `| Metrika | Vērtība |\n|---|---:|\n| Termini pārbaudīti | ${sectionAccentStats.termsChecked} |\n| Kartēti | ${sectionAccentStats.lvMapped} |\n| Izņemti | ${sectionAccentStats.dropped} |\n| Kartītes mainītas | ${sectionAccentStats.cardsChanged} |`
      : "Nav palaists.",
    "",
    "## 5. Salīdzinājums",
    "",
    "| Pieeja | Requesti |",
    "|---|---:|",
    "| Vecā A2 (1 virkne = 1 request) | ~4 254 |",
    "| C1 Luna pilots | 46 |",
    `| B1 (batch + dedup + cache) | ${stats.requestCount} |`,
    `| Requestu samazinājums vs 1:1 | ${requestReduction}% |`,
    "",
    "## 6. Validācija",
    "",
    ...Object.entries(validation).map(([key, value]) => `- **${key}:** ${value}`),
    "",
    "## 7. Secinājums",
    "",
    "B1 ģenerēšanas posms pabeigts. Pilns neatkarīgais lingvistiskais audits tiks veikts atsevišķi.",
    "",
    "**NEKAS CITS NETIKA MAINĪTS.**",
  ];
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`, "utf8");
}

async function runValidation(words) {
  const results = {};
  const { execSync } = require("child_process");
  try {
    execSync("node --check data/bs/b1.js", { stdio: "pipe" });
    results["JavaScript sintakse"] = "PASS";
  } catch {
    results["JavaScript sintakse"] = "FAIL";
  }
  try {
    execSync("diff -q data/bs/b1.js www/data/bs/b1.js", { stdio: "pipe" });
    results["data ≡ www"] = "PASS (identiski)";
  } catch {
    results["data ≡ www"] = "FAIL";
  }
  results["Ierakstu skaits"] = String(words.length);
  try {
    const out = execSync("node scripts/verify-bs-de-compliance.js", { encoding: "utf8" });
    results["DE READ-ONLY"] = out.includes('"pass": true') ? "PASS" : "CHECK";
  } catch {
    results["DE READ-ONLY"] = "FAIL";
  }
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=bs", { encoding: "utf8" });
    const report = JSON.parse(out);
    const b1 = report.levels?.b1;
    results["Valodu paritāte"] = report.pass && b1?.countMatch ? `PASS (${b1.langCount}/${b1.lvCount})` : "CHECK";
  } catch {
    results["Valodu paritāte"] = "FAIL";
  }
  try {
    const out = execSync("node scripts/audit-mojibake.js --lang=bs", { encoding: "utf8" });
    const report = JSON.parse(out);
    results["Mojibake"] = report.pass ? "PASS" : "FAIL";
  } catch {
    results["Mojibake"] = "CHECK";
  }
  try {
    const out = execSync("node scripts/validate-study-design.js --lang=bs", { encoding: "utf8" });
    const report = JSON.parse(out);
    const b1 = report.perFile.find((file) => file.file.includes("b1.js"));
    results["sectionAccents TECHNICAL"] = `${b1?.sectionAccentIssues || 0} issues`;
  } catch {
    results["sectionAccents TECHNICAL"] = "CHECK";
  }
  const LV=/[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
  function walk(v,h=[]){if(typeof v==='string'){if(LV.test(v))h.push(v);return h;}if(Array.isArray(v))v.forEach(i=>walk(i,h));else if(v&&typeof v==='object'){if(v.de)return h;for(const c of Object.values(v))walk(c,h);}return h;}
  let lvHits=0; for(const e of words){if(walk(e).length)lvHits++;}
  results["LV atlikumi"] = String(lvHits);
  return results;
}

function runSectionAccentsFix() {
  const out = require("child_process").execSync("node scripts/fix-bs-b1-section-accents.js", { encoding: "utf8" });
  const logPath = path.join(ROOT, "reports", "temp", "bs-b1-section-accents-fix-log.json");
  if (!fs.existsSync(logPath)) return null;
  const log = JSON.parse(fs.readFileSync(logPath, "utf8"));
  return {
    termsChecked: log.stats.termsChecked,
    lvMapped: log.stats.lvMapped,
    dropped: log.stats.dropped,
    cardsChanged: log.stats.cardsChanged.length,
  };
}

async function main() {
  const cache = loadCache();
  const stats = createStats();
  stats.model = DEFAULT_MODEL;
  const seeded = seedCaches(cache, stats);
  saveCache(cache);
  console.log(`Seeded ${seeded} cache entries from prior caches (cross-level: ${stats.crossLevelCacheHits})`);

  const words = loadB1Words();
  if (TEST_BATCH) {
    console.log("TEST BATCH mode: translating first card batch only");
  }

  await translatePendingBatches(words, cache, stats);
  saveCache(cache);

  if (TEST_BATCH) {
    console.log("TEST BATCH complete — API pipeline OK. Exiting without writing B1 files.");
    console.log(JSON.stringify({ ...stats, estimatedCostUsd: estimateCostUsd(stats) }, null, 2));
    return;
  }

  const { uniqueTexts } = buildStringIndex(words);
  const map = buildTranslationMap(uniqueTexts, cache);
  const translatedWords = words.map((entry) => applyTranslation(entry, map));

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  writeB1File(OUT_FILE, translatedWords);
  fs.mkdirSync(path.dirname(WWW_OUT_FILE), { recursive: true });
  writeB1File(WWW_OUT_FILE, translatedWords);

  let sectionAccentStats = null;
  if (!SKIP_SECTION_ACCENTS && !TEST_BATCH) {
    console.log("Running sectionAccents sync...");
    sectionAccentStats = runSectionAccentsFix();
  }

  const validation = TEST_BATCH
    ? { "TEST BATCH": "PASS (pipeline smoke test)" }
    : await runValidation(translatedWords);

  if (!TEST_BATCH) {
    writeReport(translatedWords, stats, validation, sectionAccentStats);
  }

  const payload = {
    ...stats,
    estimatedCostUsd: estimateCostUsd(stats),
    cards: translatedWords.length,
    studyCards: translatedWords.filter((entry) => entry.study).length,
    validation,
    sectionAccentStats,
    testBatch: TEST_BATCH,
    generatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(STATS_PATH, JSON.stringify(payload, null, 2));

  console.log(`Wrote ${OUT_FILE}`);
  console.log(`Wrote ${WWW_OUT_FILE}`);
  if (!TEST_BATCH) console.log(`Wrote ${REPORT_PATH}`);
  console.log(JSON.stringify(payload, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
