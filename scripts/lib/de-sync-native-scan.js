/**
 * Scan {LANG}-DE study cards for native fields needing retranslation after DE sync.
 * LV-DE is reference for meaning; DE fields are locked.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, dataPath } = require("./audit-common");

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const DASH_RE = /\s*[–—\-]\s*/;

function loadArray(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return ctx.window[key];
}

function mdEscape(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function findDash(text) {
  const s = String(text || "");
  const m = s.match(DASH_RE);
  if (!m) return null;
  const idx = s.search(DASH_RE);
  return {
    sep: m[0],
    de: s.slice(0, idx).trim(),
    native: s.slice(idx + m[0].length).trim(),
  };
}

function asText(value) {
  if (value === undefined || value === null) return "";
  if (typeof value === "string") return value.trim();
  if (Array.isArray(value)) return value.map(asText).filter(Boolean).join(" • ");
  if (typeof value === "object") {
    return [value.text, value.left, value.right, value.example]
      .filter(Boolean)
      .map(asText)
      .join(" ");
  }
  return String(value).trim();
}

function isPlaceholder(text) {
  const t = String(text || "").trim();
  return !t || t === "..." || t === "TODO" || t === "TBD";
}

function latvianDiacritics(text) {
  // Latvian-only letters (exclude č/š/ž shared with Czech and other langs).
  return /[āēģīķļņūĀĒĢĪĶĻŅŪ]/.test(String(text || ""));
}

function needsRetranslation(lvNative, currentNative, langCode) {
  const lv = String(lvNative || "").trim();
  const cur = String(currentNative || "").trim();
  if (!lv && !cur) return false;
  if (isPlaceholder(cur)) return true;
  if (lv && cur === lv) return true;
  if (langCode !== "lv" && latvianDiacritics(cur)) return true;
  return false;
}

function pushUnit(units, unit) {
  if (!unit) return;
  units.push(unit);
}

function scanStudyFields(level, cardIndex, lvCard, langCard, langCode, units) {
  const lvStudy = lvCard.study;
  const langStudy = langCard.study;
  if (!lvStudy || !langStudy) return;

  const baseId = `${level}[${cardIndex}]/${lvCard.de}`;

  if (lvStudy.translation && needsRetranslation(lvStudy.translation, langStudy.translation, langCode)) {
    pushUnit(units, {
      id: `${baseId}/study.translation`,
      kind: "translation",
      de: lvCard.de,
      lvRef: lvStudy.translation,
      current: langStudy.translation,
    });
  }

  if (Array.isArray(lvStudy.examples) && Array.isArray(langStudy.examples)) {
    const n = Math.min(lvStudy.examples.length, langStudy.examples.length);
    for (let i = 0; i < n; i++) {
      const lex = lvStudy.examples[i];
      const gex = langStudy.examples[i];
      if (!lex || !gex) continue;
      if (lex.de !== gex.de) continue;
      if (needsRetranslation(lex.lv, gex.lv, langCode)) {
        pushUnit(units, {
          id: `${baseId}/study.examples[${i}].lv`,
          kind: "exampleNative",
          de: lex.de,
          lvRef: lex.lv,
          current: gex.lv,
        });
      }
    }
  }

  if (Array.isArray(lvStudy.comparison) && Array.isArray(langStudy.comparison)) {
    const n = Math.min(lvStudy.comparison.length, langStudy.comparison.length);
    for (let i = 0; i < n; i++) {
      const lrow = lvStudy.comparison[i];
      const grow = langStudy.comparison[i];
      if (!lrow || !grow) continue;
      if (lrow.word !== grow.word) continue;
      if (needsRetranslation(lrow.meaning, grow.meaning, langCode)) {
        pushUnit(units, {
          id: `${baseId}/study.comparison[${i}].meaning`,
          kind: "comparisonMeaning",
          de: lrow.word,
          lvRef: lrow.meaning,
          current: grow.meaning,
        });
      }
      const ld = findDash(lrow.example);
      const gd = findDash(grow.example);
      if (ld && gd && ld.de === gd.de && needsRetranslation(ld.native, gd.native, langCode)) {
        pushUnit(units, {
          id: `${baseId}/study.comparison[${i}].exampleNative`,
          kind: "comparisonExampleNative",
          de: ld.de,
          lvRef: ld.native,
          current: gd.native,
        });
      }
    }
  }

  const lvExpl = asText(lvStudy.explanation) || asText(lvStudy.explanationLines);
  const langExpl = asText(langStudy.explanation) || asText(langStudy.explanationLines);
  if (lvExpl && needsRetranslation(lvExpl, langExpl, langCode)) {
    pushUnit(units, {
      id: `${baseId}/study.explanation`,
      kind: "explanation",
      de: lvCard.de,
      lvRef: lvExpl,
      current: langExpl,
    });
  }

  const lvTip = asText(lvStudy.tip);
  const langTip = asText(langStudy.tip);
  if (lvTip && needsRetranslation(lvTip, langTip, langCode)) {
    pushUnit(units, {
      id: `${baseId}/study.tip`,
      kind: "tip",
      de: lvCard.de,
      lvRef: asText(lvStudy.tip),
      current: langTip,
    });
  }

  const lvImp = asText(lvStudy.important);
  const langImp = asText(langStudy.important);
  if (lvImp && needsRetranslation(lvImp, langImp, langCode)) {
    pushUnit(units, {
      id: `${baseId}/study.important`,
      kind: "important",
      de: lvCard.de,
      lvRef: lvImp,
      current: langImp,
    });
  }
}

function collectDeFields(entry, prefix = "") {
  const fields = [];
  if (entry.de !== undefined) fields.push({ path: `${prefix}de`, value: entry.de });
  if (entry.study) {
    if (Array.isArray(entry.study.examples)) {
      entry.study.examples.forEach((ex, i) => {
        if (ex?.de) fields.push({ path: `${prefix}study.examples[${i}].de`, value: ex.de });
      });
    }
    if (Array.isArray(entry.study.comparison)) {
      entry.study.comparison.forEach((row, i) => {
        if (row?.word) fields.push({ path: `${prefix}study.comparison[${i}].word`, value: row.word });
        const d = findDash(row?.example);
        if (d?.de) fields.push({ path: `${prefix}study.comparison[${i}].exampleDe`, value: d.de });
      });
    }
  }
  return fields;
}

function loadArrayFromGit(lang, level, commit) {
  const rel = `data/${lang}/${level}.js`;
  try {
    const code = execSync(`git show ${commit}:${rel}`, {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
    return loadArrayFromCode(code);
  } catch {
    return null;
  }
}

function loadArrayFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : null;
}

function findDeChangedDetails(langCode, parentCommit = "018ca5c9^") {
  const pathMap = new Map();
  for (const level of LEVELS) {
    const oldCards = loadArrayFromGit(langCode, level, parentCommit);
    const newCards = loadArray(dataPath(langCode, `${level}.js`));
    if (!oldCards || !newCards) continue;
    for (let i = 0; i < Math.min(oldCards.length, newCards.length); i++) {
      if (oldCards[i].de !== newCards[i].de) continue;
      const oldFields = collectDeFields(oldCards[i]);
      const newFields = collectDeFields(newCards[i]);
      const key = `${level}[${i}]/${oldCards[i].de}`;
      for (const of of oldFields) {
        const nf = newFields.find((f) => f.path === of.path);
        if (nf && nf.value !== of.value) {
          if (!pathMap.has(key)) pathMap.set(key, new Set());
          pathMap.get(key).add(of.path);
        }
      }
    }
  }
  return pathMap;
}

function findDeChangedCardKeys(langCode, parentCommit = "018ca5c9^") {
  return new Set(findDeChangedDetails(langCode, parentCommit).keys());
}

function collectNativeUnitsForChangedPaths(
  level,
  index,
  lvCard,
  langCard,
  langCode,
  changedPaths,
  reason
) {
  const units = [];
  const baseId = `${level}[${index}]/${lvCard.de}`;
  const lvStudy = lvCard.study;
  const langStudy = langCard.study;

  if (changedPaths.has("de") && lvCard.lv && langCard.lv) {
    units.push({
      id: `${baseId}/lv`,
      kind: "cardTitle",
      de: lvCard.de,
      lvRef: lvCard.lv,
      current: langCard.lv,
      reason,
    });
  }

  if (!lvStudy || !langStudy) return units;

  if (changedPaths.has("de") && lvStudy.translation) {
    units.push({
      id: `${baseId}/study.translation`,
      kind: "translation",
      de: lvCard.de,
      lvRef: lvStudy.translation,
      current: langStudy.translation || "",
      reason,
    });
  }

  for (const path of changedPaths) {
    let m = path.match(/^study\.examples\[(\d+)\]\.de$/);
    if (m) {
      const i = Number(m[1]);
      const lex = lvStudy.examples?.[i];
      const gex = langStudy.examples?.[i];
      if (lex?.de && gex && lex.de === gex.de) {
        units.push({
          id: `${baseId}/study.examples[${i}].lv`,
          kind: "exampleNative",
          de: lex.de,
          lvRef: lex.lv || "",
          current: gex.lv || "",
          reason,
        });
      }
      continue;
    }

    m = path.match(/^study\.comparison\[(\d+)\]\.(word|exampleDe)$/);
    if (m) {
      const i = Number(m[1]);
      const lrow = lvStudy.comparison?.[i];
      const grow = langStudy.comparison?.[i];
      if (!lrow || !grow || lrow.word !== grow.word) continue;
      units.push({
        id: `${baseId}/study.comparison[${i}].meaning`,
        kind: "comparisonMeaning",
        de: lrow.word,
        lvRef: lrow.meaning || "",
        current: grow.meaning || "",
        reason,
      });
      const ld = findDash(lrow.example);
      const gd = findDash(grow.example);
      if (ld && gd && ld.de === gd.de) {
        units.push({
          id: `${baseId}/study.comparison[${i}].exampleNative`,
          kind: "comparisonExampleNative",
          de: ld.de,
          lvRef: ld.native,
          current: gd.native,
          reason,
        });
      }
    }
  }

  const lvExpl = asText(lvStudy.explanation) || asText(lvStudy.explanationLines);
  const langExpl = asText(langStudy.explanation) || asText(langStudy.explanationLines);
  if (lvExpl && needsRetranslation(lvExpl, langExpl, langCode)) {
    units.push({
      id: `${baseId}/study.explanation`,
      kind: "explanation",
      de: lvCard.de,
      lvRef: lvExpl,
      current: langExpl,
      reason: "Suspect native (placeholder / LV leak)",
    });
  }

  const lvTip = asText(lvStudy.tip);
  const langTip = asText(langStudy.tip);
  if (lvTip && needsRetranslation(lvTip, langTip, langCode)) {
    units.push({
      id: `${baseId}/study.tip`,
      kind: "tip",
      de: lvCard.de,
      lvRef: lvTip,
      current: langTip,
      reason: "Suspect native (placeholder / LV leak)",
    });
  }

  const lvImp = asText(lvStudy.important);
  const langImp = asText(langStudy.important);
  if (lvImp && needsRetranslation(lvImp, langImp, langCode)) {
    units.push({
      id: `${baseId}/study.important`,
      kind: "important",
      de: lvCard.de,
      lvRef: lvImp,
      current: langImp,
      reason: "Suspect native (placeholder / LV leak)",
    });
  }

  return units;
}

function scanSuspectUnitsOnCards(langCode, cardKeys) {
  const units = [];
  for (const key of cardKeys) {
    const parsed = parseChangedCardKey(key);
    if (!parsed) continue;
    const lvCards = loadArray(dataPath("lv", `${parsed.level}.js`));
    const langCards = loadArray(dataPath(langCode, `${parsed.level}.js`));
    const lvCard = lvCards[parsed.index];
    const langCard = langCards[parsed.index];
    if (!lvCard || !langCard) continue;
    const levelUnits = [];
    scanStudyFields(parsed.level, parsed.index, lvCard, langCard, langCode, levelUnits);
    for (const u of levelUnits) {
      u.reason = "Suspect native (placeholder / LV leak)";
      units.push(u);
    }
  }
  return units;
}

function parseChangedCardKey(key) {
  const slash = key.indexOf("/");
  if (slash < 0) return null;
  const head = key.slice(0, slash);
  const de = key.slice(slash + 1);
  const m = head.match(/^([a-z]\d+)\[(\d+)\]$/);
  if (!m) return null;
  return { level: m[1], index: Number(m[2]), de };
}

function collectDeSyncNativeUnits(langCode, parentCommit = "018ca5c9^") {
  const pathMap = findDeChangedDetails(langCode, parentCommit);
  const units = [];

  for (const [key, changedPaths] of pathMap) {
    const parsed = parseChangedCardKey(key);
    if (!parsed) continue;
    const { level, index } = parsed;
    const lvCards = loadArray(dataPath("lv", `${level}.js`));
    const langCards = loadArray(dataPath(langCode, `${level}.js`));
    const lvCard = lvCards[index];
    const langCard = langCards[index];
    if (!lvCard || !langCard) continue;
    units.push(
      ...collectNativeUnitsForChangedPaths(
        level,
        index,
        lvCard,
        langCard,
        langCode,
        changedPaths,
        "DE field synced from LV-DE"
      )
    );
  }

  for (const unit of scanSuspectUnitsOnCards(langCode, pathMap.keys())) {
    units.push(unit);
  }

  const seen = new Set();
  return units.filter((u) => {
    if (seen.has(u.id)) return false;
    seen.add(u.id);
    return true;
  });
}

module.exports = {
  LEVELS,
  loadArray,
  mdEscape,
  scanSuspectUnitsOnCards,
  collectDeSyncNativeUnits,
  findDeChangedCardKeys,
  findDeChangedDetails,
  needsRetranslation,
};
