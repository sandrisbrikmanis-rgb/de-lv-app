const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const iconsDir = path.join(root, 'icons');
const manifestPath = path.join(root, 'manifest.json');

const targets = [
  { size: 192, dest: 'icon-192.png' },
  { size: 512, dest: 'icon-512.png' },
];

const sourceCandidates = (size) => [
  path.join(iconsDir, `icon-${size}.webp`),
  path.join(iconsDir, `icon-${size}x${size}.webp`),
  path.join(iconsDir, `icon-${size}.png`),
  path.join(iconsDir, `icon-${size}x${size}.png`),
  path.join(iconsDir, `android-chrome-${size}x${size}.png`),
];

async function ensurePngIcon(size, destName) {
  const destPath = path.join(iconsDir, destName);

  if (fs.existsSync(destPath)) {
    console.log(`Already present: ${destName}`);
    return;
  }

  const sourcePath = sourceCandidates(size).find((candidate) => fs.existsSync(candidate));
  if (!sourcePath) {
    throw new Error(
      `Missing PWA icon source for ${size}x${size}. Expected one of: ${sourceCandidates(size).join(', ')}`
    );
  }

  await sharp(sourcePath).png().toFile(destPath);
  console.log(`Created ${destName} from ${path.basename(sourcePath)}`);
}

async function main() {
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  for (const target of targets) {
    await ensurePngIcon(target.size, target.dest);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  manifest.icons = [
    {
      src: 'icons/icon-192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: 'icons/icon-512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
  ];

  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log('Updated manifest.json icons entries');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
