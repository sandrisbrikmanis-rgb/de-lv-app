#!/usr/bin/env node
/**
 * Generate Slovenian UI from Croatian HR template (South Slavic baseline).
 * HR UI is already in a closely related language; copy structure and adjust SL labels.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sl-ui-hr-cache.json");

function collectStrings(obj, out) {
  if (obj === null || obj === undefined) return;
  if (typeof obj === "string") {
    if (obj.trim() && !obj.startsWith("__")) out.add(obj);
    return;
  }
  if (Array.isArray(obj)) obj.forEach((v) => collectStrings(v, out));
  else if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "__langCode") continue;
      collectStrings(v, out);
    }
  }
}

function applyTranslations(obj, map) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "string") return map[obj] ?? obj;
  if (Array.isArray(obj)) return obj.map((v) => applyTranslations(v, map));
  if (typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === "__langCode") { out[k] = "sl"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function main() {
  const hrPath = path.join(ROOT, "languages/hr/ui.js");
  const slDir = path.join(ROOT, "languages/sl");
  const slPath = path.join(slDir, "ui.js");

  const code = fs.readFileSync(hrPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const hrUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(hrUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings HR → SL`);

  const translationMap = await translateAll(unique, "hr", "sl", {
    cachePath: CACHE_PATH,
    delayMs: 200,
    concurrency: 8,
    onProgress: (n, remaining) => {
      if (n % 30 === 0) process.stdout.write(`  UI ${n} (~${remaining} remaining)\n`);
    },
  });

  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const slUi = applyTranslations(hrUi, map);
  slUi.__langCode = "sl";

  // SL-specific overrides
  if (slUi.app) {
    slUi.app.title = "Nemščina • SL-DE";
    slUi.app.subtitle = "Vaš inteligentni vodnik za nemščino po ravneh";
    slUi.app.shellLabel = "Nemško-slovenske kartice";
  }
  if (slUi.splash) {
    slUi.splash.title = "Nemščina";
    slUi.splash.subtitle = "Uči nemščino";
  }
  if (slUi.languageSelect) {
    slUi.languageSelect.title = "Izberite jezik";
    slUi.languageSelect.footer = "Uči nemščino";
  }
  if (slUi.study?.table) slUi.study.table.native = "SL";
  if (slUi.menu) {
    slUi.menu.course = "Tečaj";
    slUi.menu.sentences = "Stavki";
    slUi.menu.verbs = "Glagoli";
    slUi.menu.chooseGroup = "Izberite skupino";
    slUi.menu.mainNav = "Glavni meni";
  }
  if (slUi.nav) {
    slUi.nav.backHome = "Nazaj na glavni meni";
    slUi.nav.changeLanguage = "Spremeni jezik";
    slUi.nav.howItWorks = "Kako deluje?";
    slUi.nav.quickTools = "Hitra orodja";
  }
  if (slUi.buttons) {
    slUi.buttons.close = "Zapri";
    slUi.buttons.known = "Znam";
    slUi.buttons.unknown = "Ne vem";
    slUi.buttons.next = "Naslednja beseda";
    slUi.buttons.check = "Preveri";
    slUi.buttons.continue = "Nadaljuj";
  }
  if (slUi.spelling) {
    slUi.spelling.writeNative = "Piši slovensko";
    slUi.spelling.writeGerman = "Piši nemško";
  }

  fs.mkdirSync(slDir, { recursive: true });
  fs.writeFileSync(slPath, `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(slUi, null, 2)};\n`, "utf8");
  console.log(`Written ${slPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
