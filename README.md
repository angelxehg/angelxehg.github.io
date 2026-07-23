# angelxehg.github.io

My personal portfolio

## Setup

### Pre-requisites

Required:
- [Volta](https://volta.sh) (recommended) or NodeJS 24

### Local development

Clone repository:

```shell
git clone git@github.com:angelxehg/angelxehg.github.io.git
cd angelxehg.github.io
```

Install Volta (once, if not installed):

```shell
curl https://get.volta.sh | bash
```

If you install Volta with Homebrew instead, it does **not** touch your shell
profile, so you must also run:

```shell
volta setup # adds VOLTA_HOME and ~/.volta/bin to your shell profile
exec zsh
```

Volta works by putting shims on your `PATH`: running `node` looks up the
`volta.node` pin in the nearest `package.json` and executes that version. So
once `~/.volta/bin` is on `PATH`, the right Node is used inside this repo with
nothing else to run. Verify with:

```shell
which node     # ~/.volta/bin/node
node --version # v24.18.0
```

If `which node` points at `~/.nvm/...` or another directory, something earlier
in `PATH` is shadowing the shims — remove it, or prefix commands with
`volta run` as a workaround.

Install dependencies:

```shell
npm install
```

Start development server:

```bash
npm run dev
```

### Production deployment

To run a production, static:

```shell
npm run build
```

Locally preview production build:

```shell
npm run preview
```

Analyze build size:

```shell
npx nuxt analyze
```

To generate a full static build:

```shell
npm run generate
```
