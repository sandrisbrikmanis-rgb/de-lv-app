// Publishes the web app into docs/ so GitHub Pages (configured to serve
// main:/docs) can serve it. Does not touch docs/privacy.html, docs/privacy.css
// or docs/.nojekyll, which already live in docs/ and are managed separately.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const docs = path.join(root, 'docs');

const rootFiles = [
  'index.html',
  'manifest.json',
  'style.css',
  'ui.js',
  'groups.js',
  'storage.js',
  'wordRain.js',
];

const rootDirs = ['data', 'icons'];

// Stray local backup file, not referenced by index.html — never publish it.
const excludeNames = new Set(['sentences.js.grammar-backup']);

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`Copied ${path.relative(root, src)} -> ${path.relative(root, dest)}`);
}

function copyDir(srcDir, destDir) {
  fs.rmSync(destDir, { recursive: true, force: true });
  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (excludeNames.has(entry.name)) continue;

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
  if (!fs.existsSync(docs)) {
    fs.mkdirSync(docs, { recursive: true });
  }

  for (const file of rootFiles) {
    copyFile(path.join(root, file), path.join(docs, file));
  }

  for (const dir of rootDirs) {
    copyDir(path.join(root, dir), path.join(docs, dir));
  }

  console.log('\ndocs/ now mirrors the published web app for GitHub Pages.');
}

main();
