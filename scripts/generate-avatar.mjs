// Generates the profile picture and favicon from a single Dicebear config.
//
// Dicebear does not derive avatars from photographs — it renders deterministically from
// an option set. The options below were hand-matched to Angel's reference selfies (short
// near-black hair swept up, thick dark brows, light-tan skin, closed-mouth smile, no
// glasses, sage-green collared jacket), so THIS FILE is the source of truth for the
// likeness. Tweak `avatarOptions`, re-run `npm run avatar`, commit the regenerated files.

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createAvatar } from '@dicebear/core';
import * as micah from '@dicebear/micah';
import pngToIco from 'png-to-ico';
import sharp from 'sharp';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = join(projectRoot, 'public', 'images');
const faviconPath = join(projectRoot, 'public', 'favicon.ico');

// Every value here is a real enum member of the @dicebear/micah@9 schema. Note that the
// component options are typed as ARRAYS, not scalars — Dicebear picks one entry per seed.
// Passing a bare string (`hair: 'full'`) does not throw, it silently drops the component
// and you get a blank face, so keep the brackets. A single entry pins the choice.
const avatarOptions = {
  seed: 'angelxehg',

  hair: ['fonze'], // short, swept up and back with volume on top
  hairColor: ['2c1b18'], // near-black
  hairProbability: 100,
  eyebrows: ['up'],
  eyebrowsColor: ['2c1b18'],

  baseColor: ['e0a17a'], // light-tan skin
  eyes: ['eyes'], // open, not the closed happy arcs of `smiling`
  mouth: ['smirk'], // closed-mouth smile, as in the photos
  nose: ['curve'],
  ears: ['attached'],

  shirt: ['collared'],
  shirtColor: ['a3ad9b'], // the sage-green zip jacket

  // Clean-shaven and no accessories, by request.
  facialHairProbability: 0,
  glassesProbability: 0,
  earringsProbability: 0,

  backgroundColor: ['e5e7eb'],
  // `radius` is a core-wide option, not a micah one — micah has no `style: 'circle'`
  // the way avataaars does. 50 is the max and yields a full circle.
  radius: 50,
};

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
  sharp(Buffer.from(svg), { density: renderDensity })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

const report = (path, bytes) =>
  console.log(`  ${relative(projectRoot, path).padEnd(34)} ${String(bytes).padStart(7)} B`);

const svg = createAvatar(micah, avatarOptions).toString();

await mkdir(imagesDir, { recursive: true });

const svgPath = join(imagesDir, 'avatar.svg');
await writeFile(svgPath, svg);
console.log('Generated:');
report(svgPath, Buffer.byteLength(svg));

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
