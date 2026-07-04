const fs = require('fs');
const path = require('path');
const git = require('isomorphic-git');
const baseHttp = require('./http-long-timeout.cjs');

const http = baseHttp;

const root = path.resolve(__dirname, '..');
const remoteUrl = process.env.GITHUB_REMOTE_URL || process.argv[2];
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.argv[3];

if (!remoteUrl) {
  console.error('Trūkst attālā URL. Izmantojiet:');
  console.error('  $env:GITHUB_REMOTE_URL="https://github.com/<user>/DE-LV-App.git"');
  console.error('  $env:GITHUB_TOKEN="<PAT>"');
  console.error('  node scripts/push-force-github.cjs');
  process.exit(1);
}

if (!token) {
  console.error('Trūkst GITHUB_TOKEN vai GH_TOKEN.');
  process.exit(1);
}

async function main() {
  const remotes = await git.listRemotes({ fs, dir: root });
  if (!remotes.some((r) => r.remote === 'origin')) {
    await git.addRemote({ fs, dir: root, remote: 'origin', url: remoteUrl });
  } else {
    await git.setConfig({
      fs,
      dir: root,
      path: 'remote.origin.url',
      value: remoteUrl,
    });
  }

  console.log(`Force push uz ${remoteUrl} ...`);
  const result = await git.push({
    fs,
    http,
    dir: root,
    remote: 'origin',
    ref: 'main',
    force: true,
    onAuth: () => ({
      username: 'x-access-token',
      password: token,
    }),
  });

  console.log('Push rezultāts:', result);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
