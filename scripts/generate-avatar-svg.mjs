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
// hair swept up, thick dark brows, light warm skin, closed-mouth smile, no glasses,
// sage-green collared jacket).
//
// Some of the likeness cannot be expressed here and lives as hand edits in avatar.svg
// instead — see the HAND EDIT comments at the top of that file before regenerating.

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

  // Closest match to the reference: swept up and back off an exposed forehead, with the
  // sideburn kept in front of the ear. `fonze` also draws two greaser spikes at the left
  // temple that the photos do not have; those are removed by hand in avatar.svg.
  hair: ['fonze'],
  // Dark brown, not black. The reference photos were shot with a filter that crushes the
  // hair to near-black (raw pixels sample around #15110e); the real colour is browner, so
  // do not "correct" this back towards the photos.
  hairColor: ['452f22'],
  hairProbability: 100,
  eyebrows: ['up'],
  eyebrowsColor: ['452f22'],

  // Light warm skin with a pink undertone. The reference photos were shot under dim warm
  // light, so their raw pixels (~#c2998a) read far darker and more orange than the actual
  // tone; this is the white-balanced value, not an eyedropper reading.
  baseColor: ['f2c8b0'],
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
