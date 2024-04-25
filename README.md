# angelxehg.github.io

My personal portfolio

## Instalación

Utilice estos comandos para clonar e instalar el sitio:

- Instalar NodeJS 20: `nvm install 20.11.1`

- Clonar el repositorio: `git clone https://github.com/angelxehg/angelxehg.github.io`

- Instalar dependencias: `cd website && nvm use && npm install`

- Instalar Gatsby CLI: `npm install -g gatsby-cli`

- Iniciar servidor de desarrollo: `gatsby develop`

- Limpiar cache del entorno de desarrollo: `gatsby clean`

## Calidad

Utilice estos comandos para comprobar la calidad del código

- Code linting: `npm run lint`

- Code formating: `npm run format`

## Try built version

Use this commands to test the final, built version

- Build: `gatsby build`

- Serve: `npx serve public`

## Despliegue

Se requiere establecer las variables de entorno en los archivos `.env.development` y `.env.production`:

```env
DEFAULT_URL=https://staging.angelxehg.com
```

### GitHub Pages

Use este comando para desplegar en producción:

- GitHub Pages: `npm run deploy`

### Netlify

Variables requeridas:

- `URL` (se configura automaticamente al desplegar desde GitHub, para prod)
- `DEPLOY_URL` (se configura automaticamente al desplegar desde GitHub, para Develop previews)
- `NPM_FLAGS=--legacy-peer-deps`
