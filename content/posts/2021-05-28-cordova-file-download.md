---
title: Implementando descargas de archivos con Capacitor/Cordova
resume: Guía rápida para implementar descarga y apertura de archivos en una aplicación hibrida
date: 2021-05-28
image: ../../images/studylater.png
caption: Implementando descargas de archivos con Capacitor/Cordova
type: post
---

Uno de los métodos más sencillos para crear aplicaciones móviles es el uso de [Capacitor](https://capacitorjs.com/), el cual nos permite convertir cualquier aplicación web en una aplicación hibrida. Cuando se usa en conjunto con los [plugins de Capacitor](https://capacitorjs.com/docs/plugins), [plugins de Cordova](https://ionicframework.com/docs/native/community) y el framework [Ionic](https://ionicframework.com/) podemos construir aplicaciones con un buen diseño y funcionalidades nativas.

En esta guía explicaré como implementar la función de descargas, tal como lo hice en la aplicación [StudyLater](../projects/studylater)

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

- Añadir plataformas: `npx cap add [android/ios]`

- Copiar assets y actualizar plugins: `npx cap sync android`

- Abrir IDE y compilar:

  - Android: `npx cap open android` (Requiere Android Studio)

  - iOS: `npx cap open ios` (Requiere XCode)

- En Capacitor 3 permite ejecutar la aplicación en un dispositivo sin abir Android Studio, con el comando: `npx cap run [android/ios] --target [ID de Target]`

  - Para ver los dispositivos dispobibles usa el comando: `npx cap run [android/ios] --list`

NOTA: Cada vez que actualices tu aplicación deberás ejecutar los pasos `npm run build` y `npx cap sync`. Consulta más sobre la [instalación de Capacitor](https://capacitorjs.com/docs/getting-started) y el [comando cap run](https://capacitorjs.com/docs/cli/run#capacitor-cli-cap-run)
