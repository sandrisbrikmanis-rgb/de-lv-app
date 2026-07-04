const https = require('https');
const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('GITHUB_TOKEN nav iestatīts');
  process.exit(1);
}

function apiGet(path) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.github.com',
        path,
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Agent': 'DE-LV-App-setup',
          Accept: 'application/vnd.github+json',
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            reject(new Error(`GitHub API ${res.statusCode}: ${data}`));
            return;
          }
          resolve(JSON.parse(data));
        });
      }
    );
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  const user = await apiGet('/user');
  const repos = await apiGet('/user/repos?per_page=100&affiliation=owner');
  const names = ['DE-LV-App', 'DE-LV-App_MAIN', 'de-lv-app', 'DE-LV-App_MAIN'];
  const match =
    repos.find((r) => names.some((n) => r.name.toLowerCase() === n.toLowerCase())) ||
    repos.find((r) => /de-lv/i.test(r.name));

  if (!match) {
    console.error('Repozitorijs nav atrasts. Pieejamie:');
    repos.forEach((r) => console.error(` - ${r.full_name}`));
    process.exit(1);
  }

  console.log(match.clone_url);
  console.error(`Atrasts: ${match.full_name}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
