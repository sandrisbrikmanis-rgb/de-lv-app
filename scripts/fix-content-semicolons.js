const fs = require("fs");
const path = require("path");

const PROSE_FIELD = /"(text|lead|explanation|description|example)":\s*"/;
const PROSE_ARRAY = /"(important|info)":\s*\[/;
const KEYED_FIELD = /"(translation|meaning)":\s*"([^"]*)"/;
const ACCENT_ARRAY_LINE = /^\s+"[^"]*;[^"]*",?\s*$/;

function replaceListSemicolons(value) {
  return value.replace(/; /g, " • ");
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);
  const state = {
    inSectionAccents: false,
    sectionAccentsDepth: 0,
    inProseArray: false,
    proseArrayDepth: 0,
    changes: 0
  };

  const updated = lines.map((line) => {
    if (state.inSectionAccents) {
      state.sectionAccentsDepth += (line.match(/\{/g) || []).length;
      state.sectionAccentsDepth -= (line.match(/\}/g) || []).length;
      if (state.sectionAccentsDepth <= 0) {
        state.inSectionAccents = false;
        state.sectionAccentsDepth = 0;
      }
    } else if (/"((sectionAccents)|(accents))":\s*\{/.test(line)) {
      state.inSectionAccents = true;
      state.sectionAccentsDepth =
        (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      if (state.sectionAccentsDepth <= 0) {
        state.sectionAccentsDepth = 1;
      }
    }

    if (PROSE_FIELD.test(line)) {
      return line;
    }

    if (PROSE_ARRAY.test(line)) {
      state.inProseArray = true;
      state.proseArrayDepth = 1;
      return line;
    }

    if (state.inProseArray) {
      state.proseArrayDepth += (line.match(/\[/g) || []).length;
      state.proseArrayDepth -= (line.match(/\]/g) || []).length;
      if (state.proseArrayDepth <= 0) {
        state.inProseArray = false;
        state.proseArrayDepth = 0;
      }
      return line;
    }

    let newLine = line;

    if (line.includes(";") && KEYED_FIELD.test(line)) {
      newLine = line.replace(KEYED_FIELD, (match, key, value) => {
        if (!value.includes(";")) {
          return match;
        }
        return `"${key}": "${replaceListSemicolons(value)}"`;
      });
    }

    if (
      newLine === line &&
      state.inSectionAccents &&
      ACCENT_ARRAY_LINE.test(line)
    ) {
      newLine = replaceListSemicolons(line);
    }

    if (newLine !== line) {
      state.changes += 1;
    }

    return newLine;
  });

  if (state.changes > 0) {
    fs.writeFileSync(filePath, updated.join("\n"), "utf8");
  }

  return state.changes;
}

const root = path.resolve(__dirname, "..");
const targets = process.argv.slice(2);

if (!targets.length) {
  console.error("Usage: node scripts/fix-content-semicolons.js <file> [file...]");
  process.exit(1);
}

let total = 0;
for (const target of targets) {
  const filePath = path.isAbsolute(target) ? target : path.join(root, target);
  const changes = processFile(filePath);
  total += changes;
  console.log(`${path.relative(root, filePath)}: ${changes} line(s) updated`);
}

console.log(`Total: ${total} line(s) updated`);
