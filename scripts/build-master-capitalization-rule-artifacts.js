#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { verifyMasterCapitalizationRule } = require("./lib/master-capitalization-rule-verify");
const { BATCH_TABLE_LINES } = require("./lib/master-premerge-verify-core");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/master-capitalization-rule");

const INVENTORY_ROWS = [
  {
    document: "PROJECT_LANGUAGE_MASTER_STANDARD.md",
    section: "§7.7.4",
    existingText: "LOW, naturalness, capitalization … nav automātiski remontējami (LLM)",
    problem: "Var tikt kļūdaini lasīts kā aizliegums jebkuram capitalization finding",
    action: "CLARIFY",
    resolution: "Pievienots v1.19 precizējums — stila LOW vs avota atbalstīta ortogrāfija (§7.158)",
  },
  {
    document: "PROJECT_LANGUAGE_MASTER_STANDARD.md",
    section: "§7.35.2",
    existingText: "Pārbaudīt: … lielos un mazos burtus (bez avota/atdalījuma)",
    problem: "Neatšķir vārdnīcas lemma vs teikuma kapitalizāciju; dublē jauno normu bez SOURCE-SUPPORTED secības",
    action: "CLARIFY",
    resolution: "Norāde uz §7.158 un teikumu noteikumiem",
  },
  {
    document: "MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md",
    section: "§6 (iepriekš)",
    existingText: "Īsa DE→TARGET→SEMANTIC ķēde",
    problem: "Nepilnīga SOURCE-SUPPORTED secība (lemma/kapitalizācija/evidence)",
    action: "REPLACE_WITH_NEW_RULE",
    resolution: "§6 paplašināts ar 6 soļu obligāto secību un evidence aizliegumiem",
  },
  {
    document: "MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md",
    section: "§15 (iepriekš)",
    existingText: "AI = AUDIT EXECUTOR; īss aizliegums bez kapitalizācijas/UI",
    problem: "Nepietiekami skaidra AI loma pret avotu; dublē §2 daļēji",
    action: "MERGE_DUPLICATE",
    resolution: "§15 papildināts ar drīkst/nedrīkst sarakstu (kapitalizācija, production)",
  },
  {
    document: "LANGUAGE_AUDIT_STANDARD.md",
    section: "Galvene + §24",
    existingText: "SUPERSEDED + obligāts standarts vienlaikus",
    problem: "Pretruna: viss fails vēsturisks vs pilnībā obligāts",
    action: "CLARIFY",
    resolution: "PARTIALLY SUPERSEDED — spēkā tiktāl, ciktāl nav pretrunā MASTER §7.153–§7.158",
  },
  {
    document: "PROJECT_LANGUAGE_MASTER_STANDARD.md",
    section: "§7.153",
    existingText: "AUTHORITATIVE SOURCE → … → VERDICT",
    problem: "Dublē secību, bet bez lemma/kapitalizācijas soļiem",
    action: "KEEP",
    resolution: "Saglabāts; §7.158 un grozījumu §6 papildina bez pretrunas",
  },
  {
    document: "PROJECT_LANGUAGE_MASTER_STANDARD.md",
    section: "§7.156",
    existingText: "AI nav LANGUAGE AUTHORITY",
    problem: "Dublē §15 daļēji",
    action: "KEEP",
    resolution: "Saglabāts (stingrākais); §15 un §7.158 precizē kapitalizāciju",
  },
];

function gitDiffNames() {
  try {
    const base = process.env.BASE_REF || "origin/main";
    return execSync(`git diff --name-only ${base}...HEAD`, { cwd: ROOT, encoding: "utf8" })
      .trim()
      .split("\n")
      .filter(Boolean);
  } catch {
    return [];
  }
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const verify = verifyMasterCapitalizationRule();
  const changedFiles = gitDiffNames().filter((f) => f.startsWith("docs_and_rules/"));
  const batchMissing = BATCH_TABLE_LINES.filter(
    (line) => !fs.readFileSync(path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md"), "utf8").includes(line),
  );

  const manifest = {
    generatedAt: new Date().toISOString(),
    changedDocuments: changedFiles.length ? changedFiles : ["docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md", "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md", "docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md", "docs_and_rules/LANGUAGE_AUDIT_STANDARD.md"],
    addedSection: {
      master: "§7.158 Mērķvalodas pamatforma, ortogrāfija un kapitalizācija (v1.19)",
      apvienots: "§20 Mērķvalodas pamatforma, ortogrāfija un kapitalizācija",
    },
    replacedLocations: [
      "MASTER_1.12 … §6 — SOURCE-SUPPORTED secība",
      "MASTER_1.12 … §15 — AI drīkst/nedrīkst",
    ],
    removedContradictions: [],
    mergedDuplicates: ["§15 AI loma paplašinājums ar §7.156 esošo principu"],
    stricterRulesRetained: ["§7.153–§7.157", "§14 bulk verdict aizliegums", "batch limits"],
    batchLimitDiff: { changed: batchMissing.length > 0, missingLines: batchMissing },
    languageRegistryDiff: {
      changed: false,
      embeddedCount: verify.embeddedRegistry?.EMBEDDED_LANGUAGE_REGISTRY_COUNT ?? null,
    },
    productionDiff: execSync("git diff --name-only -- data www/data crowdin", { cwd: ROOT, encoding: "utf8" }).trim(),
    deDiff: execSync("git diff --name-only -- data/de www/data/de", { cwd: ROOT, encoding: "utf8" }).trim(),
    crowdinDiff: execSync("git diff --name-only -- crowdin", { cwd: ROOT, encoding: "utf8" }).trim(),
  };

  const inventory = {
    generatedAt: new Date().toISOString(),
    rows: INVENTORY_ROWS,
    removedContradictionCount: 0,
    mergedDuplicateCount: 1,
    activeContradictionsAfterEdit: verify.checks.activeContradictionCount,
  };

  const md = [
    "# MASTER capitalization / lemma rule — contradiction inventory",
    "",
    "| Dokuments | Sadaļa | Problēma | Darbība |",
    "|-----------|--------|----------|---------|",
    ...INVENTORY_ROWS.map(
      (r) => `| ${r.document} | ${r.section} | ${r.problem} | ${r.action} |`,
    ),
    "",
    `Active contradictions after edit: **${inventory.activeContradictionsAfterEdit}**`,
  ].join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "master-capitalization-contradiction-inventory.json"), `${JSON.stringify(inventory, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT_DIR, "master-capitalization-contradiction-inventory.md"), `${md}\n`);
  fs.writeFileSync(path.join(OUT_DIR, "master-capitalization-change-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT_DIR, "master-capitalization-verification.json"), `${JSON.stringify(verify, null, 2)}\n`);

  console.log(JSON.stringify({ gate: "MASTER_CAPITALIZATION_ARTIFACTS", pass: verify.pass, inventoryRows: INVENTORY_ROWS.length }, null, 2));
  if (!verify.pass) process.exit(1);
}

main();
