// Renders public/images/og.image.png, the Open Graph card linked from Base.astro. Run:
//
//   npm run og
//
// The design mirrors the dark theme of the index page: the same status-bar-over-card
// layout, the same Tailwind palette, and the avatar produced by `npm run avatar:svg`.
// Run `npm run avatar:png` first if the avatar has changed — this composites the PNG.

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = join(projectRoot, 'public', 'images');
const avatarPath = join(imagesDir, 'avatar-256.png');
const outputPath = join(imagesDir, 'og.image.png');

// 1200x630 is the Open Graph standard; anything else gets recropped by the scrapers.
const width = 1200;
const height = 630;

// Lifted from the Tailwind classes ProfileCard.vue actually uses, so the card reads as the
// same surface as the site in dark mode.
const color = {
  page: '#000000', // body bg-black
  card: '#030712', // dark:bg-gray-950
  border: '#1f2937', // dark:border-gray-800
  heading: '#ffffff', // dark:text-white
  muted: '#9ca3af', // dark:text-gray-400
  accent: '#34d399', // dark:text-emerald-400
  dot: '#10b981', // bg-emerald-500
  separator: '#4b5563', // dark:text-gray-600, the "·" between status fields
};

// librsvg collapses leading/trailing whitespace inside <tspan> — and it swallows &#160;
// too — so gaps between differently-coloured runs are set with an explicit `dx` offset.

// Menlo/Monaco cover macOS, DejaVu Sans Mono covers most Linux CI images; the generic
// `monospace` is the last resort. The site itself is set in font-mono, so this matches.
const mono = "Menlo, Monaco, 'DejaVu Sans Mono', 'Liberation Mono', monospace";

const avatarSize = 200;
const avatarX = 110;
const avatarY = 300;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" fill="${color.page}"/>
  <rect x="60" y="60" width="1080" height="510" rx="24"
        fill="${color.card}" stroke="${color.border}" stroke-width="2"/>

  <circle cx="106" cy="121" r="7" fill="${color.dot}"/>
  <text x="128" y="129" font-family="${mono}" font-size="22" fill="${color.muted}">angelxehg.com</text>
  <text x="1100" y="129" font-family="${mono}" font-size="22" text-anchor="end">
    <tspan fill="${color.accent}" font-weight="bold">operational</tspan><tspan dx="11" fill="${color.separator}">·</tspan><tspan dx="11" fill="${color.muted}">mx-central-1</tspan>
  </text>
  <line x1="60" y1="163" x2="1140" y2="163" stroke="${color.border}" stroke-width="2"/>

  <text x="${avatarX + avatarSize + 56}" y="390" font-family="${mono}" font-size="68"
        font-weight="bold" fill="${color.heading}">Angel Hurtado</text>
  <text x="${avatarX + avatarSize + 56}" y="446" font-family="${mono}" font-size="27">
    <tspan fill="${color.accent}">$</tspan><tspan dx="14" fill="${color.muted}">Backend Developer</tspan>
  </text>
  <text x="${avatarX + avatarSize + 56}" y="492" font-family="${mono}" font-size="27"
        fill="${color.muted}">Python · APIs · Cloud</text>
</svg>`;

let avatar;
try {
  avatar = await readFile(avatarPath);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  console.error(`Missing ${relative(projectRoot, avatarPath)} — run \`npm run avatar:png\` first.`);
  process.exit(1);
}

const png = await sharp(Buffer.from(svg))
  .composite([
    {
      input: await sharp(avatar).resize(avatarSize, avatarSize).toBuffer(),
      top: avatarY,
      left: avatarX,
    },
  ])
  .png()
  .toBuffer();

await writeFile(outputPath, png);
console.log(`Wrote ${relative(projectRoot, outputPath)} (${png.length} B, ${width}x${height})`);
