// Rasterizes public/images/avatar.svg into the PNG sizes and the favicon. Run with:
//
//   npm run avatar:png
//
// This reads whatever avatar.svg is currently on disk — including manual edits — and never
// regenerates it. That is the whole point of keeping this separate from avatar:svg: you can
// hand-tweak the SVG and re-run this as often as you like without losing your changes.

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import pngToIco from 'png-to-ico';
import sharp from 'sharp';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = join(projectRoot, 'public', 'images');
const svgPath = join(imagesDir, 'avatar.svg');
const faviconPath = join(projectRoot, 'public', 'favicon.ico');

// Raster sizes written to disk. 180 is the apple-touch-icon size; the rest cover avatar
// uploads (GitHub, LinkedIn) which want a large square.
const pngSizes = [64, 128, 180, 256, 512];

// Resolutions packed into favicon.ico. 48 is what Windows taskbar pins use.
const icoSizes = [16, 32, 48];

// librsvg rasterizes at `density` DPI against the SVG's 72dpi intrinsic size. Rendering
// well above the largest output and letting sharp downsample keeps the curved edges clean
// rather than aliased, which matters most at favicon sizes.
const renderDensity = 600;

const toPng = (svg, size) =>
  sharp(svg, { density: renderDensity })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

const report = (path, bytes) =>
  console.log(`  ${relative(projectRoot, path).padEnd(34)} ${String(bytes).padStart(7)} B`);

let svg;
try {
  svg = await readFile(svgPath);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  console.error(`Missing ${relative(projectRoot, svgPath)} — run \`npm run avatar:svg\` first.`);
  process.exit(1);
}

console.log(`Rasterizing ${relative(projectRoot, svgPath)} (${svg.length} B):`);

for (const size of pngSizes) {
  const png = await toPng(svg, size);
  const pngPath = join(imagesDir, `avatar-${size}.png`);
  await writeFile(pngPath, png);
  report(pngPath, png.length);
}

const ico = await pngToIco(await Promise.all(icoSizes.map((size) => toPng(svg, size))));
await writeFile(faviconPath, ico);
report(faviconPath, ico.length);
console.log(`\nfavicon.ico packs ${icoSizes.join('/')} px.`);
