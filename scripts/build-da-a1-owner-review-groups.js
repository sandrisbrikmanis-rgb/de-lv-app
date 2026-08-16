#!/usr/bin/env node
/**
 * Build DA–DE A1 OWNER review group files from reports/da-a1-full-audit.md (READ-ONLY).
 * Same workflow as CS–DE Kurss: CURRENT_DA → OWNER fills decision → copy-only apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const AUDIT_MD = path.join(ROOT, "reports", "da-a1-full-audit.md");

const FIELD_GROUPS = [
  { file: "reports/da-a1-owner-review-group01.md", start: 12, end: 61 },
  { file: "reports/da-a1-owner-review-group02.md", start: 62, end: 111 },
  { file: "reports/da-a1-owner-review-group03.md", start: 112, end: 143 },
];

function loadWords() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/a1.js"), "utf8"), ctx);
  const lvCtx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/a1.js"), "utf8"), lvCtx);
  return {
    da: ctx.window.A1_WORDS,
    lv: lvCtx.window.A1_WORDS,
  };
}

function cardPath(cardId, field) {
  return `${cardId}.${field}`;
}

function parseFindings(md) {
  const start = md.indexOf("## 3. Pilns atradumu saraksts");
  if (start < 0) throw new Error("Findings section not found");
  const end = md.indexOf("\n---\n\n## 4. Metodoloģija");
  const body = end >= 0 ? md.slice(start, end) : md.slice(start);
  const blocks = body.split(/\n(?=#### DA-A1-\d+)/);
  const findings = [];

  for (const block of blocks) {
    const header = block.match(/^#### (DA-A1-\d+)\s*$/m);
    if (!header) continue;
    const auditId = header[1];
    const num = Number(auditId.replace("DA-A1-", ""));

    function field(label) {
      const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.*)`, "m");
      const m = block.match(re);
      return m ? m[1].trim() : "";
    }

    findings.push({
      num,
      auditId,
      cardId: field("Card ID"),
      field: field("Field"),
      current: field("CURRENT"),
      proposed: field("NEW"),
      problem: field("Problēma"),
      reason: field("Pamatojums"),
      severity: field("Smagums"),
      status: field("Statuss"),
    });
  }

  findings.sort((a, b) => a.num - b.num);
  return findings;
}

function deForFinding(f, daWords, lvWords) {
  const cardId = f.cardId;
  let de = cardId.replace(/^a1-/, "").replace(/-study$/, "");
  if (de === "STRUCT") return "";
  const entry = daWords.find((w) => w.study?.id === cardId || w.de === de || w.de.toLowerCase() === de);
  if (entry) de = entry.de;
  return de;
}

function lvRefForFinding(f, lvWords) {
  const de = f.cardId.replace(/^a1-/, "").replace(/-study$/, "");
  const entry = lvWords.find((w) => w.study?.id === f.cardId || w.de === de || w.de.toLowerCase() === de);
  if (!entry) return "";
  if (f.field === "lv") return entry.lv || "";
  if (f.field === "study") return "(trūkst study — skat. LV etalonu)";
  return "(skat. LV etalonu data/a1.js)";
}

function renderFinding(f, daWords, lvWords) {
  const de = deForFinding(f, daWords, lvWords);
  const lvRef = lvRefForFinding(f, lvWords);
  const pathStr = cardPath(f.cardId, f.field);
  const lines = [];
  lines.push(`## Finding ${f.num}`);
  lines.push("");
  lines.push(`**Audit ID:** ${f.auditId}`);
  lines.push(`**Card ID:** ${f.cardId}`);
  lines.push(`**ID / path:** \`${pathStr}\``);
  if (de) lines.push(`**DE (read-only):** ${de}`);
  lines.push(`**Severity:** ${f.severity}`);
  lines.push(`**Field:** \`${f.field}\``);
  lines.push(`**Production file:** \`data/da/a1.js\``);
  if (lvRef) lines.push(`**LV reference:** ${lvRef}`);
  lines.push(`**CURRENT_DA:** ${f.current}`);
  lines.push(`**PROPOSED_DA:** ${f.proposed}`);
  lines.push(`**Problēma:** ${f.problem}`);
  lines.push(`**Audita pamatojums:** ${f.reason}`);
  lines.push(`**Avots:** GPT-5.6 Luna audit (\`reports/da-a1-full-audit.md\`)`);
  lines.push("");
  lines.push("**OWNER_DECISION:**");
  lines.push("");
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

function renderGroup(title, group, findings, daWords, lvWords) {
  const slice = findings.filter((f) => f.num >= group.start && f.num <= group.end);
  const lines = [];
  lines.push(`# DA–DE A1 — OWNER review ${title}`);
  lines.push("");
  lines.push(`Avots: \`reports/da-a1-full-audit.md\``);
  lines.push(`Findings: **${group.start}–${group.end}** (${slice.length} ieraksti)`);
  lines.push("");
  lines.push("> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez decisions tabulu).");
  lines.push("> **DE lauki nemainīt.** Labojam tikai DA (\`lv\` un Study DA laukus).");
  lines.push("");
  for (const f of slice) lines.push(renderFinding(f, daWords, lvWords));
  return { content: lines.join("\n"), count: slice.length };
}

function renderMissingStudy(findings, daWords) {
  const slice = findings.filter((f) => f.field === "study" && f.current === "(nav Study objekta)");
  const lines = [];
  lines.push("# DA–DE A1 — OWNER review (trūkstošie Study objekti)");
  lines.push("");
  lines.push(`Avots: \`reports/da-a1-full-audit.md\` §5`);
  lines.push(`Ieraksti: **${slice.length}**`);
  lines.push("");
  lines.push("> Šiem vārdiem trūkst viss \`study\` bloks. Copy-ready dāņu saturs — \`reports/da-a1-full-audit.md\` §5.");
  lines.push("> OWNER_DECISION: apstiprini §5 JSON vai ieraksti laboto variantu.");
  lines.push("");
  for (const f of slice) {
    const de = deForFinding(f, daWords, []) || f.problem.replace(/^Trūkst Study objekta vārdam /, "");
    lines.push(`## Finding ${f.num} — ${f.cardId}`);
    lines.push("");
    lines.push(`**DE (read-only):** ${de}`);
    lines.push(`**Field:** \`study\` (viss objekts)`);
    lines.push(`**CURRENT_DA:** (nav Study objekta)`);
    lines.push(`**PROPOSED_DA:** ${f.proposed}`);
    lines.push(`**Problēma:** ${f.problem}`);
    lines.push("");
    lines.push("**OWNER_DECISION:**");
    lines.push("");
    lines.push("---");
    lines.push("");
  }
  return { content: lines.join("\n"), count: slice.length };
}

function renderReadme(total) {
  return `# DA–DE A1 — OWNER review (Copy-Only workflow)

Tas pats princips kā **CS–DE Kurss — Lekcijas**:

1. Atver \`da-a1-owner-review-*.md\` failus.
2. Katram finding — **CURRENT_DA** ir nepareizais teksts production failā (\`data/da/a1.js\`, lauks \`lv\`).
3. **ChatGPT / tu** ieraksti pareizo dāņu variantu laukā **OWNER_DECISION** (vai izveido \`da-a1-owner-decisions-groupXX.md\` tabulu).
4. Atgriez aizpildītos failus — es veicu **COPY-ONLY** labojumus \`data/da/a1.js\` + \`www/data/da/a1.js\`.

## Faili

| Fails | Findings | Saturs |
|-------|----------|--------|
| \`da-a1-owner-review-missing-study.md\` | 10 | Trūkstošie Study objekti (§5) |
| \`da-a1-owner-review-group01.md\` | 12–61 | Lauku labojumi (50) |
| \`da-a1-owner-review-group02.md\` | 62–111 | Lauku labojumi (50) |
| \`da-a1-owner-review-group03.md\` | 112–143 | Lauku labojumi (32) |

**Kopā validēti atradumi auditā:** ${total} (1 strukturāls CRITICAL nav copy-only — Study skaits 124→134)

## OWNER statusi (decisions tabulai)

- **LABOT** — ieraksti NEW tekstu; es copy-paste
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — vajag papildu kontekstu

## Svarīgi

- **PROPOSED_DA** = Luna ieteikums no audita; tu vari apstiprināt vai labot.
- **DE nemainīt** (\`de\`, \`de_article\`, Study DE piemēri).
- Production changes tikai pēc tavas atgriešanas.

**Audits:** \`reports/da-a1-full-audit.md\`
`;
}

function main() {
  const md = fs.readFileSync(AUDIT_MD, "utf8");
  const findings = parseFindings(md);
  const { da, lv } = loadWords();

  const written = [];

  const readme = renderReadme(findings.length);
  fs.writeFileSync(path.join(ROOT, "reports/da-a1-owner-review-README.md"), readme);
  written.push({ file: "reports/da-a1-owner-review-README.md", count: 1 });

  const missing = renderMissingStudy(findings, da);
  fs.writeFileSync(path.join(ROOT, "reports/da-a1-owner-review-missing-study.md"), missing.content);
  written.push({ file: "reports/da-a1-owner-review-missing-study.md", count: missing.count });

  for (let i = 0; i < FIELD_GROUPS.length; i++) {
    const group = FIELD_GROUPS[i];
    const title = `Group ${String(group.start).padStart(2, "0")}–${String(group.end).padStart(2, "0")}`;
    const { content, count } = renderGroup(title, group, findings, da, lv);
    const outPath = path.join(ROOT, group.file);
    fs.writeFileSync(outPath, content);
    written.push({ file: group.file, count, range: `${group.start}-${group.end}` });
  }

  console.log(
    JSON.stringify(
      {
        totalFindings: findings.length,
        fieldLevel: findings.filter((f) => f.num >= 12).length,
        missingStudy: missing.count,
        groups: written,
        productionChanges: 0,
        deChanges: 0,
      },
      null,
      2
    )
  );
}

main();
