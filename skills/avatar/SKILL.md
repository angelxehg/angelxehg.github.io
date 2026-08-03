---
name: avatar
description: Change the profile picture, favicon, or Open Graph share image for angelxehg.com. Use this whenever a request touches the avatar, profile pic, headshot, favicon, favicon.ico, og:image, share preview, or any file matching public/images/avatar* — including small tweaks like "give me different hair", "change the avatar background colour", "the favicon looks blurry", or "update the link preview image". Reach for it even when the request sounds like a one-line edit, because the three generator scripts have a strict run order and a hand-edited SVG is easy to destroy by running the wrong one.
---

# Avatar, favicon, and OG image

The site's face is a [Dicebear](https://www.dicebear.com/) avatar. Everything visual —
the header portrait, the browser tab icon, the social share card — derives from one file:

```
public/images/avatar.svg
```

Understand that file's role before changing anything: it is both a **build artifact** (of
`npm run avatar:svg`) and a **hand-editable source** (committed, and edited by hand when
the generator can't express what's wanted). That dual nature is the only genuinely tricky
thing here, and it's why the scripts are split the way they are.

## Two ways to change the avatar — both are fine

**You do not have to use the generator.** Pick whichever fits the request:

| | Use when | Trade-off |
|---|---|---|
| **Edit the config** (`npm run avatar:svg`) | The change maps onto a Dicebear option — a different hairstyle, skin tone, shirt colour, adding glasses | Reproducible from the config, but limited to what the micah style offers |
| **Edit `avatar.svg` by hand** | Dicebear has no option for it — nudging a path, recolouring one shape, tweaking geometry, adding something custom | Full control, but the config no longer describes reality |

Hand-editing is a legitimate, expected path, not a hack. `avatar.svg` is committed
precisely so manual edits survive. If a request can't be satisfied by an option in
`avatarOptions`, open the SVG and edit it directly rather than contorting the config or
telling the user it's impossible.

The one rule: **`npm run avatar:svg` overwrites `avatar.svg` and destroys hand edits.**
There is deliberately no combined `npm run avatar` script for this reason. After a manual
edit, only run `avatar:png` and `og`.

If you must regenerate a hand-edited SVG (say, to change a config option *and* keep the
edits), diff first so you know what you're about to lose:

```bash
cp public/images/avatar.svg /tmp/avatar-before.svg
npm run avatar:svg
diff /tmp/avatar-before.svg public/images/avatar.svg
```

Then re-apply the manual edits on top, or fold them into the config if they can be
expressed there.

## The three commands, and why the order matters

Each step consumes the previous step's output, so running them out of order silently
produces stale assets rather than an error.

```bash
npm run avatar:svg   # avatarOptions          -> public/images/avatar.svg
npm run avatar:png   # avatar.svg             -> avatar-{64,128,180,256,512}.png + favicon.ico
npm run og           # avatar-256.png + text  -> public/images/og.image.png
```

After **any** change to `avatar.svg`, whether generated or hand-written:

```bash
npm run avatar:png && npm run og
```

Skipping `og` is the most common mistake — the share card composites `avatar-256.png`, so
it keeps showing the old face until you rerun it. The script can't detect a *stale* PNG,
only a missing one, so nothing will warn you.

## Where each asset is consumed

Knowing this tells you what a given change will actually affect:

- `avatar.svg` — the header portrait in `src/components/ProfileCard.vue` (56 px, beside the
  name). The SVG is used rather than a PNG because it stays crisp at any size and is
  smaller than the 128 px raster.
- `favicon.ico` — referenced by `src/layouts/Base.astro`. Overwriting `public/favicon.ico`
  is enough to change the tab icon; no markup edit is needed.
- `og.image.png` — referenced as `og:image` by `Base.astro`. Same deal: regenerate in place.
- The other `avatar-*.png` sizes are committed but unreferenced by the site. They exist for
  external profiles (GitHub, LinkedIn). `180` is the apple-touch-icon size, kept for when
  someone wants to add that link.

## Editing the config

`scripts/generate-avatar-svg.mjs` holds `avatarOptions`. Two things about it are worth
knowing before you touch it, because both fail quietly rather than loudly:

**Component options are arrays, not strings.** `hair: 'fonze'` does not throw — Dicebear
silently drops the component and you get a blank face. It must be `hair: ['fonze']`. This
applies to every component selector (`hair`, `eyes`, `mouth`, `nose`, `ears`, `eyebrows`,
`shirt`) and every colour. A single-element array pins the choice instead of letting the
seed pick from the list.

**`radius` is a core option, not a micah one.** The circular crop comes from
`radius: 50`. The micah style has no `style: 'circle'` — that belongs to avataaars, and
passing it does nothing.

To find valid values for an option, read the style's own schema rather than guessing:

```bash
curl -sL https://unpkg.com/@dicebear/micah@9.4.3/lib/schema.js -o /tmp/micah.mjs
node --input-type=module -e "
const m = await import('/tmp/micah.mjs'); const p = (m.schema||m.default).properties;
for (const k of Object.keys(p)) console.log(k, '=>', JSON.stringify(p[k].items?.enum || p[k].enum || p[k].type));
"
```

Switching to a different Dicebear style means installing that style package — but note
`@dicebear/core` must stay on **v9**. Every style package declares
`peerDependencies: { "@dicebear/core": "^9.0.0" }`, while core's latest release is v10.

## Editing the OG image

`scripts/generate-og-image.mjs` builds a 1200×630 SVG (the Open Graph standard size;
other sizes get recropped by scrapers) and composites the avatar onto it. Its palette is
copied from the Tailwind classes `ProfileCard.vue` actually uses, so if the site's colours
change, update the `color` object to match.

One non-obvious constraint: **librsvg collapses whitespace inside `<tspan>`, and swallows
`&#160;` too.** A space between two differently-coloured runs will vanish — `$ Backend`
renders as `$Backend`. Use an explicit `dx` offset instead:

```
<tspan fill="#34d399">$</tspan><tspan dx="14" fill="#9ca3af">Backend Developer</tspan>
```

Text is rendered with a `Menlo, Monaco, 'DejaVu Sans Mono', monospace` stack to match the
site's `font-mono` while still resolving on Linux CI.

## Verify before declaring done

These generate images, so looking at the output is the verification — read the PNG back
rather than trusting the script's success message.

```bash
npm run build                                    # must still succeed
sips -g pixelWidth -g pixelHeight public/images/avatar-512.png
```

Worth actually checking:

- **Read `avatar-512.png` and `og.image.png` back** and look at them. A malformed SVG can
  still rasterize into something plausible-sized but visually broken.
- **Check the favicon at real size.** A portrait that reads fine at 512 px can turn to mush
  at 16. Downscale to 32 and upscale with nearest-neighbour to inspect it honestly.
- **Both colour schemes.** The avatar sits on a white card in light mode and a near-black
  one in dark mode; a background colour that works on one can disappear on the other.
- **The `.ico` really is multi-resolution** — `file` truncates its output, so parse the
  directory instead:

```bash
node -e "const b=require('fs').readFileSync('public/favicon.ico');const n=b.readUInt16LE(4);
console.log(n+' icons: '+Array.from({length:n},(_,i)=>(b[6+i*16]||256)+'x'+(b[6+i*16+1]||256)).join(', '))"
```

## Reference photos

The likeness was matched by hand from photos that are deliberately **not** in the repo and
must never be committed. If they reappear locally, leave them untracked. `avatarOptions` is
the durable record of the likeness — treat the config as the source of truth, not the photos.
