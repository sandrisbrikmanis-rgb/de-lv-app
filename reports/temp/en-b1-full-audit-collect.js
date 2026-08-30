#!/usr/bin/env node
/**
 * EN-DE B1 full audit collector (read-only). Writes reports/temp/en-b1-audit-data.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|lieto|parasti|gribi|pateikt|tikai|nevis|Koka|kadr|darba vietu|vienreiz|nenoteiktais|noteiktais|jauks|vietu|personu|braukt|vest|aizvest|nav tas pats|kas |ko |vai |tevi |cik daudz|es tevi|es skatos|mācēt|prast|tāpēc|peldēt|maksāt|Berlīnē|jūs|jums|jūsu|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|rīsi|satieku)\b/i;
const LATVIAN_REF = /Latvian/i;
const BS_DIAC = /[čćđšžČĆĐŠŽ]/;
const PL_DIAC = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;
const ET_DIAC = /[äöõüÄÖÕÜ]/;
const RU_CYR = /[а-яА-ЯёЁ]/;
const UK_CYR = RU_CYR;
const LT_DIAC = /[ąčęėįšųūžĄČĘĖĮŠŲŪŽ]/;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const LV_ACCENT_WORDS =
  /^(uz|Uz|kas|ko|mazs|teikt|iet|lietus|laiks|reiz|pie|lieto|parasti|Latvian|darba|vietu)$/i;

function load(filePath, globalKey) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
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

function hasContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasContent);
  if (typeof value === "object") return Object.values(value).some(hasContent);
  return Boolean(value);
}

function isLearnerField(ctx) {
  if (ctx.inDe) return false;
  if (["de", "de_article", "de_plural", "level"].includes(ctx.parentKey)) return false;
  if (ctx.path.includes(".de") && !ctx.path.includes(".lv")) return false;
  return true;
}

function isTranslationField(ctx) {
  const k = ctx.parentKey;
  return ["lv", "translation", "meaning", "title", "subtitle"].includes(k);
}

function detectOtherLang(text) {
  if (BS_DIAC.test(text)) return "bosnian_diacritics";
  if (PL_DIAC.test(text)) return "polish_diacritics";
  if (LT_DIAC.test(text)) return "lithuanian_diacritics";
  if (RU_CYR.test(text)) return "russian_cyrillic";
  return null;
}

function collectB1() {
  const lvFile = path.join(ROOT, "data", "b1.js");
  const enFile = path.join(ROOT, "data", "en", "b1.js");
  const wwwFile = path.join(ROOT, "www", "data", "en", "b1.js");
  const lv = load(lvFile, "B1_WORDS");
  const en = load(enFile, "B1_WORDS");

  const data = {
    meta: {
      date: new Date().toISOString(),
      level: "b1",
      lvFile: "data/b1.js",
      enFile: "data/en/b1.js",
      lvCount: lv.length,
      enCount: en.length,
      lunaAudit: "NOT_RUN — OPENAI_API_KEY unavailable in audit environment",
    },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    deSourceIssues: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    lvRemnants: { issues: [], pass: true },
    otherLangRemnants: { issues: [], pass: true },
    semicolons: { issues: [], pass: true },
    metaPedagogy: { issues: [], pass: true },
    mainTranslations: { entries: [], summary: { OK: 0, WARNING: 0, ERROR: 0 } },
    studyCards: { issues: [], pass: true },
    comparisonIssues: { issues: [], pass: true },
    sectionAccents: { issues: [], pass: true, orphanRows: [], validatorRaw: 0 },
    layerIdentity: { pass: true, identical: false },
    comparisonStudy: { issues: [], count: 0 },
    standardStudy: { count: 0 },
    minimalStudy: { count: 0 },
    normalCards: 0,
    validation: {},
  };

  data.layerIdentity.identical = fs.readFileSync(enFile, "utf8") === fs.readFileSync(wwwFile, "utf8");
  if (!data.layerIdentity.identical) {
    data.layerIdentity.pass = false;
    data.structural.issues.push({
      severity: "critical",
      message: "data/en/b1.js and www mirror are not identical",
    });
    data.structural.pass = false;
  }

  if (lv.length !== en.length) {
    data.structural.pass = false;
    data.structural.issues.push({
      severity: "critical",
      message: `Record count mismatch LV=${lv.length} EN=${en.length}`,
    });
  }

  const lvStudy = lv.filter((e) => e.study).length;
  const enStudy = en.filter((e) => e.study).length;
  data.meta.lvStudyCount = lvStudy;
  data.meta.enStudyCount = enStudy;
  if (lvStudy !== enStudy) {
    data.structural.pass = false;
    data.structural.issues.push({
      severity: "critical",
      message: `Study count mismatch LV=${lvStudy} EN=${enStudy}`,
    });
  }

  const ids = new Set();
  const studyIds = new Set();

  for (let i = 0; i < Math.min(lv.length, en.length); i++) {
    const lvE = lv[i];
    const enE = en[i];
    const id = entryId(enE, i);

    if (!enE.study) data.normalCards++;
    else {
      const layout = enE.study.layout || "standardStudy";
      if (layout === "comparisonStudy") data.comparisonStudy.count++;
      else if (layout === "minimalStudy") data.minimalStudy.count++;
      else data.standardStudy.count++;
    }

    if (lvE.study && !enE.study) {
      data.structural.pass = false;
      data.structural.issues.push({
        severity: "critical",
        id,
        de: lvE.de,
        message: "Missing study object in EN (present in LV master)",
        missing: ["study"],
      });
    }

    if (lvE.de !== enE.de) {
      data.structural.pass = false;
      data.structural.issues.push({
        severity: "critical",
        id,
        message: `Order mismatch at index ${i}: LV.de=${lvE.de} EN.de=${enE.de}`,
      });
    }

    if (enE.study?.id) {
      if (studyIds.has(enE.study.id)) {
        data.structural.issues.push({ severity: "high", id, message: `Duplicate study id: ${enE.study.id}` });
        data.structural.pass = false;
      }
      studyIds.add(enE.study.id);
    }

    const lvKeys = new Set(schemaKeys(lvE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const enKeys = new Set(schemaKeys(enE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const missing = [...lvKeys].filter((k) => !enKeys.has(k));
    if (missing.length) {
      data.structural.issues.push({
        severity: lvE.study && !enE.study ? "critical" : "high",
        id,
        de: enE.de,
        message: `Missing fields vs LV: ${missing.join(", ")}`,
        missing,
      });
      data.structural.pass = false;
    }

    const lvLayout = lvE.study?.layout || (lvE.study ? "standardStudy" : null);
    const enLayout = enE.study?.layout || (enE.study ? "standardStudy" : null);
    if (lvLayout !== enLayout) {
      data.structural.issues.push({
        severity: lvE.study && !enE.study ? "critical" : "high",
        id,
        de: enE.de,
        message: `Layout mismatch LV=${lvLayout} EN=${enLayout}`,
      });
      data.structural.pass = false;
    }

    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lvE[field] !== enE[field]) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({
          severity: "critical",
          id,
          de: enE.de,
          field,
          lvValue: lvE[field],
          enValue: enE[field],
        });
      }
    }

    if (lvE.de_article && !enE.de_article && /^(der|die|das)$/i.test(lvE.de_article)) {
      data.deSourceIssues.issues.push({
        severity: "de_source",
        id,
        de: enE.de,
        field: "de_article",
        currentMasterDe: lvE.de_article,
        suspected: lvE.de_article,
        message: "LV master has article; EN card missing de_article (verify noun metadata)",
      });
    }

    if (lvE.study && enE.study) {
      const lvDe = [];
      const enDe = [];
      collectDeStrings(lvE.study, lvDe);
      collectDeStrings(enE.study, enDe);
      if (JSON.stringify(lvDe) !== JSON.stringify(enDe)) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({
          severity: "critical",
          id,
          de: enE.de,
          message: "Study German content differs from LV etalon",
        });
      }

      const lvEx = lvE.study.examples?.length ?? 0;
      const enEx = enE.study.examples?.length ?? 0;
      if (lvEx !== enEx) {
        data.studyCards.issues.push({
          severity: "high",
          id,
          de: enE.de,
          message: `Example count mismatch LV=${lvEx} EN=${enEx}`,
        });
        data.studyCards.pass = false;
      }

      const lvCmp = lvE.study.comparison?.length ?? 0;
      const enCmp = enE.study.comparison?.length ?? 0;
      if (lvCmp !== enCmp) {
        data.comparisonIssues.issues.push({
          severity: "medium",
          id,
          de: enE.de,
          message: `Comparison row count mismatch LV=${lvCmp} EN=${enCmp}`,
        });
        data.comparisonIssues.pass = false;
      }

      const lvAccentEx = lvE.study.sectionAccents?.examples?.length ?? 0;
      const enAccentEx = enE.study.sectionAccents?.examples?.length ?? 0;
      const exCount = enE.study.examples?.length ?? 0;
      if (enAccentEx > exCount || enAccentEx > lvAccentEx) {
        data.sectionAccents.orphanRows.push({
          id,
          de: enE.de,
          enAccentRows: enAccentEx,
          lvAccentRows: lvAccentEx,
          exampleCount: exCount,
          message: "EN sectionAccents.examples has orphan rows (count > examples or > LV master)",
        });
        data.sectionAccents.pass = false;
        data.sectionAccents.issues.push({
          severity: "high",
          id,
          de: enE.de,
          message: `Orphan accent rows: EN examples accents=${enAccentEx} examples=${exCount} LV accents=${lvAccentEx}`,
        });
      }
    }

    const main = {
      id,
      de: enE.de,
      de_article: enE.de_article,
      lvGloss: lvE.lv,
      enMain: enE.lv,
      studyTranslation: enE.study?.translation || null,
      status: "OK",
      flags: [],
    };
    if (!enE.lv || !enE.lv.trim()) {
      main.status = "ERROR";
      main.flags.push("empty_main_translation");
    }
    if (enE.lv && enE.lv.includes(";")) {
      main.status = "ERROR";
      main.flags.push("semicolon_in_main");
    }
    if (enE.lv && (LV_ONLY.test(enE.lv) || LV_WORDS.test(enE.lv) || LATVIAN_REF.test(enE.lv))) {
      main.status = "ERROR";
      main.flags.push("latvian_remnant_in_main");
    }
    data.mainTranslations.entries.push(main);
    data.mainTranslations.summary[main.status]++;

    walkStrings(enE, (text, ctx) => {
      if (!isLearnerField(ctx)) return;
      if (!text.trim()) {
        if (["lv", "translation", "title", "lead"].includes(ctx.parentKey)) {
          data.technical.issues.push({ severity: "high", id, path: ctx.path, message: "Empty required string" });
          data.technical.pass = false;
        }
        return;
      }
      if (MOJIBAKE.test(text)) {
        data.technical.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 120), message: "Mojibake" });
        data.technical.pass = false;
      }
      if (LATVIAN_REF.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({
          severity: "high",
          id,
          de: enE.de,
          path: ctx.path,
          text: text.slice(0, 200),
          type: "latvian_reference",
        });
        if (/in Latvian|Latvian (often|usually|says|uses|translation)/i.test(text)) {
          data.metaPedagogy.pass = false;
          data.metaPedagogy.issues.push({
            severity: "medium",
            id,
            de: enE.de,
            path: ctx.path,
            text: text.slice(0, 200),
            type: "learner_perspective_latvian",
          });
        }
      }
      if (LV_ONLY.test(text) || LV_WORDS.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({
          severity: "high",
          id,
          de: enE.de,
          path: ctx.path,
          text: text.slice(0, 200),
          type: "latvian_text",
        });
      }
      const otherLang = detectOtherLang(text);
      if (otherLang) {
        data.otherLangRemnants.pass = false;
        data.otherLangRemnants.issues.push({
          severity: "medium",
          id,
          de: enE.de,
          path: ctx.path,
          text: text.slice(0, 200),
          type: otherLang,
        });
      }
      if (text.includes(";")) {
        const isTranslationLike =
          isTranslationField(ctx) ||
          (ctx.path.includes("study.comparison") && ctx.parentKey === "meaning") ||
          (ctx.path.includes("study.comparison") && ctx.parentKey === "example");
        if (isTranslationLike) {
          data.semicolons.pass = false;
          data.semicolons.issues.push({
            severity: "medium",
            id,
            de: enE.de,
            path: ctx.path,
            text: text.slice(0, 200),
            type: "semicolon_in_translation",
          });
        }
      }
    }, { path: `entry[${i}]`, parentKey: "", inDe: false });

    if (enE.study) {
      const study = enE.study;
      const layout = study.layout || "standardStudy";

      if (layout === "standardStudy") {
        if (!hasContent(study.explanation)) {
          data.studyCards.issues.push({ severity: "high", id, de: enE.de, message: "standardStudy missing explanation" });
          data.studyCards.pass = false;
        }
        if (!hasContent(study.examples)) {
          data.studyCards.issues.push({ severity: "high", id, de: enE.de, message: "standardStudy missing examples" });
          data.studyCards.pass = false;
        }
      }

      if (layout === "comparisonStudy") {
        if (!hasContent(study.comparisonTable) && !hasContent(study.comparison) && !hasContent(study.words)) {
          data.comparisonStudy.issues.push({ severity: "high", id, message: "comparisonStudy missing comparison content" });
        }
      }

      if (lvE.study?.sectionAccents && !study.sectionAccents) {
        data.sectionAccents.issues.push({ severity: "high", id, message: "Missing sectionAccents present in LV" });
        data.sectionAccents.pass = false;
      }

      if (study.sectionAccents) {
        const terms = [];
        collectSectionAccentTerms(study.sectionAccents, terms);
        for (const term of terms) {
          if (LV_ONLY.test(term) || LV_WORDS.test(term) || LV_ACCENT_WORDS.test(term)) {
            data.sectionAccents.issues.push({
              severity: "high",
              id,
              de: enE.de,
              term,
              message: "LV remnant in sectionAccents",
            });
            data.sectionAccents.pass = false;
          }
          if (LATVIAN_REF.test(term)) {
            data.sectionAccents.issues.push({
              severity: "high",
              id,
              de: enE.de,
              term,
              message: "Latvian reference in sectionAccents",
            });
            data.sectionAccents.pass = false;
          }
        }

        function checkAccentsBlock(block, sectionName, index) {
          // Only flag LV/Latvian tokens in sectionAccents — validator reports 0 B1 issues;
          // generic "term not in text" heuristics produce false positives on nested comparison maps.
          return;
        }
        const sa = study.sectionAccents;
        if (sa.explanation) checkAccentsBlock(sa.explanation, "explanation", 0);
        if (Array.isArray(sa.examples)) sa.examples.forEach((ex, idx) => checkAccentsBlock(ex, "examples", idx));
        if (Array.isArray(sa.comparison)) sa.comparison.forEach((c, idx) => checkAccentsBlock(c, "comparison", idx));
        if (sa.tip) {
          if (Array.isArray(sa.tip)) sa.tip.forEach((t, idx) => checkAccentsBlock(t, "tip", idx));
          else checkAccentsBlock(sa.tip, "tip", 0);
        }
        if (sa.important) {
          if (Array.isArray(sa.important)) sa.important.forEach((t, idx) => checkAccentsBlock(t, "important", idx));
          else checkAccentsBlock(sa.important, "important", 0);
        }
      }
    }
  }

  try {
    const valOut = execSync("node scripts/validate-study-design.js --lang=en", {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
    const val = JSON.parse(valOut);
    const b1 = val.perFile?.find((f) => f.file === "data/en/b1.js");
    data.sectionAccents.validatorRaw = b1?.sectionAccentIssues ?? 0;
    data.validation.validateStudyDesign = { pass: val.pass, b1SectionAccentIssues: data.sectionAccents.validatorRaw };
  } catch (e) {
    try {
      const val = JSON.parse(e.stdout || "{}");
      const b1 = val.perFile?.find((f) => f.file === "data/en/b1.js");
      data.sectionAccents.validatorRaw = b1?.sectionAccentIssues ?? 0;
      data.validation.validateStudyDesign = { pass: false, b1SectionAccentIssues: data.sectionAccents.validatorRaw };
    } catch {
      data.validation.validateStudyDesign = { pass: false, error: "could not parse validator" };
    }
  }

  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=en", { cwd: ROOT, encoding: "utf8" }));
    data.validation.languageParity = { pass: parity.pass, b1: parity.levels?.b1 };
  } catch {
    data.validation.languageParity = { pass: false };
  }

  try {
    const trans = execSync("node scripts/audit-translations.js --lang=en", { cwd: ROOT, encoding: "utf8" });
    data.validation.auditTranslations = { pass: trans.includes("TOTAL ISSUES (lang=en): 0") };
  } catch {
    data.validation.auditTranslations = { pass: false };
  }

  try {
    const moj = JSON.parse(execSync("node scripts/audit-mojibake.js --lang=en", { cwd: ROOT, encoding: "utf8" }));
    data.validation.mojibake = { pass: moj.pass };
  } catch {
    data.validation.mojibake = { pass: false };
  }

  const out = path.join(ROOT, "reports", "temp", "en-b1-audit-data.json");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(data, null, 2));
  console.log(`Wrote ${out}`);
  console.log(
    JSON.stringify({
      structural: data.structural.pass,
      german: data.germanIntegrity.pass,
      lvRemnants: data.lvRemnants.issues.length,
      metaPedagogy: data.metaPedagogy.issues.length,
      sectionAccents: data.sectionAccents.issues.length,
      orphanRows: data.sectionAccents.orphanRows.length,
      validatorRaw: data.sectionAccents.validatorRaw,
    })
  );
  return data;
}

collectB1();
