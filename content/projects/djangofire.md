---
title: Djangofire
date: 2021-05-22
image: ../images/djangofire.png
caption: Demostración de Firebase Auth en una API REST
stack: ["React", "Firebase", "TypeScript", "Django"]
published: true
---

[Firebase](https://firebase.google.com/) nos ofrece una gran variedad de servicios y funcionalidades para implementar en nuestras aplicaciones, las cuales abarcan desde el desarrollo hasta la implementación y el crecimiento de nuestras aplicaciones.

Uno de los servicios más populares es [Firestore](https://firebase.google.com/docs/firestore), el cual nos ofrece una base de datos NoSQL rápida, confiable y asequible. Sin embargo, existen ocasiones en las que necesitaremos de utilizar una base de datos relacional, ya sea por los requerimientos de desarrollo, o para integrar un backend o una API _legacy_. Para este propósito Firebase nos permite generar un token JWT, con el cual podemos autenticar a nuestros usuarios en nuestras API REST.

## La idea

El propósito principal de este proyecto fue aplicar este concepto con una PWA, con la cual implementaría el Inicio de sesión de Google, y que esta identidad se pueda usar con una API creada con [Django](https://www.djangoproject.com/). Las funciones principales son:

- PWA hecha con React y soporte Offline
- Inicio de sesión con Google
- Validación de token JWT de Firebase

## Validando JWT de terceros

En muchos proyectos de la Universidad había utilizado autenticación con JWT, sim embargo nunca me detuve a pensar que era exactamente JWT. Y me sorprendí al descubrir que un Token JWT funciona de manera similar a una clave SSH: Un JWT puede ser leído por cualquier aplicación, y así leer la información o _payload_ que este contiene (regularmente algunos datos básicos del usuario, y un tiempo de expiración). Pero lo interesante es que contiene una firma pública, mediante la cual se puede validar la autenticidad del Token. Esto solo se puede hacer conociendo la clave con la que se firmó.

Sim embargo para validar un token de Firebase se requieren algunos pasos adicionales, como generar una clave privada, instalar algunas librerías en el proyecto de Django, y utilizar la clave privada de manera segura. En este [artículo de dev.to](https://dev.to/angelxehg/usando-firebase-para-autenticar-en-django-rest-framework-n1b) describo detalladamente como realicé este proyecto

## Recursos y referencias

- [Guía rápida para autenticar en Django REST Framework usando Firebase Auth](https://dev.to/angelxehg/usando-firebase-para-autenticar-en-django-rest-framework-n1b)
- [JSON Web Tokens](https://jwt.io/)
- [Demostración PWA](https://djangofire.netlify.app/)
- [Código fuente PWA](https://github.com/angelxehg/djangofire-pwa/)
- [Código fuente API](https://github.com/angelxehg/djangofire-api/)
- [Librería drf-firebase-auth](https://pypi.org/project/drf-firebase-auth/)
