---
title: Automatización de pruebas en Angular con GitHub Actions
description: Cómo ejecutar las pruebas unitarias y e2e de un proyecto Angular en cada push, sin interfaz gráfica, usando Puppeteer y un workflow de GitHub Actions.
date: 2021-06-11
tags: [angular, github-actions, testing]
image: /images/posts/2021-06-11-pruebas-angular-github-actions/cover.png
lang: es
---

Conforme un producto de software crece, también suele incrementar el número de pruebas unitarias que se deben ejecutar. Existen varias soluciones para automatizar la ejecución de pruebas y una de ellas es GitHub Actions. A continuación explicaré como configurarlo en un proyecto de Angular.

## Creando un nuevo proyecto

Primero crearemos un proyecto Angular en blanco. Es necesario instalar la ultima versión de Angular CLI, la cual podemos instalar o actualizar con el siguiente comando.

```bash
npm i @angular/cli -g # Instalación global
```

Ahora podemos crear nuestro proyecto con el siguiente comando

```bash
ng new ghactions-angular # Cambia ghactions... por el nombre de tu proyecto
```

Escoge las opciones de Angular Router y de formato de hojas de estilo que más te convengan. En mi caso si utilizaré Angular Router y SCSS como formato de hojas de estilo. La instalación de paquetes podrá demorar varios minutos. Obtendremos un resultado como este:

[![Salida de ng new en la terminal](/images/posts/2021-06-11-pruebas-angular-github-actions/ng-new.svg)](https://asciinema.org/a/419651)

No olvides subir tu nuevo proyecto a un repositorio de GitHub público o privado. Si deseas hacerlo desde la terminal te recomiendo GitHub Actions.

## Implementando pruebas

Ahora creemos unas cuantas pruebas. En el archivo app.component.html eliminamos todo el contenido por defecto, y dejamos solo un título y un párrafo:

```html
<h1 id="app-title">Hola mundo!</h1>
<p id="app-descr">Esta es una aplicación Angular</p>

<router-outlet></router-outlet>
```

Como puedes ver, este título y párrafo tienen un id. Este nos servirá para buscar los elementos en el DOM durante las pruebas unitarias. Ahora modifiquemos el archivo app.component.spec.ts, y dejemos solo dos pruebas:

```tsx
it('should create the app', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

it('should render title & description', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  const title = compiled.querySelector('#app-title');
  const descr = compiled.querySelector('#app-descr');
  expect(title.textContent).toContain('Hola mundo!');
  expect(descr.textContent).toContain('Esta es una aplicación Angular');
});
```

Ahora comprobemos que las pruebas se ejecutan correctamente con el comando ng test. Por defecto estas pruebas las ejecuta exitosamente en el navegador, como podemos observar en esta imagen:

![Resultado de ejecución en Chrome](/images/posts/2021-06-11-pruebas-angular-github-actions/ng-test-en-chrome.png)

## Ejecutar pruebas sin interfaz gráfica

Ya que las pruebas se ejecutan en un navegador (y que este se debe mostrar en pantalla) la ejecución de pruebas suele fallar en GitHub Actions, ya que solo está equipado con las herramientas mínimas y sin capacidades gráficas. Necesitamos una solución que nos permita usar un navegador por medio de la Terminal, sin interfaz gráfica. Para esto instalaremos Puppeter:

```bash
npm i puppeteer --dev
```

Esta instalación demorará algunos minutos, ya que puppeter incluye su propio binario del navegador Chromium. Al finalizar la instalación, cambiaremos la configuración de Karma en el archivo karma.conf.js:

```tsx
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
  config.set({
		...
    browsers: ['Chrome', 'ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--enable-features=NetworkService',
        ],
      },
    }
		...
  });
};
```

Principalmente, estamos obteniendo el directorio del ejecutable de Chromium por medio de Puppeteer, y lo añadimos como ChromeHeadlessCI.

Si tu proyecto contiene pruebas E2E con Protractor, también puedes configurarlo creando un nuevo archivo protractor-ci.conf.js en el directorio e2e, con la siguiente configuración:

```tsx
const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox', '--disable-gpu'],
    binary: require('puppeteer').executablePath(),
  },
};

exports.config = config;
```

Como ves, este archivo extiende la configuración del archivo protractor.conf.js. También modificaremos ese archivo para usar Puppeteer:

```tsx
config.capabilities = {
	...
  browserName: 'chrome',
  chromeOptions: {
    binary: require('puppeteer').executablePath(),
  },
	...
};
```

Finalmente cambiamos el archivo de configuración de Angular angular.json:

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "ghactions-angular": {
      ...
      "architect": {
        ...
        "test": {
          ...
					"configurations": { // Añadir configuración opcional 'ci'
            "ci": {
              "progress": false,
              "watch": false,
              "browsers": "ChromeHeadlessCI" // Usar Chromium sin GUI al usar configuración 'ci'
            }
          }
        }
				...
				"e2e": { // Si usas e2e
          ...
          "configurations": {
						...
            "ci": {
              "devServerTarget": "app:serve:ci",
              "protractorConfig": "e2e/protractor-ci.conf.js" // Usar protractor-ci al usar la configuración 'ci'
            }
          }
        },
      }
    }
  },
  ...
}
```

Ahora podemos ejecutar los tests sin abrir el navegador, pasando el flag --configuration=ci

```bash
ng test --configuration=ci
ng e2e --configuration=ci
```

Este es el resultado al ejecutar el comando con el flag --configuration=ci

[![Salida de ng e2e con --configuration=ci](/images/posts/2021-06-11-pruebas-angular-github-actions/ng-e2e-ci.svg)](https://asciinema.org/a/BH6XR33lzJBIMx4pjHP3fBCBi)

Asi mismo, si ejecutas los tests sin el flag, notaras que esta vez se abre el navegador Chromium y no el navegador Chrome que usas normalmente. Es importante que sigas ejecutando los tests en tu equipo local, y usar un entorno lo más parecido al que usaremos en GitHub Actions, usando el mismo binario y versión de Puppeteer.

Asegurate de subir estos últimos cambios a GitHub.

## Pruebas automáticas en GitHub Actions

Para utilizar GitHub Actions es necesario que tengamos un directorio .github, y dentro de este un directorio workflows. Dentro del directorio workflows podremos crear varios archivos .yml con distintos workflows para GitHub Actions. Por ahora solo crearemos un archivo ci.yml con el siguiente contenido:

```yaml

```

Ahora crearemos el primer Job del Workflow, que será el de la instalación de paquetes de NodeJS:

```yaml
jobs:
  install:
    name: Installation # Nombre del Job
    runs-on: ubuntu-latest # Ejecutar en Ubuntu
    steps:
      - uses: actions/checkout@v2 # Clonar repositorio actual
      - uses: actions/setup-node@v1 # Usar Node
        with:
          node-version: 12 # Versión de Node
      # Cargar cache de node_modules, para reducir tiempo de instalación en próximas ejecuciones
      - name: Cache node modules
        id: node-cache # Id del cache
        uses: actions/cache@v1
        with:
          path: node_modules
          # Se usará el mismo cache siempre y cuando sea el mismo sistema operativo y no existan cambios en el archivo package-lock
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
      # Instalar dependencias
      - name: Install dependencies
        # No ejecutar si se obtuvo node_modules de cache
        if: steps.node-cache.outputs.cache-hit != 'true' 
        run: npm install
```

Guardamos los cambios y los subimos a GitHub con el comando git push. Ahora vamos al repositorio y podemos ver que se ha iniciado GitHub Actions:

![Ejecución en GitHub Actions](/images/posts/2021-06-11-pruebas-angular-github-actions/github-actions-ejecucion.png)

Asi mismo podemos ver los detalles del workflow:

![Detalles del Workflow en progreso](/images/posts/2021-06-11-pruebas-angular-github-actions/workflow-en-progreso.png)

Al finalizar nos mostrará un check-mark en color verde, indicando que todos los Jobs fueron ejecutados exitosamente:

![Detalles del Workflow completado](/images/posts/2021-06-11-pruebas-angular-github-actions/workflow-completado.png)

Terminemos de configurar el Workflow. Este es el código completo del archivo ci.yml:

```yaml
name: Continuous Integration # Nombre del workflow

on: # ¿Cuando ejecutar?
  push: # Al hacer push a las siguientes ramas
    branches: [main] # o master
  pull_request: # Al crear un pull request a las siguientes ramas
    branches: [main] # o master

jobs:
  ci:
    name: Continuous Integration # Nombre del Job
    runs-on: ubuntu-latest # Ejecutar en Ubuntu
    steps:
      - uses: actions/checkout@v2 # Clonar repositorio actual
      - uses: actions/setup-node@v1 # Usar Node
        with:
          node-version: 12 # Versión de Node
      # Cargar cache de node_modules, para reducir tiempo de instalación en próximas ejecuciones
      - name: Cache node modules
        id: node-cache # Id del cache
        uses: actions/cache@v1
        with:
          path: node_modules
          # Se usará el mismo cache siempre y cuando sea el mismo sistema operativo y no existan cambios en el archivo package-lock
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
      # Instalar dependencias
      - name: Install dependencies
        # No ejecutar si se obtuvo node_modules de cache
        if: steps.node-cache.outputs.cache-hit != 'true' 
        run: npm install
      # Generar compilación de producción
      - name: Run Build command
        run: npm run build -- --prod
      # Ejecutar pruebas unitarias
      - name: Run Unit tests
        run: npm run test -- --configuration=ci
```

Subimos los cambios a GitHub con el comando git push, y volvemos a la página del repositorio en GitHub. Ahora vemos que esta ejecutando los nuevos pasos que especificamos:

![Ejecutando el Workflow Final](/images/posts/2021-06-11-pruebas-angular-github-actions/workflow-final-en-progreso.png)

Finalmente obtendremos este resultado:

![Resultado final](/images/posts/2021-06-11-pruebas-angular-github-actions/workflow-final-resultado.png)

Ahora cada vez que hagamos push a la rama principal main, o creemos un pull request a esa rama, se ejecutará este Workflow. Puedes ver todo el código fuente [aquí](https://github.com/angelxehg/ghactions-angular).
