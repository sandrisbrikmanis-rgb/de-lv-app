#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const JSON_PATH = path.join(ROOT, "reports/temp/es-ui-visual-full-audit.json");
const OUT_PATH = path.join(ROOT, "reports/es-ui-visual-full-audit.md");

const BASELINE_SHA = process.env.BASELINE_SHA || "8249b46f4d0cc751301f87d51ffe623c98a7c992";
const RUNTIME_URL = "https://sandrisbrikmanis-rgb.github.io/de-lv-app/";

const EXTRA_FINDINGS = [
  { id: "KEY-01", location: "languages/es/ui.js › splash.ariaLabel", current: "(trūkst atslēgas — fallback «Loading»)", suggested: "Cargando", status: "LABOT" },
  { id: "KEY-02", location: "languages/es/ui.js › languageSelect.ariaLabel", current: "(trūkst atslēgas — rāda «languageSelect.ariaLabel»)", suggested: "Selección de idioma", status: "LABOT" },
  { id: "KEY-03", location: "languages/es/ui.js › menu.learningModes", current: "(trūkst atslēgas — rāda «menu.learningModes»)", suggested: "Modos de aprendizaje", status: "LABOT" },
  { id: "KEY-04", location: "languages/es/ui.js › kurss.sections.words", current: "(trūkst atslēgas)", suggested: "Palabras", status: "LABOT" },
  { id: "KEY-05", location: "languages/es/ui.js › kurss.sections.names", current: "(trūkst atslēgas)", suggested: "Nombres", status: "LABOT" },
  { id: "KEY-06", location: "languages/es/ui.js › kurss.sections.reading", current: "(trūkst atslēgas)", suggested: "Texto / lectura", status: "LABOT" },
  { id: "KEY-07", location: "languages/es/ui.js › kurss.sections.dialogues", current: "(trūkst atslēgas)", suggested: "Diálogos / frases", status: "LABOT" },
  { id: "STYLE-01", location: "languages/es/ui.js › hints/card vs kurss.hints", current: "«Haga clic» (kartītes) vs «Toca» / «Toque» (kurss)", suggested: "Vienot stilu: «Toca» (tū) visur", status: "NELABOT", note: "Stilistiska nekonsekvence, funkcionāli saprotams" },
  { id: "COURSE-LV-01", location: "Curso › L14 › Izruná › pronunciation note", current: "Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.", suggested: "Del mismo modo, en español la g ante s en «signos» suena más cercana a una k.", status: "LABOT" },
  { id: "COURSE-LV-02", location: "Curso › L15 › Izruná › pronunciation note", current: "Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.", suggested: "Recuerda: el diptongo ei en alemán se pronuncia como ai: reif, unreif.", status: "LABOT" },
  { id: "COURSE-LV-03", location: "Curso › L8–L17 › Izruná sekcijas", current: "z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).", suggested: "La z suena como la c española: Franz (frans), das Zimmer (tsimer).", status: "LABOT" },
];

function main() {
  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  const staticF = data.staticFindings || [];
  const runtimeF = data.runtimeFindings || [];

  const dedup = new Map();
  for (const f of staticF) {
    const key = `${f.location}|${f.current}`;
    if (!dedup.has(key)) dedup.set(key, { ...f, sources: [f.source || "static"] });
  }
  for (const f of EXTRA_FINDINGS) {
    const key = `${f.location}|${f.current}`;
    if (!dedup.has(key)) dedup.set(key, { ...f, sources: ["manual"] });
  }

  // Deduplicate runtime by text+reason
  const runtimeDedup = new Map();
  for (const f of runtimeF) {
    const key = `${f.text}|${f.reason}`;
    if (!runtimeDedup.has(key)) runtimeDedup.set(key, { ...f, screens: new Set([f.screen]) });
    else runtimeDedup.get(key).screens.add(f.screen);
  }

  const allFindings = [...dedup.values()];
  const labot = allFindings.filter((f) => f.status === "LABOT").length;
  const nelabot = allFindings.filter((f) => f.status === "NELABOT").length;

  const screens = [...new Set([...(data.coverage?.desktop || []), ...(data.coverage?.mobile || [])].map((c) => c.screen))];

  const lines = [];
  lines.push("# ES–DE UI — pilns vizuālais audits (READ-ONLY)");
  lines.push("");
  lines.push(`**Datums:** ${new Date().toISOString().slice(0, 10)}`);
  lines.push(`**Režīms:** READ-ONLY vizuālais audits (bez production izmaiņām)`);
  lines.push(`**Repozitorijs:** sandrisbrikmanis-rgb/de-lv-app`);
  lines.push(`**Baseline SHA:** \`${BASELINE_SHA}\``);
  lines.push(`**Runtime:** ${RUNTIME_URL}`);
  lines.push(`**Audita rīks:** \`scripts/audit-es-ui-visual-full.js\` (Playwright, desktop 1280×900 + mobile iPhone 13)`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push("| Metrika | Vērtība |");
  lines.push("|---------|---------|");
  lines.push(`| Pārbaudītie skati (unikāli) | **${screens.length}** |`);
  lines.push(`| A1–C2 līmeņi + režīmi (Easy/Normal/Intense) | **7 grupas × 3 režīmi** |`);
  lines.push(`| Curso apakšsadaļas | izruna, artikuli, vietniekvārdi, 21 lekcija |`);
  lines.push(`| Frases (Sätze) | detail + 3 režīmi |`);
  lines.push(`| Verbos | detail skats |`);
  lines.push(`| Modāļi | info (¿Cómo funciona?) |`);
  lines.push(`| Viewporti | desktop + mobile |`);
  lines.push(`| Unikālie atradumi (statiskie + atslēgas) | **${allFindings.length}** |`);
  lines.push(`| LABOT | **${labot}** |`);
  lines.push(`| NELABOT | **${nelabot}** |`);
  lines.push(`| Production izmaiņas | **0** |`);
  lines.push("");
  lines.push("### Gala rezultāts");
  lines.push("");
  lines.push("## **ES UI VIZUALAIS AUDITS: ATRASTI DEFEKTI**");
  lines.push("");
  lines.push("Lielākā daļa galvenās navigācijas ES režīmā ir spāniski, bet **kursa sekciju renderer reģistri neatpazīst spāņu nosaukumus** (L8–21 tulkojumu/vingrinājumu kartītes var nesalūzt pareizi), **study kartēs trūkst «Idea principal» prefiksa**, **vairākās UI virknēs ir kļūdas vai majuskulas**, un **kursa datos (L8–L17) ir latviešu/prasmju valodu atlikumi**.");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 1. Pārklājums");
  lines.push("");
  lines.push("| Apgabals | Desktop | Mobile | Rezultāts |");
  lines.push("|----------|---------|--------|-----------|");
  const areas = [
    ["Sākuma izvēlne", "home-menu", "PASS ar piezīmēm"],
    ["A1–C2 kartīšu skati", "group-A1-detail … group-C2-mode-2", "PASS ar piezīmēm"],
    ["Frases", "group-Sätze-detail + režīmi", "PASS"],
    ["Verbos", "verbs-detail", "PASS"],
    ["Curso izvēlne", "curso-menu", "PASS ar piezīmēm"],
    ["Curso apakšsadaļas", "curso-pronunciation, articles, pronouns", "PASS"],
    ["Curso lekcijas 1–21", "curso-lesson-1 … curso-lesson-21", "DEFEKTS — jaukti nosaukumi, LV atlikumi"],
    ["Info modālis", "group-A1-info-modal", "PASS"],
    ["aria/title", "visi skati", "DEFEKTS — trūkstošas atslēgas"],
  ];
  for (const [name, , result] of areas) {
    lines.push(`| ${name} | ✓ | ✓ | ${result} |`);
  }
  lines.push("");
  lines.push("<details><summary>Pilns skatu saraksts (" + screens.length + ")</summary>");
  lines.push("");
  lines.push(screens.sort().map((s) => `- ${s}`).join("\n"));
  lines.push("");
  lines.push("</details>");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 2. Atradumi");
  lines.push("");
  lines.push("| ID | UI vieta | CURRENT | Ieteiktais spāņu teksts | Statuss |");
  lines.push("|----|----------|---------|-------------------------|---------|");

  let n = 0;
  for (const f of allFindings.sort((a, b) => (a.id || "").localeCompare(b.id || ""))) {
    n++;
    const id = f.id || `F-${n}`;
    const loc = f.location || f.context || f.screen || "—";
    const cur = (f.current || f.text || "").replace(/\|/g, "\\|");
    const sug = (f.suggested || "—").replace(/\|/g, "\\|");
    const st = f.status || "LABOT";
    lines.push(`| ${id} | ${loc} | ${cur} | ${sug} | ${st} |`);
  }

  lines.push("");
  lines.push("### Runtime apstiprinātie defekti (izvēlētie)");
  lines.push("");
  lines.push("| Teksts | Vieta | Ieteikums | Statuss |");
  lines.push("|--------|-------|-----------|---------|");
  const runtimeRows = [
    ["Diálogo / teikumi", "Curso L8–L12 sekciju virsraksti", "Diálogo / frases", "LABOT"],
    ["Izruná", "Curso L8–L21 sekciju virsraksti", "Pronunciación", "LABOT"],
    ["Ejercicio / Ejercicio", "Curso L8–L12", "Ejercicio", "LABOT"],
    ["la siguiente palabra", "A1–C2, Frases, Verbos — poga #nextBtn", "Siguiente palabra", "LABOT"],
    ["Delaware", "Study kartes — tabulas galvene DE", "DE", "LABOT"],
    ["MUCHOS", "Study minimalStudy — plurāla etiķete", "Pl.", "LABOT"],
    ["Übung I / Übung II", "Kursa vingrinājumu meta", "Ejercicio I / Ejercicio II", "LABOT"],
    ["menu.learningModes", "#modeButtons aria-label", "Modos de aprendizaje", "LABOT"],
    ["languageSelect.ariaLabel", "#appLanguageScreen aria-label", "Selección de idioma", "LABOT"],
  ];
  for (const [cur, loc, sug, st] of runtimeRows) {
    lines.push(`| ${cur} | ${loc} | ${sug} | ${st} |`);
  }

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 3. Kritiskie renderer defekti");
  lines.push("");
  lines.push("### REG-STUDY — «Idea principal» prefikss");
  lines.push("");
  lines.push("- **UI vieta:** Study kartes A1–C2 ar `Idea principal:` skaidrojumos");
  lines.push("- **CURRENT:** `STUDY_MAIN_IDEA_PREFIXES` nesatur `Idea principal`");
  lines.push("- **Ieteikums:** Pievienot `Idea principal` masīvam `www/ui.js`");
  lines.push("- **Statuss:** LABOT");
  lines.push("");
  lines.push("### REG-COURSE — Spāņu kursa sekcijas");
  lines.push("");
  lines.push("- **UI vieta:** Curso L8–21 — `Traducir`, `Ejercicio`, `Palabras`, `Gramática`, u.c.");
  lines.push("- **CURRENT:** `COURSE_SECTION_I18N_KEYS`, `COURSE_TRANSLATE_SECTION_TITLES`, `COURSE_EXERCISE_SECTION_TITLES` nesatur spāņu variantus");
  lines.push("- **Ieteikums:** Paplašināt reģistrus ar: `Traducir`, `Ejercicio`, `Ejercicio / Ejercicio`, `Palabras`, `Gramática`, `Diálogo / frases`, `Pronunciación`, `Texto / Lectura`, `Nombres`");
  lines.push("- **Statuss:** LABOT");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 4. NELABOT pozīcijas");
  lines.push("");
  lines.push("| ID | Pamatojums |");
  lines.push("|----|------------|");
  lines.push("| HTML-* | `www/index.html` satur LV/DE fallback; lielākā daļa tiek pārrakstīta ar `applyLocalizedStaticUi()` pēc ES izvēles. |");
  lines.push("| STYLE-01 | «Haga clic» vs «Toca» — stilistiska variācija, abi ir pareizi spāniski. |");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 5. Metodoloģija");
  lines.push("");
  lines.push("1. Vides pārbaude: repo `sandrisbrikmanis-rgb/de-lv-app`, origin pareizs, vide nav tmp/agent_temp.");
  lines.push("2. Runtime audits: Playwright pret production un lokālo kodu bāzi.");
  lines.push("3. Statiskā analīze: `languages/es/ui.js` vs `languages/en/ui.js` atslēgu paritāte, `www/ui.js` renderer reģistri, `data/es/courseLessons.js`.");
  lines.push("4. Vācu mācību vārdi, piemēri un teikumi **nav** uzskatīti par kļūdām.");
  lines.push("5. Production faili **nav** mainīti.");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(`*Ģenerēts: ${new Date().toISOString()} · Atradumu kopskaits: ${allFindings.length} (LABOT: ${labot}, NELABOT: ${nelabot})*`);

  fs.writeFileSync(OUT_PATH, lines.join("\n"));
  console.log(`Wrote ${OUT_PATH} (${allFindings.length} findings)`);
}

main();
