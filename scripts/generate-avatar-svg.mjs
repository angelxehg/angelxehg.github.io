// Renders public/images/avatar.svg from the Dicebear config below. Run with:
//
//   npm run avatar:svg
//
// HEADS UP: this overwrites avatar.svg. The SVG is meant to be hand-tweaked after
// generation, so only re-run this when you want to start over from the config — then
// re-apply your edits and run `npm run avatar:png` to refresh the raster assets.
//
// Dicebear does not derive avatars from photographs; it renders deterministically from an
// option set. The options were hand-matched to Angel's reference selfies (short near-black
// hair swept up, thick dark brows, light-tan skin, closed-mouth smile, no glasses,
// sage-green collared jacket).

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createAvatar } from '@dicebear/core';
import * as micah from '@dicebear/micah';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const svgPath = join(projectRoot, 'public', 'images', 'avatar.svg');

// Every value here is a real enum member of the @dicebear/micah@9 schema. Note that the
// component options are typed as ARRAYS, not scalars — Dicebear picks one entry per seed.
// Passing a bare string (`hair: 'fonze'`) does not throw, it silently drops the component
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
  // `radius` is a core-wide option, not a micah one — micah has no `style: 'circle'` the
  // way avataaars does. 50 is the max and yields a full circle.
  radius: 50,
};

const svg = createAvatar(micah, avatarOptions).toString();

await mkdir(dirname(svgPath), { recursive: true });
await writeFile(svgPath, svg);

console.log(`Wrote ${relative(projectRoot, svgPath)} (${Buffer.byteLength(svg)} B)`);
console.log('Next: npm run avatar:png');
