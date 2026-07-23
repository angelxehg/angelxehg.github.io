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

Volta reads the pin in `package.json` and switches to the right Node version
automatically when you `cd` into the repo, so there is nothing else to run.
Verify with:

```shell
node --version # v24.18.0
```

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
