---
title: StudyLater
date: 2021-05-28
image: ../images/studylater.png
caption: Demostración de descarga y apertura de archivos
stack: ["React", "TypeScript", "Capacitor", "Android"]
published: true
---

Con la aparición de herramientas como [Ionic Framework](https://ionicframework.com/) se ha popularizado el desarrollo de **Aplicaciones Hybridas**: _Apps_ desarrolladas con tecnologías web, pero que a vista del usuario se comportan como _apps_ nativas. Y uno de los diferenciadores clave que podemos incluir en nuestras aplicaciones Hybridas es la integración con funcionalidades del sistema, tales como Almacenamiento, Cámara, Notificaciones, Sensores, etc.

## La idea

La idea al desarrollar **StudyLater** es la de una aplicación donde se puedan descargar materiales de estudio, como PDFs, y tenerlos organizados y disponibles sin conexión. También la intención fue probar implementar estas funcionalidades a través de [Capacitor](https://capacitorjs.com/):

- Descargar y almacenar archivos
- Abrir archivos en el visor de PDF del sistema
- Inicio de sesión con Google de manera nativa

## Los retos

Una de las tareas más difíciles fue el descargar archivos. Para empezar, al utilizar la función `fetch()` para descargar archivos solían aparecer errores de _CORS_, sobre todo cuando las descargas provienen de sitios sin certificado SSL. Este comportamiento es el esperado dentro de JavaScript en un navegador, pero muchos de los PDFs que un usuario querría descargar están en FTPs públicos, sin HTTPS.

Para resolver esto, tendríamos que descargarlos con un cliente HTTP nativo, usando el plugin [Advanced HTTP](https://github.com/silkimen/cordova-plugin-advanced-http). Ahora la posibilidad de descargar desde HTTPS dependerá de la configuración de Android. Incluso este plugin ya incluye el método `download()`, y solo necesitaba saber en qué ubicación almacenar los archivos. Esto se resuelve con el plugin [File](https://ionicframework.com/docs/native/file).

Para abrir los archivos utilicé el plugin [File Opener](https://github.com/pwlin/cordova-plugin-file-opener2). Además, para que el _login_ de Google se sienta más nativo, utilicé el plugin [Google Plus](https://github.com/EddyVerbruggen/cordova-plugin-googleplus), y solo necesité registrar una aplicación Android en la consola de Firebase

## Resultados

Finalmente decidí detallar esta experiencia en un [artículo de dev.to](https://dev.to/angelxehg/implementando-descargas-de-archivos-con-capacitor-cordova-4844), y que pueda servir de guía a cualquier persona que desee implementar una función de descarga en sus _apps_.

También probé la viabilidad de utilizar Capacitor con otras tecnologías independientes de Ionic. Para construir las interfaces y darle vida a la aplicación utilicé React, así como para el diseño utilicé Bootstrap, aunque quizá no sea muy adecuado para una aplicación móvil, como si lo es para un sitio web responsivo.

## Recursos y referencias

- [Implementando descargas de archivos con Capacitor/Cordova](https://dev.to/angelxehg/implementando-descargas-de-archivos-con-capacitor-cordova-4844)
- [Código fuente del proyecto](https://github.com/angelxehg/studylater-app)
- [Descargar APK](https://github.com/angelxehg/studylater-app/releases)
- [Documentación Firebase](https://firebase.google.com/docs)
- [Ionic Native](https://ionicframework.com/docs/native/community)
- [Plugin File](https://ionicframework.com/docs/native/file)
- [Plugin HTTP Nativo](https://github.com/silkimen/cordova-plugin-advanced-http)
- [Plugin File Opener](https://github.com/pwlin/cordova-plugin-file-opener2)
- [Plugin Google Plus](https://github.com/EddyVerbruggen/cordova-plugin-googleplus)
