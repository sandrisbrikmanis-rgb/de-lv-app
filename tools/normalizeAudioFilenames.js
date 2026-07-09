#!/usr/bin/env node
// tools/normalizeAudioFilenames.js
// Pārdēvē visus public/audio/*.mp3 failus uz mazajiem burtiem (git-droši).
// Palaist: node tools/normalizeAudioFilenames.js [--dry-run]

const { execSync, spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const AUDIO_DIR = path.join(ROOT, "public", "audio");
const DRY_RUN = process.argv.includes("--dry-run");

function gitLsAudioFiles() {
  const output = execSync('git ls-files -z "public/audio/*.mp3"', {
    cwd: ROOT,
    encoding: "buffer",
  });
  return output
    .toString("utf8")
    .split("\0")
    .filter(Boolean);
}

function gitMv(from, to) {
  const result = spawnSync("git", ["mv", from, to], {
    cwd: ROOT,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `git mv failed: ${from} -> ${to}`);
  }
}

function renameCaseOnly(fromRel, toRel) {
  if (DRY_RUN) return;

  if (fromRel.toLowerCase() === toRel.toLowerCase() && fromRel !== toRel) {
    const tempRel = `${path.posix.dirname(toRel)}/__normalize_tmp_${process.pid}_${path.basename(toRel)}`;
    gitMv(fromRel, tempRel);
    gitMv(tempRel, toRel);
    return;
  }

  gitMv(fromRel, toRel);
}

function main() {
  if (!fs.existsSync(AUDIO_DIR)) {
    console.error("Nav atrasta mape public/audio/");
    process.exit(1);
  }

  const tracked = gitLsAudioFiles();
  const renames = [];

  for (const file of tracked) {
    const dir = path.posix.dirname(file.replace(/\\/g, "/"));
    const base = path.basename(file);
    const lowerBase = base.toLowerCase();
    if (base !== lowerBase) {
      renames.push({
        from: file.replace(/\\/g, "/"),
        to: `${dir}/${lowerBase}`,
      });
    }
  }

  const collisions = renames.filter(({ to }) => {
    const base = path.basename(to);
    return tracked.some((file) => path.basename(file) === base && file.replace(/\\/g, "/") !== to);
  });

  if (collisions.length) {
    console.error("Nevar pārdēvēt — konflikti ar esošiem failiem:");
    for (const item of collisions.slice(0, 20)) {
      console.error(`  ${item.from} -> ${item.to}`);
    }
    process.exit(1);
  }

  const untracked = fs
    .readdirSync(AUDIO_DIR)
    .filter((name) => name.endsWith(".mp3") && name !== name.toLowerCase());

  console.log(`Git ieraksti pārdēvēšanai: ${renames.length}`);
  console.log(`Neizsekoti faili ar lielajiem burtiem: ${untracked.length}`);
  console.log(`Režīms: ${DRY_RUN ? "dry-run" : "pārdēvēšana"}\n`);

  let renamed = 0;
  for (const { from, to } of renames) {
    process.stdout.write(`${from} -> ${to} … `);
    try {
      renameCaseOnly(from, to);
      renamed++;
      console.log("OK");
    } catch (error) {
      console.log(`KĻŪDA: ${error.message || error}`);
      process.exitCode = 1;
      break;
    }
  }

  for (const name of untracked) {
    const fromAbs = path.join(AUDIO_DIR, name);
    const toAbs = path.join(AUDIO_DIR, name.toLowerCase());
    process.stdout.write(`${name} -> ${path.basename(toAbs)} … `);
    if (DRY_RUN) {
      console.log("OK (dry-run)");
      continue;
    }
    try {
      if (fs.existsSync(toAbs) && fromAbs.toLowerCase() === toAbs.toLowerCase()) {
        fs.unlinkSync(fromAbs);
      } else {
        fs.renameSync(fromAbs, toAbs);
      }
      renamed++;
      console.log("OK");
    } catch (error) {
      console.log(`KĻŪDA: ${error.message || error}`);
      process.exitCode = 1;
    }
  }

  const remaining = gitLsAudioFiles().filter((file) => {
    const base = path.basename(file);
    return base !== base.toLowerCase();
  });

  console.log(`\nPabeigts. Pārdēvēti: ${renamed}`);
  console.log(`Atlikuši git ieraksti ar lielajiem burtiem: ${remaining.length}`);
  if (remaining.length) {
    process.exitCode = 1;
  }
}

main();
