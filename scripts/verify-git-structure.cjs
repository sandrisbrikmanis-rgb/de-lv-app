const fs = require('fs');
const path = require('path');
const git = require('isomorphic-git');

const root = path.resolve(__dirname, '..');

async function main() {
  const tree = await git.listFiles({ fs, dir: root, ref: 'HEAD' });
  const roots = [...new Set(tree.map((f) => f.split('/')[0]))].sort();
  const required = ['android', 'docs', 'index.html', 'ios', 'ui.js', 'www'];
  const missing = required.filter((r) => !roots.includes(r));
  const wrapper = tree.filter((f) => f.startsWith('DE-LV-App_MAIN/'));
  const nm = tree.filter((f) => f.includes('node_modules'));

  console.log('HEAD failu skaits:', tree.length);
  console.log('Saknes ieraksti:', roots.join(', '));
  console.log('Trūkst:', missing.length ? missing.join(', ') : '(nav)');
  console.log('DE-LV-App_MAIN/ ceļi:', wrapper.length);
  console.log('node_modules ceļi:', nm.length);

  if (missing.length || wrapper.length || nm.length) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
