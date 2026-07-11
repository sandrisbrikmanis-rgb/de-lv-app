const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const fixes = [
  { old: "kino", de: "Kino", article: "das", plural: "die Kinos", lv: "kinoteātris", id: "a2-kino" },
  { old: "aschenputtel", de: "Aschenputtel", article: "das", plural: null, lv: "pelnrušķīte", id: "a2-aschenputtel" },
  { old: "gott", de: "Gott", article: "der", plural: "die Götter", lv: "dievs", id: "a2-gott" },
  { old: "keller", de: "Keller", article: "der", plural: "die Keller", lv: "pagrabs", id: "a2-keller" },
  { old: "kellner", de: "Kellner", article: "der", plural: "die Kellner", lv: "viesmīlis", id: "a2-kellner", fem: "Kellnerin" },
  { old: "kerl", de: "Kerl", article: "der", plural: "die Kerle", lv: "puisis", id: "a2-kerl" },
  { old: "kerze", de: "Kerze", article: "die", plural: "die Kerzen", lv: "svece", id: "a2-kerze" },
  { old: "keyboard", de: "Keyboard", article: "das", plural: "die Keyboards", lv: "tastatūra", id: "a2-keyboard" },
  { old: "kinderfunk", de: "Kinderfunk", article: "der", plural: null, lv: "raidījums bērniem", id: "a2-kinderfunk" },
  { old: "kinderwagen", de: "Kinderwagen", article: "der", plural: "die Kinderwagen", lv: "bērnu ratiņi", id: "a2-kinderwagen" },
  { old: "kindheit", de: "Kindheit", article: "die", plural: "die Kindheiten", lv: "bērnība", id: "a2-kindheit" },
  { old: "kiosk", de: "Kiosk", article: "der", plural: "die Kioske", lv: "kiosks", id: "a2-kiosk" },
  { old: "kissen", de: "Kissen", article: "das", plural: "die Kissen", lv: "spilvens", id: "a2-kissen" },
  { old: "kissenbezug", de: "Kissenbezug", article: "der", plural: "die Kissenbezüge", lv: "spilvendrāna", id: "a2-kissenbezug" },
  { old: "kiste", de: "Kiste", article: "die", plural: "die Kisten", lv: "kaste", id: "a2-kiste" },
  { old: "zwillinge", de: "Zwilling", article: "der", plural: "die Zwillinge", lv: "dvīņi", id: "a2-zwilling" },
];

function buildBlock(fix) {
  const variants = [{ article: fix.article, de: fix.de, ...(fix.plural ? { plural: fix.plural } : {}) }];
  if (fix.fem) variants.push({ article: "die", de: fix.fem });

  const lines = [
    "  {",
    `    "de": "${fix.de}",`,
    `    "de_article": "${fix.article}",`,
  ];
  if (fix.plural) lines.push(`    "de_plural": "${fix.plural}",`);
  lines.push(
    `    "lv": "${fix.lv}",`,
    '    "level": "A2",',
    "    \"study\": {",
    `      "id": "${fix.id}",`,
    '      "layout": "minimalStudy",',
    `      "translation": "${fix.lv}",`,
    '      "accent": "blue",',
    '      "variants": ['
  );

  variants.forEach((variant, index) => {
    lines.push("        {");
    lines.push(`          "article": "${variant.article}",`);
    lines.push(`          "de": "${variant.de}"${variant.plural ? `,\n          "plural": "${variant.plural}"` : ""}`);
    lines.push(`        }${index < variants.length - 1 ? "," : ""}`);
  });

  lines.push("      ]", "    }", "  }");
  return lines.join("\n");
}

for (const rel of ["data/a2.js", "www/data/a2.js"]) {
  const filePath = path.join(root, rel);
  let text = fs.readFileSync(filePath, "utf8");
  let count = 0;

  for (const fix of fixes) {
    const escapedOld = fix.old.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const escapedLv = fix.lv.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(
      `  \\{\\s*\\n    "de": "${escapedOld}",\\s*\\n    "lv": "${escapedLv}",\\s*\\n    "level": "A2"\\s*\\n  \\}`,
      "g"
    );
    const block = buildBlock(fix);
    const next = text.replace(re, block);
    if (next !== text) {
      count += 1;
      text = next;
    }
  }

  fs.writeFileSync(filePath, text, "utf8");
  console.log(`${rel}: replaced ${count} entries`);
}
