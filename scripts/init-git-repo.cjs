const fs = require('fs');
const path = require('path');
const git = require('isomorphic-git');
const ignore = require('ignore');

const root = path.resolve(__dirname, '..');

function readGitignore(dir) {
  const ig = ignore();
  const gitignorePath = path.join(dir, '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    ig.add(fs.readFileSync(gitignorePath, 'utf8'));
  }
  return ig;
}

function walkFiles(dir, base = dir, ig) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    const rel = path.relative(base, full).split(path.sep).join('/');
    if (ig.ignores(rel) || (entry.isDirectory() && ig.ignores(`${rel}/`))) {
      continue;
    }
    if (entry.isDirectory()) {
      results.push(...walkFiles(full, base, ig));
    } else if (entry.isFile()) {
      results.push(rel);
    }
  }
  return results;
}

async function main() {
  const ig = readGitignore(root);
  const gitDir = path.join(root, '.git');
  if (!fs.existsSync(gitDir)) {
    await git.init({ fs, dir: root, defaultBranch: 'main' });
    console.log('git init: ok');
  }

  const files = walkFiles(root, root, ig);
  const bad = files.filter((f) => f.includes('node_modules') || f.startsWith('DE-LV-App_MAIN/'));
  if (bad.length) {
    throw new Error(`Invalid staged paths: ${bad.slice(0, 5).join(', ')}`);
  }

  for (const filepath of files) {
    await git.add({ fs, dir: root, filepath });
  }
  console.log(`staged files: ${files.length}`);

  const status = await git.statusMatrix({ fs, dir: root });
  const changed = status.filter(([, head, workdir, stage]) => head !== workdir || head !== stage);
  if (!changed.length) {
    console.log('No changes to commit.');
    return;
  }

  const sha = await git.commit({
    fs,
    dir: root,
    message: 'chore: sakārto repozitoriju — plakana saknes struktūra bez DE-LV-App_MAIN apvalka',
    author: { name: 'DE-LV-App', email: 'de-lv-app@local' },
  });
  console.log(`commit: ${sha}`);

  const tree = await git.listFiles({ fs, dir: root, ref: 'HEAD' });
  const wrapper = tree.filter((f) => f.startsWith('DE-LV-App_MAIN/'));
  if (wrapper.length) {
    throw new Error('DE-LV-App_MAIN wrapper paths in commit');
  }
  const nm = tree.filter((f) => f.includes('node_modules'));
  if (nm.length) {
    throw new Error('node_modules in commit');
  }

  console.log('root entries:', [...new Set(tree.map((f) => f.split('/')[0]))].sort().join(', '));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
