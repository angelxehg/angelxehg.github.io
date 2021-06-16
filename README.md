# angelxehg.github.io

Mi portafolio profesional

## Instalación

Utilice estos comandos para clonar e instalar el sitio:

- Instalar Gatsby CLI: `npm install -g gatsby-cli`

- Clonar el repositorio: `git clone https://github.com/angelxehg/angelxehg.github.io`

- Instalar dependencias: `cd website` & `npm install`

- Iniciar servidor de desarrollo: `gatsby develop`

- Limpiar cache del entorno de desarrollo: `gatsby clean`

## Calidad

Utilice estos comandos para comprobar la calidad del código

- Code linting: `npm run lint`

- Code formating: `npm run format`

## Despliegue

Se requiere establecer la variable de entorno `GATSBY_SEGMENT_WRITE_KEY`, y para esto se deben crear los archivos `.env.development` y `.env.production`:

```env
GATSBY_SEGMENT_WRITE_KEY=[MY_KEY]
```

Use este comando para desplegar en producción:

- GitHub Pages: `npm run deploy`
