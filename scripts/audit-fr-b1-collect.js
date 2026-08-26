#!/usr/bin/env node
/**
 * FR-DE B1 full audit collector (read-only). Writes reports/temp/fr-de-b1-audit-data.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const ES_FILE = path.join(ROOT, "data", "es", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "es", "b1.js");
const OUT = path.join(ROOT, "reports", "temp", "fr-de-b1-audit-data.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const ES_WORDS = /\b(por favor|gracias|buenos días|hola|adiós|español|española|también|mucho|poco|ser|estar|tener|hacer|decir|ir|venir|dar|saber|querer|deber|poder|hablar|comer|beber|dormir|trabajar|estudiar)\b/i;
const EN_REMNANT =
  /\b(the|and|with|from|this|that|please|thank you|hello|goodbye|because|before|after|always|never|something|nothing|everything)\b/i;
const LV_WORDS = /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b|\blūdzu\b|\blūgums\b|Man ir|Es esmu|Es gribu|Es redzu|Es palīdzu|nāc iekšā|paliec|aiziet|mājās|skolā|darbā/i;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
function hasTechnicalArtifact(text) {
  return text.includes("```")
    || /^(Translation|Tulkojums):/im.test(text)
    || /\bTODO\b|\bTBD\b/.test(text)
    || text.trim() === "...";
}
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
}

function schemaKeys(obj, prefix = "", exclude = new Set(["sectionAccents", "accents"])) {
  const keys = [];
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return keys;
  for (const k of Object.keys(obj)) {
    if (exclude.has(k)) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    keys.push(p);
    const v = obj[k];
    if (v && typeof v === "object" && !Array.isArray(v)) keys.push(...schemaKeys(v, p, exclude));
  }
  return keys;
}

function walkStrings(value, visitor, ctx = { path: "", parentKey: "", inDe: false }) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    visitor(value, ctx);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkStrings(item, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const inDe = ctx.inDe || key === "de" || key === "de_article" || key === "de_plural";
      walkStrings(child, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        parentKey: key,
        inDe,
      });
    }
  }
}

function collectSectionAccentTerms(sectionAccents, out, inDe = false) {
  if (!sectionAccents) return;
  if (typeof sectionAccents === "string") {
    if (!inDe) out.push(sectionAccents);
    return;
  }
  if (Array.isArray(sectionAccents)) {
    sectionAccents.forEach((item) => collectSectionAccentTerms(item, out, inDe));
    return;
  }
  if (typeof sectionAccents === "object") {
    for (const [key, val] of Object.entries(sectionAccents)) {
      collectSectionAccentTerms(val, out, inDe || key === "de");
    }
  }
}

function accentTermMatches(text, term) {
  if (!text || !term) return false;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(text);
  } catch {
    return text.includes(term);
  }
}

function getTextForAccentSection(study, section, index) {
  if (section === "explanation" && study.explanation) {
    return Array.isArray(study.explanation) ? study.explanation.join(" ") : String(study.explanation);
  }
  if (section === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.join(" ");
    if (tip && typeof tip === "object") return [tip.text, tip.example].filter(Boolean).join(" ");
    return String(tip || "");
  }
  if (section === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.join(" ");
    if (imp && typeof imp === "object") return [imp.text, imp.example].filter(Boolean).join(" ");
    return String(imp || "");
  }
  if (section === "examples" && Array.isArray(study.examples)) {
    const ex = study.examples[index];
    if (!ex) return "";
    return [ex.de, ex.lv].filter(Boolean).join(" ");
  }
  if (section === "comparison" && Array.isArray(study.comparison)) {
    const c = study.comparison[index];
    if (!c) return "";
    return [c.word, c.meaning, c.example].filter(Boolean).join(" ");
  }
  return "";
}

function main() {
  const lv = load(LV_FILE);
  const es = load(ES_FILE);
  const data = {
    meta: {
      date: new Date().toISOString(),
      lvFile: "data/b1.js",
      esFile: "data/fr/b1.js",
      wwwFile: "www/data/fr/b1.js",
      lvCount: lv.length,
      esCount: es.length,
    },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    lvRemnants: { issues: [], pass: true },
    mainTranslations: { entries: [], summary: { OK: 0, WARNING: 0, ERROR: 0 } },
    studyCards: { issues: [], pass: true },
    sectionAccents: { issues: [], pass: true },
    layerIdentity: { pass: true, identical: false },
    comparisonStudy: { issues: [], count: 0 },
    standardStudy: { count: 0 },
  };

  // Layer identity
  data.layerIdentity.identical = fs.readFileSync(ES_FILE).equals(fs.readFileSync(WWW_FILE));
  if (!data.layerIdentity.identical) {
    data.layerIdentity.pass = false;
    data.structural.issues.push({ severity: "critical", message: "data/fr/b1.js and www/data/fr/b1.js are not identical" });
  }

  // Structural
  if (lv.length !== es.length) {
    data.structural.pass = false;
    data.structural.issues.push({ severity: "critical", message: `Record count mismatch LV=${lv.length} ES=${es.length}` });
  }

  const lvStudy = lv.filter((e) => e.study).length;
  const frStudy = es.filter((e) => e.study).length;
  data.meta.lvStudyCount = lvStudy;
  data.meta.frStudyCount = frStudy;
  if (lvStudy !== frStudy) {
    data.structural.pass = false;
    data.structural.issues.push({ severity: "critical", message: `Study count mismatch LV=${lvStudy} ES=${frStudy}` });
  }

  const ids = new Set();
  for (let i = 0; i < Math.min(lv.length, es.length); i++) {
    const lvE = lv[i];
    const esE = es[i];
    const id = entryId(esE, i);

    if (lvE.de !== esE.de) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "critical", id, message: `Order mismatch at index ${i}: LV.de=${lvE.de} ET.de=${esE.de}` });
    }

    if (esE.study?.id) {
      if (ids.has(esE.study.id)) {
        data.structural.issues.push({ severity: "high", id, message: `Duplicate study id: ${esE.study.id}` });
        data.structural.pass = false;
      }
      ids.add(esE.study.id);
    }

    const lvKeys = new Set(schemaKeys(lvE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const esKeys = new Set(schemaKeys(esE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const missing = [...lvKeys].filter((k) => !esKeys.has(k));
    const extra = [...esKeys].filter((k) => !lvKeys.has(k));
    if (missing.length) {
      data.structural.issues.push({ severity: "high", id, de: esE.de, message: `Missing fields vs LV: ${missing.join(", ")}` });
      data.structural.pass = false;
    }
    if (extra.length) {
      data.structural.issues.push({ severity: "medium", id, de: esE.de, message: `Extra fields vs LV: ${extra.join(", ")}` });
    }

    const lvLayout = lvE.study?.layout || (lvE.study ? "standardStudy" : null);
    const esLayout = esE.study?.layout || (esE.study ? "standardStudy" : null);
    if (lvLayout !== esLayout) {
      data.structural.issues.push({ severity: "high", id, de: esE.de, message: `Layout mismatch LV=${lvLayout} ES=${esLayout}` });
      data.structural.pass = false;
    }

    if (esE.study?.layout === "comparisonStudy") data.comparisonStudy.count++;
    else if (esE.study) data.standardStudy.count++;

    // German integrity
    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lvE[field] !== esE[field]) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({
          severity: "critical",
          id,
          field,
          lvValue: lvE[field],
          etValue: esE[field],
        });
      }
    }

  if (lvE.study && esE.study) {
      walkStrings(lvE.study, (text, ctx) => {
        if (!ctx.inDe && ctx.parentKey === "de") return;
        if (ctx.inDe || ctx.parentKey === "de") {
          // find corresponding ET path - simplified: compare de fields in study
        }
      });
      // Compare all de strings in study
      const lvDeStrings = [];
      const esDeStrings = [];
      walkStrings(lvE.study, (text, ctx) => {
        if (ctx.parentKey === "de" || (ctx.path.endsWith(".de") && !ctx.path.includes(".lv"))) lvDeStrings.push(text);
      });
      walkStrings(esE.study, (text, ctx) => {
        if (ctx.parentKey === "de" || ctx.path.includes(".de") && !ctx.path.includes(".lv")) esDeStrings.push(text);
      });
      // Better: walk paired
      function collectDeStrings(obj, out, keyPath = "") {
        if (typeof obj === "string") return;
        if (Array.isArray(obj)) return obj.forEach((v, i) => collectDeStrings(v, out, `${keyPath}[${i}]`));
        if (obj && typeof obj === "object") {
          for (const [k, v] of Object.entries(obj)) {
            if (k === "de") out.push({ path: keyPath, value: v });
            else collectDeStrings(v, out, keyPath ? `${keyPath}.${k}` : k);
          }
        }
      }
      const lvDe = [];
      const esDe = [];
      collectDeStrings(lvE.study, lvDe);
      collectDeStrings(esE.study, esDe);
      function normalizeDeSnapshot(rows) {
        return rows.map((row) => {
          if (!row.path.startsWith("sectionAccents.")) return row;
          const val = row.value;
          if (val && typeof val === "object" && !Array.isArray(val)) {
            const norm = {};
            for (const [color, terms] of Object.entries(val)) {
              norm[color] = Array.isArray(terms) ? terms : [terms];
            }
            return { path: row.path, value: norm };
          }
          return row;
        });
      }
      if (JSON.stringify(normalizeDeSnapshot(lvDe)) !== JSON.stringify(normalizeDeSnapshot(esDe))) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({
          severity: "critical",
          id,
          de: esE.de,
          message: "Study German content differs from LV etalon",
          lvDe,
          esDe,
        });
      }
    }

    // Main translation heuristics
    const main = {
      id,
      de: esE.de,
      de_article: esE.de_article,
      lvGloss: lvE.lv,
      frMain: esE.lv,
      studyTranslation: esE.study?.translation || null,
      status: "OK",
      flags: [],
    };
    if (!esE.lv || !esE.lv.trim()) {
      main.status = "ERROR";
      main.flags.push("empty_main_translation");
    }
    if (/^[A-ZÕÄÖÜŠŽ]/.test(esE.lv) && !esE.lv.includes("•")) {
      main.flags.push("unexpected_capitalization");
      main.status = main.status === "ERROR" ? "ERROR" : "WARNING";
    }
    if (LV_ONLY.test(esE.lv) || LV_WORDS.test(esE.lv)) {
      main.status = "ERROR";
      main.flags.push("latvian_remnant_in_main");
    }
    if (hasTechnicalArtifact(esE.lv)) {
      main.status = "ERROR";
      main.flags.push("technical_artifact_in_main");
    }
    data.mainTranslations.entries.push(main);
    data.mainTranslations.summary[main.status]++;

    // Technical + LV on all ET strings
    walkStrings(esE, (text, ctx) => {
      if (ctx.inDe || ctx.parentKey === "de" || ctx.parentKey === "de_article" || ctx.parentKey === "de_plural") return;
      if (!text.trim()) {
        if (["lv", "translation", "title", "lead"].includes(ctx.parentKey)) {
          data.technical.issues.push({ severity: "high", id, path: ctx.path, message: "Empty required string" });
          data.technical.pass = false;
        }
        return;
      }
      if (MOJIBAKE.test(text)) {
        data.technical.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 120), message: "Mojibake detected" });
        data.technical.pass = false;
      }
      if (hasTechnicalArtifact(text)) {
        data.technical.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 120), message: "Technical artifact" });
        data.technical.pass = false;
      }
      if (LV_ONLY.test(text) || LV_WORDS.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 200), kind: "LV" });
      }
      if (ES_WORDS.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 200), kind: "IT" });
      }
      if (EN_REMNANT.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 200), kind: "EN" });
      }
    }, { path: `entry[${i}]`, parentKey: "", inDe: false });

    // Study card checks
    if (esE.study) {
      const study = esE.study;
      const layout = study.layout || "standardStudy";

      if (layout === "standardStudy") {
        if (!hasContent(study.explanation)) {
          data.studyCards.issues.push({ severity: "high", id, message: "standardStudy missing explanation" });
        }
        if (!hasContent(study.examples)) {
          data.studyCards.issues.push({ severity: "high", id, message: "standardStudy missing examples" });
        }
      }

      if (layout === "comparisonStudy") {
        if (!hasContent(study.comparisonTable) && !hasContent(study.comparison) && !hasContent(study.words)) {
          data.comparisonStudy.issues.push({ severity: "high", id, message: "comparisonStudy missing comparison content" });
        }
      }

      // sectionAccents
      if (lvE.study?.sectionAccents && !study.sectionAccents) {
        data.sectionAccents.issues.push({ severity: "high", id, message: "Missing sectionAccents present in LV" });
        data.sectionAccents.pass = false;
      }

      if (study.sectionAccents) {
        const terms = [];
        collectSectionAccentTerms(study.sectionAccents, terms);
        for (const term of terms) {
          if (LV_ONLY.test(term) || LV_WORDS.test(term)) {
            data.sectionAccents.issues.push({ severity: "high", id, term, message: "LV remnant in sectionAccents" });
            data.sectionAccents.pass = false;
          }
        }
        // accent match check for ET lv side
        function checkAccentsBlock(block, sectionName, index) {
          if (!block || typeof block !== "object") return;
          const text = getTextForAccentSection(study, sectionName, index);
          for (const color of ACCENT_COLORS) {
            const arr = block[color] || (block.lv && block.lv[color]) || (block.de && block.de[color] ? null : block[color]);
            let termsToCheck = [];
            if (block.lv && block.lv[color]) termsToCheck = block.lv[color];
            else if (block.de && block.de[color]) continue;
            else if (Array.isArray(block[color])) termsToCheck = block[color];
            if (!termsToCheck.length) continue;
            for (const term of termsToCheck) {
              if (block.de && block.de[color]?.includes(term)) continue;
              if (!accentTermMatches(text, term) && !accentTermMatches(esE.lv, term)) {
                data.sectionAccents.issues.push({
                  severity: "medium",
                  id,
                  section: sectionName,
                  term,
                  message: "Accent term not found in section text",
                });
              }
            }
          }
        }
        const sa = study.sectionAccents;
        if (sa.explanation) checkAccentsBlock(sa.explanation, "explanation", 0);
        if (Array.isArray(sa.examples)) sa.examples.forEach((ex, idx) => checkAccentsBlock(ex, "examples", idx));
        if (Array.isArray(sa.comparison)) sa.comparison.forEach((c, idx) => checkAccentsBlock(c, "comparison", idx));
      }
    }
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log(`Wrote ${OUT}`);
  console.log(JSON.stringify({
    structural: data.structural.pass,
    german: data.germanIntegrity.pass,
    technical: data.technical.pass,
    lvRemnants: data.lvRemnants.pass,
    sectionAccents: data.sectionAccents.pass,
    layerIdentity: data.layerIdentity.identical,
    mainSummary: data.mainTranslations.summary,
    counts: { sectionAccentsIssues: data.sectionAccents.issues.length, studyIssues: data.studyCards.issues.length },
  }, null, 2));
}

function hasContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasContent);
  if (typeof value === "object") return Object.values(value).some(hasContent);
  return Boolean(value);
}

main();
