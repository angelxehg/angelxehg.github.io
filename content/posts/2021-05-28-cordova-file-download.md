---
title: Implementando descargas de archivos con Capacitor/Cordova
resume: Guía rápida para implementar descarga y apertura de archivos en una aplicación hibrida
date: 2021-05-28
image: ../../images/studylater.png
caption: Implementando descargas de archivos con Capacitor/Cordova
type: post
---

En esta guía explicaré como implementar la función de descargas en una aplicación con [Capacitor](https://capacitorjs.com/) y React, tal como lo hice en la aplicación [StudyLater](../projects/studylater)

- [Descargar APK](https://github.com/angelxehg/studylater-app/releases)
- [Código fuente](https://github.com/angelxehg/studylater-app)

## Configurando Capacitor

Es necesario instalar Capacitor en nuestra aplicación web. Si creaste tu aplicación con Ionic 4/5 posiblemente ya lo tienes [configurado](https://capacitorjs.com/docs/getting-started/with-ionic), y puedes saltar al siguiente título.

En el caso de [StudyLater](../projects/studylater) lo hice sin Ionic, y usando una aplicación React, para demostrar que se puede usar sin Ionic ni Angular. Incluso se puede usar sin TypeScript, como lo demuestro en este [otro proyecto](../projects/react-capacitor-examples).

- Crear aplicación React con Typescript: `npx create-react-app [NOMBRE APP] --template cra-template-pwa-typescript`

- Instalar Bootstrap (opcional): `npm i bootstrap react-bootstrap@next` e importar en el archivo `index.tsx`:

```ts
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```

- Instalar Capacitor: `npm install @capacitor/core @capacitor/cli`

- Compilar aplicación: `npm run build`

- Configurar Capacitor: `npx cap init`

- Añadir plataformas: `npx cap add [android/ios]`. Se crearán los directorios `android` y `ios` respectivamente

- Copiar assets y actualizar plugins: `npx cap sync android`

- Abrir IDE y compilar:

  - Android: `npx cap open android` (Requiere Android Studio)

  - iOS: `npx cap open ios` (Requiere XCode)

- En Capacitor 3 permite ejecutar la aplicación en un dispositivo sin abir Android Studio, con el comando: `npx cap run [android/ios] --target [ID de Target]`

  - Para ver los dispositivos dispobibles usa el comando: `npx cap run [android/ios] --list`

NOTA: Cada vez que actualices tu aplicación deberás ejecutar los pasos `npm run build` y `npx cap sync`. Consulta más sobre la [instalación de Capacitor](https://capacitorjs.com/docs/getting-started) y el [comando cap run](https://capacitorjs.com/docs/cli/run#capacitor-cli-cap-run)

## Implementando descarga de archivos

Para implementar la descarga de archivos utilizaremos los plugins [File](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-file/) y [HTTP Nativo](https://github.com/silkimen/cordova-plugin-advanced-http). Si bien estos plugins se pueden utilizar sin Capacitor, en una aplicación Cordova, Capacitor facilita la instalación de estos, ya que los **trata como dependencias NPM** y no es necesario utilizar comandos como `cordova plugin ...` y otros.

- Instalar Ionic Native Core: `npm install @ionic-native/core`

- Instalar plugin File: `npm install cordova-plugin-file ; npm install @ionic-native/file`. Con este plugin podremos determinar la ruta donde guardar los archivos, así como realizar otras operaciones como crear directorios, eliminar archivos, etc.

- Instalar plugin HTTP: `npm install cordova-plugin-advanced-http ; npm install @ionic-native/http`. Con este plugin podremos descargar archivos, y realizar cualquier tipo de solicitud HTTP de manera nativa, y evitando errores que surgirían al solo usar `fetch()`, tales como errores de CORS.

- Actualizar plugins: `npx cap sync android`. Tras ejecutar este comando observarás cambios en archivos como `android/app/src/main/res/xml/config.xml`:

```xml
  <feature name="CordovaHttpPlugin">
    <param name="android-package" value="com.silkimen.cordovahttp.CordovaHttpPlugin"/>
  </feature>

  <feature name="File">
    <param name="android-package" value="org.apache.cordova.file.FileUtils"/>
    <param name="onload" value="true"/>
  </feature>
```

Ahora puedes implementar las descargas de la siguiente manera:

```ts
import { Capacitor } from '@capacitor/core';
import { HTTP } from '@ionic-native/http';
import { File } from '@ionic-native/file';

export const descargar = async () => {
  // URL de ejemplo
  const dummyPDF = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
  // Determinar que plataforma se esta usando
  const platform = Capacitor.getPlatform();
  if (platform === 'web') {
    throw new Error('Operación no permitida en versión Web');
  }
  // Determinar ruta donde se guardará el archivo
  const filePath = `${File.dataDirectory}archivo.pdf`;
  // Descargar archivo desde URL
  await HTTP.downloadFile(dummyPDF, {}, {}, filePath);
  // Guardar ruta donde se guardó el archivo en LocalStorage
  localStorage.setItem('DUMMY', filePath);
}
```

Recuerda ejecutar los comandos `npm run build && npx cap sync [android/ios]` antes de probar tu aplicación.

La implementación en una aplicación Angular sería diferente, ya que se puede importar estos plugins como módulos de Angular, e inyectarlos como dependencias. [Ver un ejemplo para Angular](https://ionicframework.com/docs/native/http#usage)

Es muy importante conservar la ruta donde se guardó el archivo. Si bien en este ejemplo guardo esta ruta en `localStorage`, no es conventiente utilizarlo en una aplicación en producción, ya que `localStorage` suele ser borrado periodicamente por el sistema operativo. Es mejor utilizar un plugin como [Ionic Storage](https://github.com/ionic-team/ionic-storage).

## Abriendo archivos descargados

Para abrir los archivos utlizaremos el plugin [File Opener 2](https://github.com/pwlin/cordova-plugin-file-opener2). Este plugin permite abrir los archivos descargados con la aplicación por defecto registrada para el tipo de archivo; Si se abre una imagen, la abrirá en la Galería, en cambio un archivo PDF lo podría abrir en el visor PDF de Google Drive, o cualquier otro visor PDF. Para otro tipo de archivos se debe pedir al usuario instalar una aplicacion de terceros, o utilizar otra solución como el plugin [Document Viewer](https://github.com/sitewaerts/cordova-plugin-document-viewer) que ya incluye un visor de documentos.

- Instalar plugin File Opener 2: `npm install cordova-plugin-file-opener2 ; npm install @ionic-native/file-opener`

- Actualizar plugins: `npx cap sync android`. Tras ejecutar este comando observarás cambios en archivos como `android/app/src/main/res/xml/config.xml`:

```xml
  <feature name="FileOpener2">
    <param name="android-package" value="io.github.pwlin.cordova.plugins.fileopener2.FileOpener2"/>
  </feature>
```

Ahora puedes implementar la apertura de archivos de la siguiente manera:

```ts
import { Capacitor } from '@capacitor/core';
import { FileOpener } from '@ionic-native/file-opener';

export const abrir = async () => {
  // Cargar ruta del archivo que descargamos antes
  const filePath = localStorage.getItem('DUMMY');
  if (!filePath) {
    throw new Error('No se ha descargado el archivo');
  }
  // Determinar que plataforma se esta usando
  const platform = Capacitor.getPlatform();
  if (platform === 'web') {
    throw new Error('Operación no permitida en versión Web');
  }
  // Se debe especificar que tipo de archivo es
  const mimeType = 'application/pdf';
  // Abrir archivo
  await FileOpener.open(filePath, mimeType);
}
```

Actualmente el plugin presenta un issue que [impide la compilación](https://github.com/pwlin/cordova-plugin-file-opener2/issues/256#issuecomment-657574795). Para solucionarlo podemos usar *Jetifier*:

- Instalar Jetifier: `npm i jetifier`

- Ejecutar Jetifier: `npx jetify`

Deberemos ejecutar este comando despues de `npm run build`

## Conclusión

Uno de los métodos más sencillos para crear aplicaciones móviles es el uso de [Capacitor](https://capacitorjs.com/), el cual nos permite convertir cualquier aplicación web en una aplicación hibrida. Cuando se usa en conjunto con los [plugins de Capacitor](https://capacitorjs.com/docs/plugins), [plugins de Cordova](https://ionicframework.com/docs/native/community) y el framework [Ionic](https://ionicframework.com/) podemos construir aplicaciones con un buen diseño y funcionalidades nativas.
