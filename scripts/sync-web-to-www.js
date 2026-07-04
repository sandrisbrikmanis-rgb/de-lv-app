// Publishes the web app into www/ for Capacitor (iOS/Android) builds.
// Cross-platform replacement for sync-web-to-www.ps1, which only runs on
// Windows/PowerShell and silently fails (or is skipped) on Linux/macOS CI
// and cloud agent environments — one of the reasons past changes never made
// it into a rebuilt app/site.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');

const rootFiles = [
  'index.html',
  'manifest.json',
  'ui.js',
  'style.css',
  'groups.js',
  'storage.js',
];

const rootDirs = ['data', 'icons'];

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`Copied ${path.relative(root, src)} -> ${path.relative(root, dest)}`);
}

function copyDir(srcDir, destDir) {
  fs.rmSync(destDir, { recursive: true, force: true });
  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  console.log(`Synced ${path.relative(root, srcDir)}/ -> ${path.relative(root, destDir)}/`);
}

function main() {
  if (!fs.existsSync(www)) {
    fs.mkdirSync(www, { recursive: true });
  }

  for (const file of rootFiles) {
    copyFile(path.join(root, file), path.join(www, file));
  }

  for (const dir of rootDirs) {
    copyDir(path.join(root, dir), path.join(www, dir));
  }

  console.log('\nweb assets synced to www/');
}

main();
