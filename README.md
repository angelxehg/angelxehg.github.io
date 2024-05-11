# angelxehg.github.io

My personal portfolio

## Set up

Pre-requisites:
- [NVM](https://github.com/nvm-sh/nvm)

Clone repository:

```shell
git clone git@github.com:angelxehg/angelxehg.github.io.git
cd angelxehg.github.io
```

Install Node 20 with NVM:

```shell
nvm install 20.11.1
nvm use 20.11.1
```

Install dependencies:

```shell
npm install -g gatsby-cli
npm install
```

Start application:

```shell
gatsby develop
```

## Testing and QA

Run linter:

```shell
npm run lint
```

Run formatter:

```shell
npm run format
```

## Deployment

Build site:

```shell
gatsby build
```

(Optional) Serve it in local machine:

```shell
npx serve public
```

Deploy in GitHub pages:

```shell
npm run deploy
```
