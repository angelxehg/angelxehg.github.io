# angelxehg.github.io

Mi portafolio profesional

## Instalación

Utilice estos comandos para clonar e instalar el sitio:

- Instalar NodeJS 18: `nvm install 18.18.2`

- Instalar Gatsby CLI: `npm install -g gatsby-cli`

- Clonar el repositorio: `git clone https://github.com/angelxehg/angelxehg.github.io`

- Instalar dependencias: `cd website` & `npm install --legacy-peer-deps`

- Iniciar servidor de desarrollo: `gatsby develop`

- Limpiar cache del entorno de desarrollo: `gatsby clean`

## Calidad

Utilice estos comandos para comprobar la calidad del código

- Code linting: `npm run lint`

- Code formating: `npm run format`

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
